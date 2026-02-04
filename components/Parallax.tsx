import React, { useEffect, useRef, useState } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // Negative moves up, positive moves down
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ children, speed = 0.1, className = "" }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only animate if element is roughly in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = window.scrollY;
        setOffset(scrollProgress * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

export default Parallax;