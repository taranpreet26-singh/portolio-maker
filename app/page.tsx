import About from "@/components/about/About";
import HeroBanner from "@/components/banner/HeroBanner";
import Services from "@/components/services/Services";
import { Oswald } from '@next/font/google';

const oswald = Oswald({ subsets: ['latin'] });


export default function Home() {
  return (
    <div className={`${oswald.className}`}>
      <HeroBanner/>
      <About/>
      <Services/>
    </div>
  );
}
