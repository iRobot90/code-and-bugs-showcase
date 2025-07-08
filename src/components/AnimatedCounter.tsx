import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ from, to, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(from + (to - from) * easeOut);
      
      setCount(currentCount);
      
      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return <span>{count}{suffix}</span>;
};

export default AnimatedCounter;