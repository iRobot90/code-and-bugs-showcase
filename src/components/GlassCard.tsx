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
        "bg-card border border-border rounded-lg p-6",
        hover && "transition-colors duration-200 hover:border-accent/60",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
