"use client"
import { motion } from "framer-motion"
import { ContactIcon, Mail, MailIcon, MapPin, User } from "lucide-react"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs"
import { GrGithub } from "react-icons/gr"
import { LiaLinkedin } from "react-icons/lia"
import Input from "../Input"
import { MdSubject } from "react-icons/md"

const data = [
    {
        icon: <MapPin />,
        title: "MY LOCATION",
        info: "Jalandhar Punjab, India"
    },
    {
        icon: <ContactIcon />,
        title: "CONTACT NUMBER",
        info: "+91 8360008385"
    },
    {
        icon: <MailIcon />,
        title: "EMAIL US",
        info: "ramghrialoveysingh123@gmail.com"
    }
]
export default function Contact() {
    return <motion.div
        className="bg-[#f4f3ed] px-4 sm:px-8 lg:px-14 pt-20 pb-10 text-black"
    >
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            className="text-xl sm:text-3xl md:text-5xl font-bold mb-10"
        >
            CONTACT US
        </motion.h2>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
            className="flex flex-col lg:flex-row gap-5 "
        >
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                className="flex flex-col w-full lg:w-[30%] bg-white/60 p-10 gap-8 rounded-2xl"
            >
                {data.map((element, index) => {
                    return <div key={index}>
                        <div className="flex flex-col gap-5 group">
                            <div className=" w-fit p-1 border group-hover:bg-black group-hover:text-white duration-1000 rounded-sm">
                                {element.icon}
                            </div>
                            <div>
                                <h1 className="text-2xl text-black/70 font-semibold">{element.title}</h1>
                                <p className="text-black/50 text-sm   lg:text-xl">{element.info}</p>
                            </div>
                        </div>
                    </div>
                })}
                <div className="flex flex-col">
                    <h1 className="text-2xl text-black/70 font-semibold">SOCIAL LINK:</h1>
                    <div className="flex group gap-4">
                        <Link href={'https://x.com/Taranpreet85947'} className="w-fit p-1 border group-hover:bg-black group-hover:text-white duration-1000 rounded-sm">
                            <BsTwitterX />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/taranpreet-singh-57185a1a0/'} className="w-fit p-1 border group-hover:bg-blue-500 group-hover:text-white duration-1000 rounded-sm">
                            <LiaLinkedin />
                        </Link>
                        <Link href={'https://github.com/taranpreet26-singh'} className="w-fit p-1 border group-hover:bg-gray-900 group-hover:text-white duration-1000 rounded-sm">
                            <GrGithub />
                        </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
                className="w-full lg:w-[70%] bg-white/60 rounded-2xl p-10 flex flex-col gap-10"
            >
                <div className="flex gap-6">
                    <div className="w-[50%]">
                        <Input title="full name" placeholder="steve milner" icon={<User />} />
                    </div>
                    <div className="w-[50%]">
                        <Input title="email address" placeholder="hello@gmail.com" icon={<Mail />} />
                    </div>
                </div>
                <div>
                    <Input title="subject" placeholder="your subject" icon={<MdSubject />} />
                </div>
                <div>
                    <div className="text-lg font-semibold">YOUR MESSAGE</div>
                    <div>
                        <textarea placeholder={'Write Your Message'} rows={5}  className="p-2 text-xl border rounded-lg w-full" />
                    </div>
                </div>
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    href="#"
                    className="w-[12rem] text-center inline-block bg-black border text-white px-8 py-3 hover:bg-transparent/90 hover:text-black shadow-md transition-all duration-300"
                >
                    Get In Touch
                </motion.a>
            </motion.div>
        </motion.div>
    </motion.div>
}