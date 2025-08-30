import AboutWe from "@/components/aboutWe";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="md:flex md:w-[400dvw] max-md:h-[400dvw]">
      <Intro />
      <AboutWe />
      <Services />
      <Contact />
    </div>
  );
}