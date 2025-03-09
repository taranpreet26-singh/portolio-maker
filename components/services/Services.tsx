"use client";
import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        id: 1,
        title: "Brand Identity Design",
        info: "Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates. kits you need to create a true website within minutes."
    },
    {
        id: 2,
        title: "Visual Design",
        info: "Blend of artistic intuition with strategic insight to craft a visual identity."
    },
    {
        id: 3,
        title: "UX Research",
        info: "Blend of functionality with aesthetics to create delightful experience."
    },
    {
        id: 4,
        title: "Art Direction",
        info: "Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics."
    }
];

export default function Services() {
   
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 } }
            transition={{ duration: 0.8, ease: easeInOut }}
            className="bg-[#f4f3ed] text-black px-4 sm:px-14 pt-10 py-16"
        >
            <div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 } }
                    transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}
                    className="text-xl sm:text-3xl md:text-5xl font-bold mb-6"
                >
                    SERVICES
                </motion.div>

                <div className="flex flex-col gap-6 px-12">
                    {services.map((service, index) => {
                        if (index % 2 !== 0) return null;

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 } }
                                transition={{ duration: 0.6, ease: easeInOut, delay: index * 0.2 }}
                            >
                                {index % 4 === 0 ? (
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <motion.div
                                            initial={{ opacity: 0.5, x: -300 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, ease: easeInOut, delay: 0.6 }}
                                            className="w-full lg:w-[70%] h-full gap-10  lg:gap-0 lg:h-[22rem] flex group flex-col p-10 py-12 rounded-2xl justify-between bg-white/80 drop-shadow-lg"
                                        >
                                            <div className="border w-fit p-1 group-hover:bg-black duration-1000 ease-in-out group-hover:text-white rounded-md">
                                                {"0" + service.id}
                                            </div>
                                            <div>
                                                <div className="text-xl md:text-2xl text-black/70 lg:text-3xl font-extrabold">
                                                    {service.title}
                                                </div>
                                                <div className="text-xl lg:text-2xl text-black/40">
                                                    {service.info}
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0.5, y: -200 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, ease: easeInOut, delay: 0.6 }}
                                            className="w-full lg:w-[30%] h-full gap-10 lg:gap-0 lg:h-[22rem] flex group flex-col p-10 py-12 rounded-2xl justify-between bg-white/80 drop-shadow-lg"
                                        >
                                            <div className="border w-fit p-1 group-hover:bg-black duration-1000 ease-in-out group-hover:text-white rounded-md">
                                                {"0" + services[index + 1].id}
                                            </div>
                                            <div>
                                                <div className="text-2xl lg:text-3xl text-black/70 font-extrabold">
                                                    {services[index + 1].title}
                                                </div>
                                                <div className="text-xl lg:text-2xl text-black/40">
                                                    {services[index + 1].info}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <motion.div
                                         initial={{ opacity: 0.5, y: 200 }}
                                         animate={{ opacity: 1, y: 0 }}
                                         transition={{ duration: 0.5, ease: easeInOut, delay: 0.6 }}
                                        className="w-full lg:w-[30%] h-full gap-10 lg:gap-0 lg:h-[22rem] flex group flex-col p-10 py-12 rounded-2xl justify-between bg-white/80 drop-shadow-lg">
                                            <div className="border w-fit p-1 group-hover:bg-black duration-1000 ease-in-out group-hover:text-white rounded-md">
                                                {"0" + service.id}
                                            </div>
                                            <div>
                                                <div className="text-2xl lg:text-3xl text-black/70 font-extrabold">
                                                    {service.title}
                                                </div>
                                                <div className="text-xl lg:text-2xl text-black/40">
                                                    {service.info}
                                                </div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                           initial={{ opacity: 0.5, x: 120 }}
                                           animate={{ opacity: 1, x: 0 } }
                                           transition={{ duration: 0.5, ease: easeInOut, delay: 0.6 }}
                                        className="w-full lg:w-[70%] h-full gap-10 lg:gap-0 lg:h-[22rem] flex group flex-col p-10 py-12 rounded-2xl justify-between bg-white/80 drop-shadow-lg">
                                            <div className="border w-fit p-1 group-hover:bg-black duration-1000 ease-in-out group-hover:text-white rounded-md">
                                                {"0" + services[index + 1].id}
                                            </div>
                                            <div>
                                                <div className="text-2xl lg:text-3xl text-black/70 font-extrabold">
                                                    {services[index + 1].title}
                                                </div>
                                                <div className="text-xl lg:text-2xl text-black/40">
                                                    {services[index + 1].info}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
