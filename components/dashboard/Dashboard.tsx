"use client";
import { Calendar1Icon, ImageIcon, Mail, PencilIcon, PercentCircleIcon, User2 } from "lucide-react";
import { GoNumber } from "react-icons/go";
import Input from "../Input";
import { useEffect, useState } from "react";
import {  motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { URL } from "@/utils/menu_data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CgClose } from "react-icons/cg";

export default function DashboardField() {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [info, setInfo] = useState<string>('')
    const [about, setAbout] = useState<string>('')
    const [experience, setExperience] = useState<string>('')
    const [project, setProject] = useState<string>('')
    const [client, setClient] = useState<string>('')
    const [image, setImage] = useState<File | undefined>()
    const session = useSession()
    const [deleteValue,setDeleteValue] = useState<string>('')
    const router = useRouter()
    const [isProcessing, setProcessing] = useState<boolean>(false)
    const [id, setId] = useState<string>('')

    const [isDeleteOpen, setIsOpenDelete] = useState<boolean>(false)
    console.log(id)


    const [previewImage, setPreviewImage] = useState<string | null>(null);

    async function handleInfoSubmit() {
        try {
            if (!name || !email || !info || !about || !experience || !project || !client) {
                toast.error("All fields are required.");
                return;
            }
            setProcessing(true);

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('info', info)
            formData.append('about', about)
            formData.append('experience', experience)
            formData.append('project', project)
            formData.append('client', client)
            formData.append('userId', String(session.data?.user.id))
            if (image) {
                formData.append('image', image)
            }

            const response = await axios.post(`${URL}/api/info`, formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })
            if (response.data) {
                console.log(response)
                toast.success(response.data.msg)
                setId(response.data.id)
            }
        } catch (error) {
            toast.error('Submission Error')
            console.log(error)
        } finally {
            setProcessing(false)
        }
    }
    useEffect(() => {
        console.log(previewImage, "priveimage")
    }, [image, previewImage])

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log(image)
            setImage(e.target.files?.[0])
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
            console.log("Preview Image:", reader.result); // This will show the base64 string properly now.

        }
    };


    async function handleDelete() {
       try {
        console.log('inside delete')
         const response =  await axios.delete(`${URL}/api/info`,{
             params:{"userId" : String(session.data?.user.id)}
         })
         toast.success(response.data.msg)
       } catch (error) {
        console.log(error)
        toast.error('Submission Error')
       }
    }

    return (
        <motion.div
            className="max-w-3xl mx-auto relative bg-white p-8 rounded-b-2xl shadow-lg border-b-8 border-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

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
                        icon={<User2 />}
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />

                    <Input
                        title="Email"
                        placeholder="example@mail.com"
                        icon={<Mail />}
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <Input
                        title="Short Info"
                        placeholder="Write a short bio..."
                        icon={<PencilIcon />}
                        name="info"
                        value={info}
                        onChange={(e) => {
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
                            <input autoComplete="new-password" placeholder={"8+"} name={"year"} value={experience} onChange={(e) => {
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
                            <input autoComplete="new-password" value={project} onChange={(e) => {
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
                            <input autoComplete="new-password" value={client} onChange={(e) => {
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
                    onChange={(e) => {
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
                        width={400}
                        height={400}
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
                {(!isProcessing) ? "Create" : "Making..."}
            </motion.button>



            <div className="flex gap-4 mt-4">
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "green" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 bg-black text-white font-semibold rounded-lg shadow-md transition"
                    onClick={() => router.push(`/dashboard/update-portfolio/${session.data?.user.id}`)}
                >
                    Update
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "red" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 bg-black text-white font-semibold rounded-lg shadow-md transition"
                    onClick={() => setIsOpenDelete(true)}
                >
                    Delete
                </motion.button>
            </div>

            {isDeleteOpen &&
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }} // For closing animation
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                    

                    className="bg-black/80 absolute top-0 left-0 rounded-b-2xl border-b-4 drop-shadow-2xl  w-full h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute top-5 right-6" onClick={() => {
                        setIsOpenDelete(false)
                    }}>
                        <CgClose style={{ width: 30, height: 30 }} />
                    </div>
                    <div className="w-[22rem] h-48 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
                        <label className="text-red-500 font-bold text-lg uppercase">
                            Delete My Portfolio
                        </label>

                        <input
                            type="text"
                            value={deleteValue}
                            onChange={(e)=>{
                                setDeleteValue(e.target.value)
                               
                            }}
                            placeholder="Type 'delete my portfolio' to confirm"
                            className="p-2 w-full border border-gray-300 rounded-md text-black outline-none"
                        />

                        <button
                            className={`w-full p-2 mt-2 bg-red-500 text-white font-semibold rounded-md shadow-md ${
                                deleteValue.toLowerCase() === 'delete my portfolio'?
                                "bg-red-500 hover:bg-red-600 cursor-pointer":"bg-gray-500 cursor-not-allowed"
                            }`}
                            disabled={deleteValue.toLowerCase() !== 'delete my portfolio'}
                            onClick={handleDelete}
                        >
                            Confirm Delete
                        </button>
                    </div>
                </motion.div>
            }

            <Toaster position="bottom-center" />
        </motion.div>
    );
}
