"use client"
import { easeInOut, motion } from "framer-motion"
export default function About() {
    const company = ['./images/partner1.png', './images/partner2.png', './images/partner3.png', './images/partner4.png','./images/partner1.png', './images/partner2.png', './images/partner3.png', './images/partner4.png']
    const companyGroup = [...company, ...company, ...company]
    return <motion.div className="h-[22rem] pt-10">
        <div>
            <div className="bg-[#f4f3ed] text-black flex items-center justify-center font-thin font-serif text-xl md:text-2xl">
                COMPANY I WANT TO WORK WITH
            </div>
            <div className=" flex justify-center mt-10">
                <div className=" overflow-hidden w-[80%] relative">
                <div className="absolute -left-200 bg-gradient-to-r w-full h-full from-white/30 to-transparent"></div>
                    <motion.div
                        initial={{ x: "0" }}
                        animate={{ x: "-50%" }}
                        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                        className="flex  justify-center items-center h-22 w-max gap-10">
                        {companyGroup.map((element,index) => {
                            return <motion.div
                            whileHover={{scale:1.2}}
                            transition={{duration:0.5 , ease:easeInOut}}
                             key={index}>
                                <img src={element} alt="company-logo" />
                            </motion.div>
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    </motion.div>
}