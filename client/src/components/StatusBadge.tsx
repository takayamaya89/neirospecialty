interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: "pink" | "purple" | "cyan";
}

export function StatusBadge({ children, variant = "pink" }: StatusBadgeProps) {
  const colors = {
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/50 shadow-[0_0_15px_rgba(255,79,216,0.3)]",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/50 shadow-[0_0_15px_rgba(123,97,255,0.3)]",
    cyan: "bg-cyan-400/10 text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(106,240,255,0.3)]",
  };

  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold border ${colors[variant]} transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,79,216,0.5)]`}
    >
      {children}
    </span>
  );
}
