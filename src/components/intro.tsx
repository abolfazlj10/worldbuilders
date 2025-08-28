import Navigation from "./navigation";

const Intro = () => {
    return(
        <div className="relative h-dvh w-dvw font-pixelify flex items-center justify-center overflow-hidden">
            <div className="w-full -rotate-90 mt-20 -space-y-3">
                <div className="text-5xl opacity-75">(Digital)</div>
                <div className="text-[100px] flex gap-7 opacity-90">
                    <span>W</span>
                    <img src="/image/pxArt__1_-removebg-preview 1.png" alt="w" className="object-contain w-[100px]" />
                    <span>r</span>
                    <span>l</span>
                    <span>d</span>
                    <img src="/image/_.png" alt="w" className="object-contain w-[80px] ml-7" />
                </div>
                <div className="text-[100px] flex gap-7 opacity-90 -mt-14">
                    <span>B</span>
                    <span>u</span>
                    <span className="text-secondBlue font-IBM">!</span>
                    <span>l</span>
                    <span>d</span>
                    <span>3</span>
                    <span>r</span>
                </div>
                <div className="text-6xl opacity-75 flex justify-end -mt-10">zzz</div>
            </div>
            <Navigation />
        </div>
    )
}
export default Intro;