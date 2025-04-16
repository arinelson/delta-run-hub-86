
import React from "react";
import { themeColors } from "@/lib/auth";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorSelectorProps {
  selectedColor: string;
  onChange: (colorId: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ selectedColor, onChange }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-sm font-medium">Tema de Cores</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {themeColors.map((color) => (
          <button
            key={color.id}
            onClick={() => onChange(color.id)}
            className={cn(
              "w-8 h-8 rounded-full transition-all",
              "border-2 hover:scale-110",
              selectedColor === color.id 
                ? "border-white dark:border-white scale-110" 
                : "border-transparent"
            )}
            style={{ backgroundColor: color.value }}
            title={color.name}
            aria-label={`Select ${color.name} theme`}
          >
            {selectedColor === color.id && (
              <Check className="w-4 h-4 mx-auto text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
