"use client";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        img: "/images/u1.png",
        message: "Financial planners help people understand how to invest and save their money in the most efficient way.",
        name: "Zonathon Doe",
        position: "CEO & Founder X",
    },
    {
        id: 2,
        img: "/images/u2.png",
        message: "Asian planners provide insights on effective investment and savings strategies.",
        name: "Martin Smith",
        position: "CEO & Founder Google",
    },
    {
        id: 3,
        img: "/images/u3.png",
        message: "Hello planners assist individuals in managing their finances for optimal results.",
        name: "Methail Dev",
        position: "Managing Director - Paydesk",
    },
    {
        id: 4,
        img: "/images/u4.png",
        message: "Financial planners educate people on smart investment and saving methods.",
        name: "Eliana Tweet",
        position: "CEO & Founder Tesla",
    },
    {
        id: 5,
        img: "/images/u5.png",
        message: "Yelp planners specialize in helping clients optimize their financial strategies.",
        name: "Henry Clark",
        position: "Founder Oxyzen",
    },
];

export default function Testimonials() {
    return (
        <div className="bg-[#0a0a0a] h-fit px-4 sm:px-8 lg:px-14 pt-20 pb-10 text-white">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-10">TESTIMONIALS</h2>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {testimonials.slice(0, 2).map(({ id, img, message, name, position }) => (
                        <div
                            key={id}
                            className="bg-white/90 text-black group drop-shadow-lg flex flex-col p-6 sm:p-8 rounded-xl w-full lg:w-[49%]"
                        >
                            <Image width={300} height={300} src={img} alt="user" className="w-16 rounded-full " />
                            <p className="text-lg lg:text-xl text-black/60 mb-4">{message}</p>
                            <div>
                                <p className="text-2xl font-semibold">{name}</p>
                                <p className="text-lg font-bold text-gray-600/40">{position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {testimonials.slice(2).map(({ id, message, img, name, position }) => (
                        <div
                            key={id}
                            className="bg-white/90 text-black group drop-shadow-lg flex flex-col p-6 sm:p-8 rounded-xl w-full lg:w-[32%]"
                        >
                            <Image width={300} height={300} src={img} alt="user" className="w-16 rounded-full " />
                            <p className="text-lg lg:text-xl mb-4">{message}</p>
                            <div>
                                <p className="text-2xl font-semibold">{name}</p>
                                <p className="text-lg font-bold text-gray-600">{position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
