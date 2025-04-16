
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
            {/* SVG content rendered directly for fitness avatars 11-16 */}
            {currentAvatar.id >= 11 ? (
              <div className="w-full h-full flex items-center justify-center">
                {currentAvatar.id === 11 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#EC4899" />
                    <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
                    <ellipse cx="50" cy="60" rx="15" ry="25" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M50 35V85" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M40 45L60 45" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M35 55L65 55" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M35 65L65 65" stroke="#00F5FF" strokeWidth="3"/>
                  </svg>
                )}
                {currentAvatar.id === 12 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#D946EF" />
                    <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
                    <path d="M40 35C40 35 35 45 35 55C35 65 40 75 50 75C60 75 65 65 65 55C65 45 60 35 60 35" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M40 35C40 35 45 45 50 45C55 45 60 35 60 35" stroke="#00F5FF" strokeWidth="3"/>
                    <circle cx="50" cy="60" r="5" fill="#00F5FF"/>
                  </svg>
                )}
                {currentAvatar.id === 13 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#65A30D" />
                    <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
                    <path d="M30 75L40 55L50 70L60 50L70 70" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M20 85L80 85" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M50 30L50 55" stroke="#00F5FF" strokeWidth="3"/>
                  </svg>
                )}
                {currentAvatar.id === 14 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#16A34A" />
                    <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
                    <circle cx="50" cy="50" r="15" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M35 50L65 50" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M50 35L50 65" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M30 75L70 75" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M35 82L65 82" stroke="#00F5FF" strokeWidth="3"/>
                  </svg>
                )}
                {currentAvatar.id === 15 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#0284C7" />
                    <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
                    <rect x="35" y="35" width="30" height="40" rx="2" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M40 45L60 45" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M40 55L60 55" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M40 65L50 65" stroke="#00F5FF" strokeWidth="3"/>
                  </svg>
                )}
                {currentAvatar.id === 16 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#7E22CE" />
                    <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
                    <path d="M35 45C35 45 42.5 35 50 35C57.5 35 65 45 65 45" stroke="#00F5FF" strokeWidth="3"/>
                    <path d="M65 55C65 55 57.5 65 50 65C42.5 65 35 55 35 55" stroke="#00F5FF" strokeWidth="3"/>
                    <circle cx="50" cy="50" r="5" fill="#00F5FF"/>
                    <path d="M30 80L40 70H60L70 80" stroke="#00F5FF" strokeWidth="3"/>
                  </svg>
                )}
              </div>
            ) : (
              /* For runner avatars 1-10, use img tag */
              <img
                src={currentAvatar.src}
                alt={currentAvatar.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error(`Failed to load avatar: ${currentAvatar.src}`);
                }}
              />
            )}
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
