
import React, { useState, useEffect } from "react";
import { getRandomQuote } from "@/lib/auth";
import { Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

interface FitnessQuoteProps {
  className?: string;
}

const FitnessQuote: React.FC<FitnessQuoteProps> = ({ className }) => {
  const [quote, setQuote] = useState<string>(getRandomQuote());
  const [isChanging, setIsChanging] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setQuote(getRandomQuote());
        setIsChanging(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "flex items-center p-4 rounded-lg glass-card",
      "transition-opacity duration-500",
      isChanging ? "opacity-0" : "opacity-100",
      className
    )}>
      <Dumbbell className="h-6 w-6 mr-3 text-delta-neon flex-shrink-0" />
      <p className="text-sm italic">"{quote}"</p>
    </div>
  );
};

export default FitnessQuote;
