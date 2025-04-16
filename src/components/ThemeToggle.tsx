
import React from "react";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Dark mode"
      className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm cursor-default"
      disabled
    >
      <Moon className="h-[1.2rem] w-[1.2rem] text-delta-neon transition-all" />
      <span className="sr-only">Dark mode</span>
    </Button>
  );
};

export default ThemeToggle;
