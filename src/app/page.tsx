import AboutWe from "@/components/aboutWe";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <div className="md:flex md:w-[400dvw] max-md:h-[400dvw]">
      <Intro />
      <AboutWe />
    </div>
  );
}