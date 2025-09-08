"use client";

import React, { useEffect, useRef } from 'react';

const Navigation = ({theHref, introRef} : {theHref: string, introRef?: React.RefObject<HTMLDivElement>}) => {
    // Scroll to intro section on page load/refresh
    useEffect(() => {
        if (introRef?.current) {
            introRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [introRef]);
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = theHref.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return(
        <div className="absolute w-full h-32 bottom-0 flex items-center justify-center">
            <a 
                href={theHref} 
                onClick={handleSmoothScroll}
                className="text-3xl rotate-90 md:rotate-0 hover:cursor-[url('/image/linkCursor.png'),_pointer] transition-transform duration-300"
            >
                {`>`}
            </a>
        </div>
    )
}
export default Navigation;