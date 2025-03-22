"use client"
import HeroBanner from "@/components/banner/HeroBanner"
import Contact from "@/components/contact/Contact"
import Footer from "@/components/footer/Footer"
import Services from "@/components/services/Services"
import Stories from "@/components/stories/Stories"
import { URL } from "@/utils/menu_data"
import axios from "axios"
import { useParams } from "next/navigation"
import {  useEffect, useState } from "react"
import Testinomials from "@/components/testinomials/Testinomials";
import About from "@/components/about/About"


type UserType ={
    id :string
  name :string 
  info :string
  about :string
  experience : string
  image :string
  project :string
  client:  string
  userId :string
}

export default function User(){
    const userId = useParams()
    const [userInfo,setUserInfo] = useState<UserType | null>(null)
    const getAllInfo = async()=> {
        try {
          const response = await axios.get(`${URL}/api/info`, {
            params: { userId },
          });
          setUserInfo(response.data.info);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };
    useEffect(()=>{
        if(userId){
            getAllInfo()
        }
    },[userId,getAllInfo])
    return <div>
              <HeroBanner name={userInfo?.name ?? `${"Default Portfolio"}`} img={userInfo?.image} info={userInfo?.info} />
              <About about={userInfo?.about}  project={userInfo?.project} client={userInfo?.client} year={userInfo?.experience}/>
              <Services />
                <Testinomials/>              
              <Stories/>
              <Contact/>
              <hr/>
              <Footer secmess="" message={'Have a project in mind?'} title={'LETS WORK'}/>
            
        
    </div>
}