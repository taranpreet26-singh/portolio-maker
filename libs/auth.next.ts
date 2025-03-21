import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"

export  const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:'Email',
            credentials:{
                email:{label:'Email',placeholder:'example@gmail.com',type:'text'},
                password:{label:'Password',placeholder:'password',type:'password'}
            },
            async authorize(credentials : any, req : any) {
                console.log(credentials)
                const username = credentials.username
                const password = credentials.password

                return {
                    id: 'user1',
                    name: username,
                    image: password,
                }
            },
        })
    ]
})


