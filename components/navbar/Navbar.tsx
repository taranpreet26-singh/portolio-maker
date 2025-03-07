"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import menu_data from "@/utils/menu_data";
import Image from "next/image";
import { Oswald } from '@next/font/google';

const oswald = Oswald({  subsets: ['latin'] });


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        className={`bg-[#f4f3ed]/90 drop-shadow-lg text-black py-4 px-6 md:px-16   fixed top-0 w-full shadow-sm z-50 ${oswald.className }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center   justify-between">
          <div>
            <Image width={400} height={400} src="/images/logo-dark.png" className="w-12 cursor-pointer" alt="logo" />
          </div>

          <div className="hidden md:flex gap-8 text-[1rem] font-thin  tracking-wide">
            {menu_data.map((element) => (
              <div 
                key={element.id} 
                className="cursor-pointer  transition duration-300"
              >
                {element.title.toUpperCase()}
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed  inset-0 bg-black/50 z-[10000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0  w-64 h-full bg-black/90 drop-shadow-xl shadow-lg z-50 flex flex-col p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="mt-8 flex text-white flex-col gap-6 text-lg  font-medium">
                {menu_data.map((element) => (
                  <div 
                    key={element.id} 
                    className="cursor-pointer hover:text-gray-700 transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {element.title.toUpperCase()}
                    <hr/>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
