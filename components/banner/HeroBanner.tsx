"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
    return (
        <section className="px-4 sm:px-14 bg-[#f4f3ed] py-16 rounded-b-2xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full lg:max-w-8xl mx-auto bg-[url('https://www.transparenttextures.com/patterns/grunge-wall.png')] rounded-xl"
            >
                <div className="text-center relative mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-3xl sm:text-6xl md:6xl lg:text-9xl  xl:text-[170px] font-extrabold text-gray-900 drop-shadow-lg tracking-wide leading-[1.2]"
                    >
                        TARANPREET SINGH
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3, ease: "easeOut" } },
                            }}
                            className="flex items-center space-x-[-12px]"
                        >
                            {["02", "01", "03"].map((num, index) => (
                                <motion.img
                                    key={index}
                                    src={`https://nino-next-js.vercel.app/assets/images/avatar/${num}.jpg`}
                                    alt={`Client ${index + 1}`}
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6 }}
                                />
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="text-center md:text-left"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">
                                100+ Reviews <span className="text-gray-600 text-lg">(4.96 of 5)</span>
                            </h3>
                            <p className="text-gray-700 text-base">
                                ⭐⭐⭐⭐⭐ Five-star reviews from my esteemed clients.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, y: 50, rotate: 10 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                            className="w-full h-[22rem] rounded-2xl flex justify-center items-end"
                        >
                            <img
                                src="https://media.licdn.com/dms/image/v2/D5603AQFUu9NJaxkp2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720518359587?e=1746662400&v=beta&t=o2auDT1f0CRrKsnmKj8GmP77-l76_FdT8CDxbaV7opA"
                                alt="Profile"
                                className="w-8/12 sm:w-94 md:w-80 lg:w-96 xl:w-[28rem]  
                                h-92 sm:h-92 md:h-96 xl:h-[30rem]  
                                object-cover absolute -top-18 lg:-top-26 translate-y-20 lg:translate-y-10  
                                rounded-2xl shadow-lg border-4 border-white rotate-12 hover:rotate-0 transition-transform duration-1000"
                            />
                        </motion.div>
                    </div>

                    <div className="text-center md:text-left space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            className="text-gray-700 text-lg sm:text-xl leading-relaxed"
                        >
                            Hi, I’m Taranpreet, a passionate Full Stack Developer dedicated to creating user-friendly, responsive, and engaging websites..
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                            href="#"
                            className="inline-block bg-black border text-white px-8 py-3 hover:bg-transparent/90 hover:text-black shadow-md transition-all duration-300"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
