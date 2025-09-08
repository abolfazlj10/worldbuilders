"use client";

import AboutWe from "@/components/aboutWe";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Services from "@/components/services";
import { useScrollSnap } from "@/hooks/useScrollSnap";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const sections = ["intor", "AboutWe", "services", "contact"];
  
  const { containerRef, scrollToSection, currentSection } = useScrollSnap({
    isDesktop,
    sections
  });

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const sectionIndex = sections.indexOf(sectionId);
    if (sectionIndex !== -1) {
      scrollToSection(sectionIndex);
    }
  };

  return (
    <div ref={containerRef} className="scroll-container">
      <div className={`flex ${isDesktop ? 'flex-row' : 'flex-col'}`}>
        <div className={`scroll-section ${isDesktop ? 'w-screen flex-shrink-0' : 'h-screen flex-shrink-0'}`}>
          <Intro onNavigate={handleNavigate} />
        </div>
        <div className={`scroll-section ${isDesktop ? 'w-screen flex-shrink-0' : 'h-screen flex-shrink-0'}`}>
          <AboutWe onNavigate={handleNavigate} />
        </div>
        <div className={`scroll-section ${isDesktop ? 'w-screen flex-shrink-0' : 'h-screen flex-shrink-0'}`}>
          <Services onNavigate={handleNavigate} />
        </div>
        <div className={`scroll-section ${isDesktop ? 'w-screen flex-shrink-0' : 'h-screen flex-shrink-0'}`}>
          <Contact onNavigate={handleNavigate} />
        </div>
      </div>
    </div>
  );
}