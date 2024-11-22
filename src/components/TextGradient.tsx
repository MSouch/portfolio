'use client';
import { useEffect, useState } from 'react';

type TextGradientProps = {
  text: string;
  from?: string;
  via?: string;
  to?: string;
}

export default function TextGradient(props: TextGradientProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span
      className="text-8xl font-bold text-transparent bg-clip-text transition-all duration-300"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #c2410c, #3b82f6, #4ade80)`,
        backgroundSize: '300%',
        backgroundPosition: 'center',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {props.text}
    </span>
  );
}