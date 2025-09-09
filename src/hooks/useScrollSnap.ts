"use client";

import { useEffect, useRef, useCallback } from 'react';

interface UseScrollSnapOptions {
  isDesktop: boolean;
  sections: string[];
}

export const useScrollSnap = ({ isDesktop, sections }: UseScrollSnapOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);
  const currentSectionRef = useRef(0);

  const scrollToSection = useCallback((sectionIndex: number) => {
    if (!containerRef.current || sectionIndex < 0 || sectionIndex >= sections.length) return;
    
    const container = containerRef.current;
    const sectionElement = document.getElementById(sections[sectionIndex]);
    
    if (!sectionElement) return;

    if (isDesktop) {
      // Horizontal scroll for desktop
      const scrollLeft = sectionIndex * window.innerWidth;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    } else {
      // Vertical scroll for mobile
      const scrollTop = sectionIndex * window.innerHeight;
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
    
    currentSectionRef.current = sectionIndex;
  }, [isDesktop, sections]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    
    isScrollingRef.current = true;
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Set new timeout to detect when scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      let targetSection = 0;
      
      if (isDesktop) {
        // Calculate which section to snap to based on horizontal scroll
        const scrollLeft = container.scrollLeft;
        const sectionWidth = window.innerWidth;
        const scrollProgress = scrollLeft / sectionWidth;
        
        // Determine if we should go to previous or next section
        if (scrollProgress - Math.floor(scrollProgress) < 0.5) {
          targetSection = Math.floor(scrollProgress);
        } else {
          targetSection = Math.ceil(scrollProgress);
        }
      } else {
        // Calculate which section to snap to based on vertical scroll
        const scrollTop = container.scrollTop;
        const sectionHeight = window.innerHeight;
        const scrollProgress = scrollTop / sectionHeight;
        
        // Determine if we should go to previous or next section
        if (scrollProgress - Math.floor(scrollProgress) < 0.5) {
          targetSection = Math.floor(scrollProgress);
        } else {
          targetSection = Math.ceil(scrollProgress);
        }
      }
      
      // Clamp target section to valid range
      targetSection = Math.max(0, Math.min(targetSection, sections.length - 1));
      
      // Only snap if we're not already at the target section
      if (targetSection !== currentSectionRef.current) {
        scrollToSection(targetSection);
      }
    }, 150); // 150ms delay to detect scroll end
  }, [isDesktop, sections, scrollToSection]);

  const handleWheel = useCallback(() => {
    // Let the browser handle scrolling naturally
    // We'll only handle snapping when scrolling stops
  }, []);

  const handleTouchStart = useCallback(() => {
    isScrollingRef.current = true;
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Touch end will be handled by the scroll event timeout
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add event listeners
    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Initial scroll to first section
    scrollToSection(0);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, handleWheel, handleTouchStart, handleTouchEnd, scrollToSection]);

  return {
    containerRef,
    scrollToSection,
    currentSection: currentSectionRef.current
  };
};
