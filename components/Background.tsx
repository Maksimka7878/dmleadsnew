import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = document.body.scrollHeight;
    let animationFrameId: number;

    const particleCount = 300;
    const particles: any[] = [];
    const flowFieldScale = 0.005;
    const speed = 0.8;

    const noise = (x: number, y: number) => {
      return Math.sin(x * flowFieldScale) * Math.cos(y * flowFieldScale) * Math.PI * 2;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      history: {x: number, y: number}[];
      maxLength: number;
      color: string;
      speedModifier: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.history = [];
        this.maxLength = Math.random() * 20 + 10;
        this.speedModifier = Math.random() * 0.5 + 0.5;
        // Darker colors for light background: Slate-400, Indigo-400, Teal-500
        const colors = ['#94a3b8', '#64748b', '#818cf8', '#2dd4bf'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        const angle = noise(this.x, this.y);
        this.vx += Math.cos(angle) * 0.1;
        this.vy += Math.sin(angle) * 0.1;
        
        const vel = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (vel > speed * this.speedModifier) {
          this.vx = (this.vx / vel) * speed * this.speedModifier;
          this.vy = (this.vy / vel) * speed * this.speedModifier;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) {
          this.history.shift();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        if (this.history.length < 2) return;
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.strokeStyle = this.color;
        context.globalAlpha = 0.4; 
        context.lineWidth = 1.5;
        context.stroke();
        context.globalAlpha = 1;
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = Math.max(window.innerHeight, document.body.scrollHeight);
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const animate = () => {
      // Clear with slight fade for trails
      ctx.fillStyle = 'rgba(248, 250, 252, 0.2)'; 
      ctx.fillRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#F8FAFC]"
    />
  );
};

export default Background;