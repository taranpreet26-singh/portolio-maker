import { ReactNode } from "react"

type InputType ={
    title:string,
    placeholder:string,
    icon:ReactNode,
} 

export default function Input({title,placeholder,icon}:InputType){
    return <div className="flex flex-col text-lg font-medium">
        <div className="text-black/80 font-semibold">
            {title.toUpperCase()}
        </div>
        <div className="relative border rounded-lg">
            <input placeholder={placeholder.toLocaleUpperCase()} className="p-2 text-base rounded-lg w-full font-light"   />
            <div className="absolute right-2 top-[0.7rem] text-gray-600">
                {icon}
            </div>
        </div>
    </div>
}
