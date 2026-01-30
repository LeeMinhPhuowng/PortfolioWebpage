import { useEffect, useState } from 'react';

interface Pixel {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

export function FloatingPixels() {
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    const colors = ['#ffffff', '#fffeb9', '#ffffff', '#b3f6ff', '#ffffff'];
    const initialPixels: Pixel[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 10,
    }));
    setPixels(initialPixels);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className="absolute opacity-30"
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            backgroundColor: pixel.color,
            animation: `float ${pixel.duration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% { 
            transform: translateY(-60px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(-30px);
          }
        }
      `}</style>
    </div>
  );
}
