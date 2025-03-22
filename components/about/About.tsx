"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";

export default function About({about,year,client,project}:{about? : string,year?:string,client?:string,project?:string}) {
    const company = [
        '/images/partner1.png', '/images/clear-logo.png', '/images/partner2.png',
        '/images/partner3.png', '/images/clear-logo.png', '/images/partner4.png',
        '/images/partner1.png', '/images/partner2.png', '/images/partner3.png', '/images/partner4.png'
    ];
    const companyGroup = [...company, ...company, ...company, ...company, ...company];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <motion.div 
            className="h-fit bg-[#0a0a0a] pb-14 pt-10"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
        >
            <div>
                <motion.div 
                    className="bg-[#f4f3ed] text-black flex items-center justify-center font-thin font-serif text-xl md:text-2xl"
                    variants={fadeInUp}
                >
                    COMPANY I WANT TO WORK WITH
                </motion.div>

                <div className="flex justify-center mt-10">
                    <div className="overflow-hidden w-[80%] relative">
                        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-transparent"></div>
                        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-transparent"></div>
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "-50%" }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="flex justify-center items-center h-22 w-max gap-10"
                        >
                            {companyGroup.map((element, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
                                    transition={{ duration: 0.3, ease: easeInOut }}
                                >
                                    <Image width={300} height={300} src={element} alt="company-logo" className="w-24 h-auto" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <motion.div className="h-auto mt-10 text-white" variants={fadeInUp}>
                    <div className="w-full px-4 sm:px-14 mx-auto flex flex-col items-center md:items-start md:flex-row">
                        <motion.div 
                            className="w-[30%]"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                        </motion.div>

                        <motion.div 
                            className="w-[70%] text-justify"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <p className="text-lg md:text-xl leading-relaxed">
                                { about || `Hello! I'm Taranpreet Singh, a Full Stack Developer, and I have a B.Tech in IT, with a relentless drive for continuous learning and a passion for transforming ideas into robust, user-focused applications. Skilled in both front-end and back-end development, I enjoy diving into the full project lifecycle, from design to deployment, and optimizing user experience at every step.

My technical toolkit includes proficiency in React, TypeScript, Node.js, Express, and PostgreSQL, with experience in the MERN stack. Currently, I’m delving into advanced concepts like Prisma, Zod, and cloud deployment with Neon DB and Render to elevate my development capabilities and stay ahead in this fast-evolving field.

I am eager to connect with industry leaders, developers, and creatives who share a commitment to innovation. Open to collaborative projects, mentorship opportunities, and professional discussions, I aim to contribute to impactful projects and grow within the tech community.

Let’s connect and build something amazing!`}
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 text-center max-w-5xl mx-auto border-t border-gray-700 pt-8">
                                {[
                                    { label: "Years of Experience", value: year+"+" ||"8+" },
                                    { label: "Completed Projects", value: project+"+"  || "1k+" },
                                    { label: "Client Satisfactions", value: client+"%" || "90%+" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                                    >
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
