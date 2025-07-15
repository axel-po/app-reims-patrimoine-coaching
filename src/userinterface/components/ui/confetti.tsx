"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

interface ConfettiComponentProps {
  active: boolean;
  duration?: number;
  onComplete?: () => void;
}

export function ConfettiComponent({ 
  active, 
  duration = 3000, 
  onComplete 
}: ConfettiComponentProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowDimension({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (active) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, duration, onComplete]);

  if (!showConfetti || windowDimension.width === 0) {
    return null;
  }

  return (
    <Confetti
      width={windowDimension.width}
      height={windowDimension.height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.3}
      colors={['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4']}
    />
  );
}