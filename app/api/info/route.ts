import { NextRequest, NextResponse } from "next/server"
import cloudinary from "cloudinary";
import { PrismaClient } from "@prisma/client";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    try {
        const {searchParams} = new URL(req.url)
        console.log(searchParams)
        const userId = searchParams.get('userId[userid]')
        console.log(userId)

        if(userId){
            console.log('inside')
            const response = await prisma.info.findFirst({
                where:{userId}
            })
            console.log(response,"response")
            
            return NextResponse.json({
                info:response
            })
        }
        return NextResponse.json({
            msg:"Fetching Error"
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "Unexpected Error"
        })
    }
}

export async function POST(req: NextRequest) {
    try {
        const form = await req.formData()
        const name = form.get('name') as string
        const email = form.get('email') as string
        const info = form.get('info') as string
        const about = form.get('about') as string
        const experience = form.get('experience') as string
        const project = form.get('project') as string
        const client = form.get('client') as string
        const userId = form.get('userId') as string
        const file = form.get('image') as File | string 

        console.log(name,email,info,about,experience,project,client)

        const alreadyCreated = await prisma.info.findFirst({
            where:{
                userId
            },
            select:{
                id:true
            }
        })

        if(alreadyCreated?.id){
            return NextResponse.json({
                msg:"You Already Created , If you want to change content then Update it."
            })
        }
        if (!file || !(file instanceof Blob)) {
            return NextResponse.json({ msg: "No file uploaded or wrong file type" }, { status: 400 });
        }
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const uploadResult = await cloudinary.v2.uploader.upload(
            `data:${file.type};base64,${buffer.toString("base64")}`,
            {
                folder: 'user_image',
                resource_type: "auto"
            }
        )
        console.log("Cloudinary upload result: ", uploadResult.secure_url);


        if(userId !== null){
            const response = await prisma.info.create({
                data:{
                    userId,
                    client_satisification_per:client,
                    about,
                    info,
                    image:uploadResult.secure_url,
                    experience,
                    total_project:project,
                    name
                },
                select:{
                    id:true,
                    userId:true
                }
            })

            if(response.id){
                return NextResponse.json({
                    msg:"Portfolio is created Successfully"
                })
            }
            return NextResponse.json({
                msg:'Error Occur'
            })
        } 
        
        return NextResponse.json({
            msg: "File uploaded successfully",
            imageUrl: uploadResult.secure_url,
        });


    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "Unexpected Error"
        })
    }
}