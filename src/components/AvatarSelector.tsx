
import React, { useEffect } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Updated avatar collection with more fitness archetypes
const avatars = [
  { id: 1, name: "Corredor", src: "/avatars/runner-1.svg" },
  { id: 2, name: "Musculação", src: "/avatars/runner-2.svg" },
  { id: 3, name: "Yoga", src: "/avatars/runner-3.svg" },
  { id: 4, name: "Ciclista", src: "/avatars/runner-4.svg" },
  { id: 5, name: "Nadador", src: "/avatars/runner-5.svg" },
  { id: 6, name: "Boxe", src: "/avatars/runner-6.svg" },
  { id: 7, name: "CrossFit", src: "/avatars/runner-7.svg" },
  { id: 8, name: "Futebol", src: "/avatars/runner-8.svg" },
  { id: 9, name: "Tênis", src: "/avatars/runner-9.svg" },
  { id: 10, name: "Functional", src: "/avatars/runner-10.svg" },
  { id: 11, name: "Pilates", src: "/avatars/fitness-11.svg" },
  { id: 12, name: "Dançarina", src: "/avatars/fitness-12.svg" },
  { id: 13, name: "Trilha", src: "/avatars/fitness-13.svg" },
  { id: 14, name: "Nutrição", src: "/avatars/fitness-14.svg" },
  { id: 15, name: "Coach", src: "/avatars/fitness-15.svg" },
  { id: 16, name: "Wellness", src: "/avatars/fitness-16.svg" },
];

interface AvatarSelectorProps {
  selectedId: number;
  onChange: (id: number) => void;
}

const AvatarSelector: React.FC<AvatarSelectorProps> = ({ selectedId, onChange }) => {
  const [currentIndex, setCurrentIndex] = React.useState(
    // Find the index that matches the selectedId or default to 0
    avatars.findIndex(avatar => avatar.id === selectedId) !== -1 
      ? avatars.findIndex(avatar => avatar.id === selectedId) 
      : 0
  );
  
  // Call onChange when currentIndex changes
  useEffect(() => {
    onChange(avatars[currentIndex].id);
  }, [currentIndex, onChange]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : avatars.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < avatars.length - 1 ? prev + 1 : 0));
  };

  // Get current avatar
  const currentAvatar = avatars[currentIndex];
  
  // Don't use fallback to dicebear - let the SVG display properly
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load avatar: ${currentAvatar.src}`);
    // Just log the error but don't replace with dicebear avatar
    // as we want to show the SVG icons for fitness activities
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
              src={currentAvatar.src}
              alt={currentAvatar.name}
              className="w-full h-full object-contain"
              onError={handleImageError}
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
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
