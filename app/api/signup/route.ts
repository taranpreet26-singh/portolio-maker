import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const { username, email, firstName, lastName, password } = await req.json()

        const userExist = await prisma.user.findFirst({
            where: {
                OR:[
                    {username},
                    {email}
                ]
            },
            select: {
                username: true
            }
        })
        console.log(userExist)
        if (userExist?.username) {
            return NextResponse.json({
                msg: "User Already Exist"
            })

        } else {

            console.log(username, email, password)

            const response = await prisma.user.create({
                data: {
                    username,
                    email,
                    password,
                    firstName,
                    lastName
                },
                select: {
                    username: true
                }
            })
            return NextResponse.json({
                msg: `You're Signed Up as ${response.username}`
            })

        }
    } catch (error) {
        console.log(error)
        return NextResponse.json('Something went wrong')
    }
}