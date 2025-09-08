import GlassSurface from './GlassSurface'
import Image from 'next/image'

interface ContactProps {
    onNavigate?: (sectionId: string) => void;
}

const Contact = ({ onNavigate }: ContactProps) => {
    return(
        <div id="contact" tabIndex={4} className="h-dvh w-dvw relative flex flex-col py-20 px-10 md:px-24 md:pt-10">
            <div className="text-secondBlue text-[55px] text-center font-bold">CONTACT US</div>
            <div className="flex-1 flex justify-center gap-10 items-center">
                <Image src="/image/FaWKMJQnr2PFcYCmEyfiTm-1200-80-removebg-preview 2.png" alt="floor core image" width={250} height={250} className="w-[250px]" />
                <Image src="/image/_.png" alt="w" width={240} height={240} className="object-contain w-[240px]" />
                <Image src="/image/FullMoon2010-removebg-preview 2.png" alt="floor core image" width={250} height={250} className="w-[250px]" />
            </div>
            <div className="mx-auto relative">
                <div className="text-[20px] opacity-65 md:text-[15px]">(Digital)</div>
                <div className="text-[20px] flex items-center justify-start gap-7 opacity-80">
                    <span>W</span>
                    <span>0</span>
                    <span>R</span>
                    <span>L</span>
                    <span>D</span>
                </div>
                <GlassSurface
                    displace={1}
                    distortionScale={-90}
                    // redOffset={5}
                    // greenOffset={15}
                    // blueOffset={25}
                    // brightness={50}
                    borderWidth={0.1}
                    mixBlendMode="overlay"
                    borderRadius={40}
                    // xChannel='R'
                    // yChannel='R'
                    className='!absolute !bottom-[115px] !right-1/2 !translate-x-1/2 !w-[550px] !h-[250px]'
                >
                </GlassSurface>
                <div className="text-[20px] flex items-center justify-start gap-7 opacity-80 relative w-fit">
                    <span>B</span>
                    <span>U</span>
                    <span className="text-secondBlue font-IBM font-bold">!</span>
                    <span>L</span>
                    <span>D</span>
                    <span>e</span>
                    <span>R</span>
                <div className="text-[20px] opacity-65 ml-auto absolute right-0 -bottom-5">zzz</div>
                </div>
            </div>
        </div>
    )
}
export default Contact;