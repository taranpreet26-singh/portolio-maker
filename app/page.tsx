import About from "@/components/about/About";
import HeroBanner from "@/components/banner/HeroBanner";
import Contact from "@/components/contact/Contact";
import DemoNav from "@/components/demonav/DemoNav";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";
import Stories from "@/components/stories/Stories";
import Testinomials from "@/components/testinomials/Testinomials";



export default function Home() {
  return (
    <div >
      <DemoNav/>
      <HeroBanner />
      <About />
      <Services />
      <Testinomials/>
      <Stories/>
      <Contact/>
      <hr/>
      <Footer secmess="" message={'Have a project in mind?'} title={'LETS WORK'}/>
    </div>
  );
}
