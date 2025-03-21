import Navbar from "@/components/navbar/Navbar";

export default function UserLayout({children}:{children:React.ReactNode}){
    return <div>
        <Navbar/>
        {children}
    </div>
}