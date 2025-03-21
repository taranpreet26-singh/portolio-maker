import { PrismaClient } from "@prisma/client";
import NextAuth, { Session, User, NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Email/Username", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const { username, password } = credentials;

        const response = await prisma.user.findFirst({
          where: {
            OR: [{ username: username }, { email: username }],
            password,
          },
          select: {
            id: true,
            username: true,
            email: true,
            firstName: true,
          },
        });

        console.log(response);

        if (response) {
          return {
            id: response.id,
            username: response.username,
            email: response.email,
            name: response.firstName,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: ({ token, user }: { token: JWT; user?: User }) => {
      console.log(token, "token");
      if (user) {
        token.userId = user.id;
        token.email = user.email;
      }
      return token;
    },

    session: ({ session, token }: { session: Session; token: JWT }) => {
      console.log(session, "session");
      console.log(token, "token");
      if (session.user) {
        session.user.id = token.userId as string; 
        session.user.email = token.email as string;
      }
      return session;
    },

    redirect: async () => "/dashboard",
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
