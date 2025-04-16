
import React from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const avatars = [
  { id: 1, name: "Runner", src: "/avatars/runner-1.svg" },
  { id: 2, name: "Weightlifter", src: "/avatars/runner-2.svg" },
  { id: 3, name: "Yoga", src: "/avatars/runner-3.svg" },
  { id: 4, name: "Cyclist", src: "/avatars/runner-4.svg" },
  { id: 5, name: "Swimmer", src: "/avatars/runner-5.svg" },
  { id: 6, name: "Boxer", src: "/avatars/runner-6.svg" },
  { id: 7, name: "Basketball", src: "/avatars/runner-7.svg" },
  { id: 8, name: "Soccer", src: "/avatars/runner-8.svg" },
  { id: 9, name: "Tennis", src: "/avatars/runner-9.svg" },
  { id: 10, name: "CrossFit", src: "/avatars/runner-10.svg" },
];

interface AvatarSelectorProps {
  selectedId: number;
  onChange: (id: number) => void;
}

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ selectedId, onChange }) => {
  const [currentIndex, setCurrentIndex] = React.useState(selectedId - 1);

  React.useEffect(() => {
    onChange(avatars[currentIndex].id);
  }, [currentIndex, onChange]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : avatars.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < avatars.length - 1 ? prev + 1 : 0));
  };

  // Fallback image for development environment
  const currentAvatar = avatars[currentIndex];
  const placeholderSrc = `https://api.dicebear.com/7.x/personas/svg?seed=${currentAvatar.name}`;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Previous avatar"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="relative mx-4">
          <div className={cn(
            "w-24 h-24 rounded-full overflow-hidden transition-all duration-300",
            "border-2 dark:bg-delta-gray-dark bg-delta-blue-light/10",
            selectedId === currentAvatar.id ? "border-delta-neon animate-glow" : "border-transparent"
          )}>
            <img
              src={placeholderSrc}
              alt={currentAvatar.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = placeholderSrc;
              }}
            />
          </div>
          {selectedId === currentAvatar.id && (
            <div className="absolute -bottom-1 -right-1 bg-delta-neon rounded-full p-1">
              <Check className="h-4 w-4 text-delta-black" />
            </div>
          )}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Next avatar"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <span className="text-sm font-medium">{currentAvatar.name}</span>
    </div>
  );
};

export default AvatarSelector;
