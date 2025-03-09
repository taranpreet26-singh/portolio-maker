"use client";

import { FaReact, FaNodeJs, FaAndroid } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiHtml5, SiJavascript, SiPostgresql, SiZod } from "react-icons/si";
import { Image } from "lucide-react";

export default function ProfessionalSkills() {
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-500 w-12 h-12" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 w-12 h-12" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black w-12 h-12" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-12 h-12" /> },
        { name: "Android", icon: <FaAndroid className="text-green-500 w-12 h-12" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" /> },
        { name: "Zod", icon: <SiZod className="text-gray-500 w-12 h-12" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 w-12 h-12" /> },
    ];

    return (
        <section className="bg-[#fcfbf6] py-16 px-6">
            <h2 className="text-4xl font-bold text-black text-left mb-10">PROFESSIONAL SKILLS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-white/70 shadow-lg rounded-xl flex flex-col  items-center justify-center p-6 h-52 transition hover:scale-105">
                        {skill.icon || <Image  className="w-12 h-12 text-gray-400" />} 
                        <p className="text-lg font-semibold text-black mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
