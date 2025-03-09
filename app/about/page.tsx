import About from "@/About";
import Footer from "@/components/footer/Footer";
import ProfessionalSkills from "@/components/skill/Skill";
import Stories from "@/components/stories/Stories";

export default function(){
    return <div>
        <Footer message="" title="About Me"/>
        <About/>
        <Stories/>
        <ProfessionalSkills/>
        <Footer message={'Have a project in mind?'} title={'LETS WORK'}/>
        
    </div>
}