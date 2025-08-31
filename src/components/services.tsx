import Navigation from "./navigation"

const Services = () => {
    return(
        <div id="services" tabIndex={3} className="h-dvh w-dvw relative">
            <div className="px-5 md:px-0 h-full">
                <div className="flex justify-between pt-20 px-10 md:px-24 md:pt-10 md:relative">
                    <div className="text-secondBlue text-[55px] md:text-[70px] font-pixelify">SERVICESSSS</div>
                    <img src="/image/_.png" alt="w" className="object-contain w-[100px] md:w-[170px] absolute bottom-10 -left-8 md:-top-5 md:-right-8 md:left-auto md:bottom-auto" />
                </div>
                <div className="flex justify-between md:text-[100px] text-[70px] w-8/12 md:w-full mt-40 md:mt-0">
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>l</span>
                    <span>d</span>
                </div>
                <div className="font-IBM md:text-center md:text-[32px] text-[20px] md:tracking-[16px] tracking-[1px] opacity-75 font-thin">WorldBuilderzzz Style & Unique</div>
                <div className="flex justify-between md:text-[100px] text-[70px] md:w-6/12 w-4/12 mt-16 md:mt-0">
                    <span>W</span>
                    <span>e</span>
                    <span>b</span>
                </div>
                <div className="flex items-center justify-around font-IBM md:text-[32px] text-[20px] tracking-[3px] opacity-75">
                    <div>Fast</div>
                    <div>*</div>
                    <div>Standard</div>
                    <div>*</div>
                    <div>Clean</div>
                </div>
            </div>
            <Navigation theHref="#contact" />
        </div>
    )
}
export default Services;