import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "pink" | "purple" | "cyan" | "none";
  hover?: boolean;
}

export function NeonCard({ 
  children, 
  className,
  glow = "none",
  hover = true
}: NeonCardProps) {
  const glowClasses = {
    pink: "border-primary/30 hover:glow-pink",
    purple: "border-secondary/30 hover:glow-purple",
    cyan: "border-accent/30 hover:glow-cyan",
    none: "border-border"
  };

  return (
    <Card
      className={cn(
        "bg-card text-card-foreground border transition-all duration-300",
        hover && "hover:scale-[1.02] hover:-translate-y-1",
        glowClasses[glow],
        className
      )}
    >
      {children}
    </Card>
  );
}
