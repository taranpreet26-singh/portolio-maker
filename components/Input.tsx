import { ReactNode } from "react"

type InputType = {
    title: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    icon: ReactNode,
}

export default function Input({ title, name, value, placeholder, icon, onChange }: InputType) {
    return <div className="flex flex-col text-lg font-medium">
        <div className="text-black/80 font-semibold">
            {title.toUpperCase()}
        </div>
        <div className="relative border rounded-lg text-black">
                <input autoComplete="new-password" placeholder={placeholder.toLocaleUpperCase()} onChange={onChange} name={name} value={value} required className="p-2 text-base rounded-lg w-full font-light" />
            <div className="absolute right-2 top-[0.7rem] text-gray-600">
                {icon}
            </div>
        </div>
    </div>
}
