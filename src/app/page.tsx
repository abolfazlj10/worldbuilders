import AboutWe from "@/components/aboutWe";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <div className="flex w-[400dvw]">
      <Intro />
      <AboutWe />
    </div>
  );
}