"use client"
import { useState } from "react";
import Input from "../Input";
import { Mail, User } from "lucide-react";
import { CgNametag } from "react-icons/cg";
import { SiNamebase } from "react-icons/si";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";
import { URL } from "@/utils/menu_data";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignUpCom() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isResRecieved,setIsResRecieved] = useState<boolean>(true)
    const router = useRouter()

    async function handleSubmission() {
        try {
            setIsResRecieved(false)
            const response = await axios.post(`${URL}/api/signup`, {
                username,
                firstName,
                email,
                lastName,
                password
            })
            if(response.data){
                toast.success(response.data.msg)
                setIsResRecieved(true)
            }
        } catch (error) {
            toast.error('Unexpected Error')
            console.log(error)

        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-black h-screen flex items-center justify-center px-4 lg:px-14"
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="w-[30rem] flex flex-col bg-[#f4f3ed] p-6 rounded-2xl shadow-lg border border-gray-700"
            >
                <h1 className="text-3xl font-bold text-black/80 mb-4 text-center">Sign Up</h1>
                <div className="space-y-4">
                    <Input
                        title="Email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon={<Mail />}
                        name="lastName"
                    />

                    <Input
                        title="First Name"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        icon={<SiNamebase />}
                        name="firstName"
                    />
                    <Input
                        title="Last Name"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        icon={<CgNametag />}
                        name="lastName"
                    />
                    <Input
                        title="Username"
                        placeholder="taran@26"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        icon={<User />}
                        name="username"
                    />
                    <div className="flex flex-col text-lg font-medium">
                        <label className="text-black/80 font-semibold mb-1">Password</label>
                        <div className="relative border rounded-lg text-black">
                            <input
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                value={password}
                                type={showPassword ? "text" : "password"}
                                required
                                className="p-2 text-base rounded-lg w-full font-light bg-white/90 placeholder-gray-500 focus:outline-none"
                            />
                            <div className="absolute right-3 top-[0.7rem] text-gray-600 cursor-pointer">
                                {showPassword ? (
                                    <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} />
                                ) : (
                                    <AiOutlineEye onClick={() => setShowPassword(true)} />
                                )}
                            </div>
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmission}
                        className="mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
                    >
                        {(isResRecieved)? "Sign Up":"Loading...."} 
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-200 w-full h-12 flex items-center justify-center cursor-pointer mt-2 rounded-lg font-medium hover:bg-red-300 transition-all"
                        onClick={() => router.push('/dashboard')}
                    >
                        Go to Dashboard
                    </motion.div>
                </div>
            </motion.div>
            <Toaster position="top-right" />
        </motion.div>
    );
}
