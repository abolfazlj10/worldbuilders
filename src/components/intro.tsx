import Navigation from "./navigation";

const Intro = () => {
    return(
        <div id="intor" tabIndex={1} className="relative h-dvh w-dvw flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-4 pb-32 mt-auto md:grid-cols-none md:w-full md:pb-0  md:mt-0">
                <div className="text-4xl opacity-65 max-md:[writing-mode:vertical-rl] max-md:[transform:rotate(180deg)] md:[writing-mode:horizontal-tb] flex items-center md:-mb-7">(Digital)</div>
                <div className="text-[100px] md:text-[120px] flex items-center md:justify-between justify-start gap-7 opacity-80 max-md:[writing-mode:vertical-rl] max-md:[transform:rotate(180deg)] md:[writing-mode:horizontal-tb] md:pr-40">
                    <span>W</span>
                    <a target="_blank" href="https://figma.com/design/8lVohgcnbYHG5rFeQAXWGL/-Worlds?t=mjVdpjeN7CaeZUiN-0"><img src="/image/pxArt__1_-removebg-preview 1.png" alt="w" className="object-contain w-[120px] hover:cursor-[url('/image/linkCursor.png'),_pointer]" /></a>
                    <span>R</span>
                    <span>L</span>
                    <span>D</span>
                    <img src="/image/_.png" alt="w" className="object-contain w-[100px]" />
                </div>
                <div className="text-[100px] md:text-[120px] flex items-center justify-start md:justify-between gap-7 opacity-80 max-md:[writing-mode:vertical-rl] max-md:[transform:rotate(180deg)] md:[writing-mode:horizontal-tb] relative md:-mt-11">
                    <span>B</span>
                    <span>U</span>
                    <span className="text-secondBlue font-IBM font-bold">!</span>
                    <span>L</span>
                    <span>D</span>
                    <span>3</span>
                    <span>R</span>
                </div>
                <div className="text-6xl opacity-65 max-md:[writing-mode:vertical-rl] max-md:[transform:rotate(180deg)] md:[writing-mode:horizontal-tb] mb-auto md:text-[100px] md:ml-auto md:-mt-15">zzz</div>
            </div>
            <Navigation theHref="#AboutWe" />
        </div>
    )
}
export default Intro;