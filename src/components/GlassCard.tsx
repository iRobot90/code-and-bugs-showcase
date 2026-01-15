import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-card/10 border border-border/20 rounded-lg p-6",
        "shadow-lg shadow-primary/10",
        hover && "hover:shadow-glow hover:border-primary/30 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;