import About from "@/components/about/About";
import HeroBanner from "@/components/banner/HeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <About/>
    </div>
  );
}
