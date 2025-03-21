"use client"
import { ArrowBigDown } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa"
import { easeInOut, motion } from "framer-motion";

export default function NavBoard() {
    const router = useRouter()
    const { data: session } = useSession()
    const firstName = session?.user?.name?.split(" ")[0] || ""
    

    return (
        <div className="w-full px-4 lg:px-14  ">
            <div className="w-full h-22 flex flex-col items-center justify-center ">
                
                <div className="bg-black flex-col w-1/2 lg:w-1/4 flex items-center justify-center text-sm md:text-xl lg:text-2xl font-semibold h-full rounded-t-full">
                <motion.div 
                animate={{y:[0,-20,0] ,rotateY: [-5, 5, -5]}}
                transition={{repeat:Infinity , delay:2 ,duration:2 ,ease:easeInOut
                }} >
                    <ArrowBigDown/>
                </motion.div>
                <h1 className="hover:text-green-500 duration-1000 cursor-pointer" onClick={()=>{
                    router.push(`/user/${session?.user.id}`)
                }}>{"Visit You're Portfolio"}</h1>
                </div>
            </div>
            <nav className="bg-black rounded-4xl drop-shadow-2xl shadow-lg shadow-black/30 text-white   h-16 flex items-center justify-between px-4 sm:px-8">
                <div className="text-lg sm:text-2xl font-bold tracking-wide">My Portfolio</div>

                <div className="flex gap-2 items-center">
                    {session?.user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm sm:text-base font-semibold">Hi, {firstName} 👋</span>
                            <button
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-800 transition-all px-2 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md hover:shadow-red-500/50 transform hover:scale-105"
                                onClick={() => signOut()}
                            >
                                <FaSignOutAlt /> Sign Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <button
                                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 transition-all px-2 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md hover:shadow-purple-500/50 transform hover:scale-105"
                                onClick={() => signIn()}
                            >
                                <FaSignInAlt /> Log In
                            </button>

                            <button
                                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-600 transition-all px-2 sm:px-4 py-1 sm:py-2 rounded-xl shadow-md hover:shadow-green-500/50 transform hover:scale-105"
                                onClick={() => router.push('/signup')}
                            >
                                <FaUserPlus /> Sign Up
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}