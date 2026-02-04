import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // How much rotation
  glareOpacity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "", 
  intensity = 15,
  glareOpacity = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse relative coordinates (0 to 1)
    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    // Calculate rotation
    // X rotation corresponds to Y axis mouse movement (tilting up/down)
    // Y rotation corresponds to X axis mouse movement (tilting left/right)
    const rX = (mouseY - 0.5) * -intensity * 2;
    const rY = (mouseX - 0.5) * intensity * 2;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({ x: mouseX * 100, y: mouseY * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset position smoothly
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      className={`perspective-1000 transform-style-3d transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
      }}
    >
      {/* Glare Effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 rounded-[inherit] mix-blend-overlay"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${isHovered ? glareOpacity : 0}), transparent 80%)`
        }}
      />
      
      {children}
    </div>
  );
};

export default TiltCard;