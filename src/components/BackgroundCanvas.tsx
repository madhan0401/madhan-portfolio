import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Purple particle nodes
    const particleCount = Math.min(Math.floor(width / 22), 50);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Faint purple constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.07 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#04020a]">
      {/* Soft Purple Ambient Radial Blobs */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] animate-pulse-purple" />
      <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse-purple" style={{ animationDelay: '2.5s' }} />
      <div className="absolute -bottom-48 left-1/3 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[140px] animate-pulse-purple" style={{ animationDelay: '4.5s' }} />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-purple opacity-60" />

      {/* Radial Spotlight Top Glow */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-purple-spotlight pointer-events-none" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
