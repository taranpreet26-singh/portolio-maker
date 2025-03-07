"use client"
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const company = ['/images/partner1.png','/images/clear-logo.png', '/images/partner2.png', '/images/partner3.png','/images/clear-logo.png', '/images/partner4.png', '/images/partner1.png', '/images/partner2.png', '/images/partner3.png', '/images/partner4.png'];
    const companyGroup = [...company, ...company, ...company];

    return (
        <motion.div className="h-[22rem] pt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div>
                <motion.div 
                    className="bg-[#f4f3ed] text-black flex items-center justify-center font-thin font-serif text-xl md:text-2xl"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    COMPANY I WANT TO WORK WITH
                </motion.div>
                <div className="flex justify-center mt-10">
                    <div className="overflow-hidden w-[80%] relative">
                        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-transparent"></div>
                        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-transparent"></div>
                        <motion.div
                            initial={{ x: "0" }}
                            animate={{ x: "-50%" }}
                            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                            className="flex justify-center items-center h-22 w-max gap-10">
                            {companyGroup.map((element, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.3, ease: easeInOut }}
                                    key={index}>
                                    <Image width={300} height={300} src={element} alt="company-logo" className="w-24 h-auto" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div 
                    className="h-auto mt-10 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}>
                    <div className="w-full px-4 sm:px-14 mx-auto flex flex-col items-center md:items-start md:flex-row">
                        <motion.div 
                            className="w-[30%]"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                        </motion.div>
                        <motion.div 
                            className="w-[70%] text-justify"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Hello! I'm Taranpreet Singh, a Full Stack Developer with a B.Tech in IT, driven by a relentless thirst for learning and a passion for crafting robust, user-centric applications...
                                My technical expertise spans React, TypeScript, Node.js, Express, and PostgreSQL...
                                I am always eager to connect with industry leaders, developers, and creatives who share a commitment to innovation...
                            </p>
                            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 text-center max-w-5xl mx-auto border-t border-gray-700 pt-8">
                                {[
                                    { label: "Years of Experience", value: "8+" },
                                    { label: "Completed Projects", value: "1k+" },
                                    { label: "Client Satisfactions", value: "90%+" }
                                ].map((stat, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}>
                                        <span className="text-4xl font-bold">{stat.value}</span>
                                        <p className="text-sm uppercase mt-2 text-gray-400">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}