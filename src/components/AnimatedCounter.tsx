import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  from?: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, from = 0, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(from + (end - from) * easeOut);

      setCount(currentCount);

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [from, end, duration]);

  return <span>{count}{suffix}</span>;
};

export default AnimatedCounter;