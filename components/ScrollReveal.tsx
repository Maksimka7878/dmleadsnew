import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'fade-up' | 'slide-left' | 'slide-right' | 'zoom-in' | 'blur-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  variant = 'fade-up',
  threshold = 0.15
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0,0,0) scale(1)';
    switch (variant) {
      case 'fade-up': return 'translate3d(0, 40px, 0)';
      case 'slide-left': return 'translate3d(-50px, 0, 0)';
      case 'slide-right': return 'translate3d(50px, 0, 0)';
      case 'zoom-in': return 'scale(0.95)';
      case 'blur-in': return 'scale(1)';
      default: return 'translate3d(0, 40px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out-expo will-change-transform ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;