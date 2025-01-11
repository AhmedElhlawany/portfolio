
// import Contact from "@/Components/main/Contact";
import Encryption from "@/Components/main/Encryption";
import Footer from "@/Components/main/Footer";
import Hero from "@/Components/main/Hero";
import Projects from "@/Components/main/Projects";
import Skills from "@/Components/main/Skills";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <Encryption/>
        <Projects/>
        {/* <Contact/> */}
        <Footer/>
      </div>
    </main>
    </>
  );
}
