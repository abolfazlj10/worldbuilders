import Navigation from "./navigation"
const  AboutWe = () => {
    return(
        <div id="AboutWe" tabIndex={2} className="h-dvh w-dvw overflow-hidden relative">
            <div className="flex flex-col py-20 px-10">
                <div className="text-secondBlue text-[55px]">WHO ARE WE?</div>
                <img src="/image/_.png" alt="w" className="object-contain w-[100px] ml-auto -mr-15 mt-14 mb-4" />
                <div className="font-IBM text-[18px] leading-[40px] font-[400] flex-1 tracking-wide">
                    <span className="opacity-85">We are not just a design studio. We are a team of</span> <span className="font-bold underline decoration-secondBlue decoration-[3px] uppercase">world builders</span> <span className="opacity-85">! creators who translate visions, vibes, and unique universes into tangible, digital experiences. Every project we take on is a canvas for a larger idea: turning a brand’s essence into a living, breathing</span> <span className="font-bold opacity-100">world</span>.
                </div>
            </div>
            <Navigation theHref="#services" />
        </div>
    )
}
export default AboutWe