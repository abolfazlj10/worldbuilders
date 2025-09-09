import Image from "next/image";
import Navigation from "./navigation"

interface AboutWeProps {
    onNavigate?: (sectionId: string) => void;
}

const  AboutWe = ({ onNavigate }: AboutWeProps) => {
    return(
        <div id="AboutWe" tabIndex={2} className="h-dvh w-dvw overflow-hidden relative">
            <div className="flex flex-col py-20 md:py-10">
                <div className="text-secondBlue text-[45px] md:text-[70px] font-bold pl-10 md:pl-24">WHO ARE WE?</div>
                <Image src="/image/_.png" alt="*" width={140} height={140} className="object-contain w-[100px] ml-auto -mr-15 mt-10 mb-4 md:order-3 md:absolute md:-bottom-10 md:w-[140px] md:left-10" />
                <div className="font-IBM px-10 md:px-24 text-[18px] leading-[40px] font-[400] flex-1 tracking-wide md:tracking-[5px] md:text-[20px] md:leading-[40px] md:pr-32 md:mt-10">
                    <span className="opacity-70">We are not just a design studio. We are a team of</span> <span className="font-bold md:tracking-[15px] underline decoration-secondBlue decoration-[3px] uppercase">world builders</span> <span className="opacity-85">! creators who translate visions, vibes, and unique universes into tangible, digital experiences. Every project we take on is a canvas for a larger idea: turning a brand&apos;s essence into a living, breathing</span> <span className="font-bold opacity-100">world</span>.
                </div>
            </div>
            <Navigation theHref="#services" onNavigate={onNavigate} />
        </div>
    )
}
export default AboutWe;