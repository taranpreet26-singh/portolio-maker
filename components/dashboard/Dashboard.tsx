"use client";
import { Calendar1Icon, ImageIcon, Mail, PencilIcon, PercentCircleIcon, User2 } from "lucide-react";
import { GoNumber } from "react-icons/go";
import Input from "../Input";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { URL } from "@/utils/menu_data";
import Image from "next/image";

export default function DashboardField() {

    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [info,setInfo] = useState<string>('')
    const [about,setAbout] = useState<string>('')
    const [experience,setExperience] = useState<string>('')
    const [project,setProject] = useState<string>('')
    const [client,setClient] = useState<string>('')
    const [image,setImage] = useState<File |  undefined>()
    const session = useSession()
    const [isProcessing,setProcessing] = useState<boolean>(false)
    const [id,setId] = useState<string>('')
    console.log(session.data?.user.id,typeof session.data?.user.id)
    

    const [previewImage, setPreviewImage] = useState<string | null>(null);

    async function handleInfoSubmit(){
        try {
            if (!name || !email || !info || !about || !experience || !project || !client) {
                toast.error("All fields are required.");
                return;
            }
            setProcessing(true); 

            const formData = new FormData()
            formData.append('name',name)
            formData.append('email',email)            
            formData.append('info',info)            
            formData.append('about',about)            
            formData.append('experience',experience)            
            formData.append('project',project)            
            formData.append('client',client)  
            formData.append('userId',String(session.data?.user.id))
            if(image){
                formData.append('image',image)            
            }          

            const response = await axios.post(`${URL}/api/info`,formData,{
                headers:{
                    'Content-Type':"multipart/form-data"
                }
            })
            if(response.data){
                console.log(response)
                toast.success(response.data.msg)
                setId(response.data.id)
            }
        } catch (error) {
            toast.error('Submission Error')
            console.log(error)
        }finally{
            setProcessing(false)
        }
    }
    useEffect(()=>{

    },[image])

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files?.[0])
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            className="max-w-3xl mx-auto relative bg-white p-8 rounded-2xl shadow-lg border-b-8 border-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {id}
            
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2  gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-6">
                    <Input
                        title="Full Name"
                        placeholder="John Doe"
                        icon={<User2/>}
                        name="name"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                    />

                    <Input
                        title="Email"
                        placeholder="example@mail.com"
                        icon={<Mail />}
                        name="email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />

                    <Input
                        title="Short Info"
                        placeholder="Write a short bio..."
                        icon={<PencilIcon />}
                        name="info"
                        value={info}
                        onChange={(e)=>{
                            setInfo(e.target.value)
                        }}
                    />
                </div>
                <div className="space-y-6">

                    <div className="flex flex-col text-lg font-medium">
                        <div className="text-black/80 font-semibold">
                            {"TOTAL EXPERIENCE"}
                        </div>
                        <div className="relative border rounded-lg text-black">
                            <input autoComplete="new-password" placeholder={"8+"} name={"year"} value={experience} onChange={(e)=>{
                                setExperience(e.target.value)
                            }} required className="p-2 text-base rounded-lg w-full font-light" />
                            <div className="absolute right-2 top-[0.7rem] text-gray-600">
                                {<Calendar1Icon />}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-lg font-medium">
                        <div className="text-black/80 font-semibold">
                            {"TOTAL PROJECT"}
                        </div>
                        <div className="relative border rounded-lg text-black">
                            <input autoComplete="new-password" value={project} onChange={(e)=>{
                                setProject(e.target.value)
                            }} placeholder={"10"} name={"project"} required className="p-2 text-base rounded-lg w-full font-light" />
                            <div className="absolute right-2 top-[0.7rem] text-gray-600">
                                {<GoNumber />}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-lg font-medium">
                        <div className="text-black/80 font-semibold">
                            {"CLIENT SATISFICATION"}
                        </div>
                        <div className="relative border rounded-lg text-black">
                            <input autoComplete="new-password" value={client} onChange={(e)=>{
                                setClient(e.target.value)
                            }} placeholder={"99%"} name={"client"} required className="p-2 text-base rounded-lg w-full font-light" />
                            <div className="absolute right-2 top-[0.7rem] text-gray-600">
                                {<PercentCircleIcon />}
                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>

            <div className="mt-6">
                <label className="text-black/80 font-semibold">About Me</label>
                <textarea
                    name="about"
                    value={about}
                    onChange={(e)=>{
                        setAbout(e.target.value)
                    }}
                    placeholder="Tell about your skills and education"
                    className="p-3 text-black w-full h-32 border rounded-lg bg-white shadow-md outline-none resize-none"
                />
            </div>

            <div className="mt-6">
                <label className="text-black/80 font-semibold">Upload Your Image</label>
                <div className="relative">
                    <input
                        type="file"
                        required
                        onChange={handleImageUpload}
                        className="p-3 w-full border rounded-lg text-gray-7 bg-white shadow-md outline-none"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800">
                        <ImageIcon />
                    </div>
                </div>
            </div>

            {previewImage && (
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    
                                       
                    <Image
                        src={previewImage}
                        alt="Uploaded preview"
                        className="w-full h-[42rem] object-cover rounded-lg shadow-md"
                    />
                </motion.div>
            )}

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInfoSubmit}
                className="mt-6 w-full p-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-red-500/70 transition"
            >
                {(!isProcessing)?"Create" :"Making..." }
            </motion.button>
            <Toaster position="bottom-center"/>
        </motion.div>
    );
}
