import About from "@/About";
import Footer from "@/components/footer/Footer";
import ProfessionalSkills from "@/components/skill/Skill";
import Stories from "@/components/stories/Stories";

export default function AboutPage(){
    return <div>
        <Footer secmess="" message="" title="About Me"/>
        <About/>
        <Stories/>
        <ProfessionalSkills/>
        <Footer secmess="" message={'Have a project in mind?'} title={'LETS WORK'}/>
        
    </div>
}