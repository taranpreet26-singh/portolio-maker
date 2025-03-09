import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function(){
    return <div>
        <Footer message="" secmess="Fill out the form below to get in touch with me. I am always excited to hear about new opportunities and I will do my best to respond to your inquiry within 24 hours."
        title="Say Hello"
        />
        <Contact/>
        <Footer secmess="" message={'Have a project in mind?'} title={'LETS WORK'}/>
        
    </div>
}