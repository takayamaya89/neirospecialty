import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function NeonButton({ 
  children, 
  variant = "primary", 
  className,
  onClick,
  type = "button"
}: NeonButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:glow-pink border-primary/50",
    secondary: "bg-secondary text-secondary-foreground hover:glow-purple border-secondary/50",
    accent: "bg-accent text-accent-foreground hover:glow-cyan border-accent/50"
  };

  return (
    <Button
      type={type}
      onClick={onClick}
      className={cn(
        "uppercase font-medium tracking-wide border transition-all duration-300",
        "hover:scale-105 hover:shadow-lg",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Button>
  );
}
