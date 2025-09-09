import Navigation from "./navigation"
import Image from "next/image"

interface ServicesProps {
    onNavigate?: (sectionId: string) => void;
}

const Services = ({ onNavigate }: ServicesProps) => {
    return(
        <div id="services" tabIndex={3} className="h-dvh w-dvw relative overflow-x-hidden">
            <div className="px-5 md:px-0 h-full">
                <div className="flex justify-between pl-1 md:px-24 pt-8 md:pt-10 md:relative">
                    <div className="text-secondBlue text-[45px] md:text-[70px] font-pixelify font-bold">SERVICESSSS</div>
                    <Image src="/image/_.png" alt="w" width={150} height={150} className="object-contain w-[100px] md:w-[150px] absolute bottom-14 -left-8 md:-top-5 md:-right-8 md:left-auto md:bottom-auto" />
                </div>
                <div className="flex justify-between md:text-[80px] text-[70px] w-8/12 md:w-full mt-20 md:mt-0">
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>l</span>
                    <span>d</span>
                </div>
                <div className="font-IBM md:text-center md:text-[22px] text-[18px] md:tracking-[16px] opacity-75 ">WorldBuilderzzz Style & Unique</div>
                <div className="flex justify-between md:text-[100px] text-[70px] md:w-6/12 w-4/12 mt-16 md:mt-0">
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                </div>
                <div className="flex items-center justify-around font-IBM md:text-[22px] text-[20px] tracking-[3px] opacity-75">
                    <div>Fast</div>
                    <div>*</div>
                    <div>Standard</div>
                    <div>*</div>
                    <div>Clean</div>
                </div>
            </div>
            <Navigation theHref="#contact" onNavigate={onNavigate} />
        </div>
    )
}
export default Services;