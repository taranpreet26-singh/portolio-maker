import About from "@/components/about/About";
import HeroBanner from "@/components/banner/HeroBanner";
import Services from "@/components/services/Services";



export default function Home() {
  return (
    <div >
      <HeroBanner />
      <About />
      <Services />
    </div>
  );
}
