"use client"

import Image from "next/image"

export default function Stories() {
    return <div className="flex relative w-full h-[42rem]">
        <Image layout="fill" objectFit="cover" priority alt="img" src={"/images/banner2.png"} className="absolute" />
        <div className="bg-black/30 absolute w-full h-full flex justify-center items-center ">
            <div className="px-4  flex flex-col items-center justify-center">
                <p className="text-xl text-center lg:text-2xl flex flex-wrap text-white/60  ">
                    Building stunning, high-performance landing pages that turn visitors into loyal customers.
                </p>
                <p className="sm:text-lg  md:text-xl lg:text-2xl text-white/80">
                    {"Let's create something amazing!"}
                </p>
            </div>
        </div>
    </div>
}