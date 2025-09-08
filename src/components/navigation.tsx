"use client";

import React from 'react';

interface NavigationProps {
    theHref: string;
    onNavigate?: (sectionId: string) => void;
}

const Navigation = ({ theHref, onNavigate }: NavigationProps) => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = theHref.replace('#', '');
        
        if (onNavigate) {
            onNavigate(targetId);
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