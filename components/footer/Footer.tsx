type FooterType= {
    message:string,
    title:string,
    secmess:string
}
export default function Footer({message,title,secmess}:FooterType){
    return <div className="bg-[#f4f3ed] px-4 lg:px-14 pt-20 pb-66 flex flex-col items-center justify-center text-center text-black" >
        <div className="text-3xl">
            {message}
        </div> 
        <div className="text-6xl lg:text-9xl  xl:text-[170px] font-extrabold text-gray-900 drop-shadow-lg tracking-wide leading-[1.2]"
        >
            {title.toUpperCase()}
        </div>
        <div className="text-3xl pt-20">
            {secmess}
        </div> 
    </div>
}