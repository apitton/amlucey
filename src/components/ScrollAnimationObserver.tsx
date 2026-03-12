import { useEffect } from 'react';
import React from 'react'


export default function ScrollAnimationObserver({children, setCurrentNav }: {children: React.ReactNode, setCurrentNav: (newPath: string)=>void}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log(entry.target.id);
            setCurrentNav(entry.target.id);
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  },[]);

  return <>{children}</>;
}
