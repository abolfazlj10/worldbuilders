import Navigation from "./navigation"

const Contact = () => {
    return(
        <div id="contact" tabIndex={4} className="h-dvh w-dvw relative flex flex-col py-20 px-10 md:px-24 md:pt-10">
            <div className="text-secondBlue text-[55px] text-center font-bold">CONTACT US</div>
            <div className="flex-1">
                telegram
            </div>
            <div className="mx-auto">
                <div className="text-[20px] opacity-65 md:text-[15px]">(Digital)</div>
                <div className="text-[20px] flex items-center justify-start gap-7 opacity-80">
                    <span>W</span>
                    <span>0</span>
                    <span>R</span>
                    <span>L</span>
                    <span>D</span>
                </div>
                <div className="text-[20px] flex items-center justify-start gap-7 opacity-80 relative w-fit">
                    <span>B</span>
                    <span>U</span>
                    <span className="text-secondBlue font-IBM font-bold">!</span>
                    <span>L</span>
                    <span>D</span>
                    <span>3</span>
                    <span>R</span>
                <div className="text-[20px] opacity-65 ml-auto absolute right-0 -bottom-5">zzz</div>
                </div>
            </div>
        </div>
    )
}
export default Contact;