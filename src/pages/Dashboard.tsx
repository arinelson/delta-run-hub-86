import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import ProfileSettings from "@/components/ProfileSettings";
import FitnessQuote from "@/components/FitnessQuote";
import BriefingSection from "@/components/BriefingSection";
import DeltaChatbot from "@/components/DeltaChatbot";
import { LogOut, Activity } from "lucide-react";
import { themeColors } from "@/lib/auth";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard: React.FC = () => {
  const { user, logout, updateUserPreferences } = useAuth();
  const navigate = useNavigate();
  const [avatarSrc, setAvatarSrc] = useState<string>("");
  const isMobile = useIsMobile();

  const currentTheme = useMemo(() => 
    themeColors.find(t => t.id === user?.themeColor) || themeColors[0], 
    [user?.themeColor]
  );

  // Ensure user is authenticated and set theme
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    
    // Check user session periodically
    const checkSession = setInterval(() => {
      try {
        const savedUser = localStorage.getItem("deltaRunUser");
        if (!savedUser) {
          console.warn("Session lost, redirecting to login");
          clearInterval(checkSession);
          logout();
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking session:", error);
      }
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(checkSession);
  }, [user, navigate, logout]);

  // Render SVG avatar content based on ID
  const renderAvatarContent = () => {
    if (!user) return null;

    // For runner avatars (1-10)
    if (user.avatarId <= 10) {
      return (
        <img 
          src={`/avatars/runner-${user.avatarId}.svg`} 
          alt={`Avatar ${user.avatarId}`} 
          className="w-full h-full object-contain"
          loading="eager"
          onError={(e) => {
            console.error(`Failed to load avatar: /avatars/runner-${user.avatarId}.svg`);
          }}
        />
      );
    }
    
    // For fitness avatars (11-16)
    // Directly render SVG based on avatar ID
    switch (user.avatarId) {
      case 11: // Pilates
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#EC4899" />
            <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
            <ellipse cx="50" cy="60" rx="15" ry="25" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M50 35V85" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M40 45L60 45" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M35 55L65 55" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M35 65L65 65" stroke="#00F5FF" strokeWidth="3"/>
          </svg>
        );
      case 12: // Dançarina
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#D946EF" />
            <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
            <path d="M40 35C40 35 35 45 35 55C35 65 40 75 50 75C60 75 65 65 65 55C65 45 60 35 60 35" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M40 35C40 35 45 45 50 45C55 45 60 35 60 35" stroke="#00F5FF" strokeWidth="3"/>
            <circle cx="50" cy="60" r="5" fill="#00F5FF"/>
          </svg>
        );
      case 13: // Trilha
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#65A30D" />
            <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
            <path d="M30 75L40 55L50 70L60 50L70 70" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M20 85L80 85" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M50 30L50 55" stroke="#00F5FF" strokeWidth="3"/>
          </svg>
        );
      case 14: // Nutrição
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#16A34A" />
            <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
            <circle cx="50" cy="50" r="15" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M35 50L65 50" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M50 35L50 65" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M30 75L70 75" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M35 82L65 82" stroke="#00F5FF" strokeWidth="3"/>
          </svg>
        );
      case 15: // Coach
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#0284C7" />
            <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
            <rect x="35" y="35" width="30" height="40" rx="2" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M40 45L60 45" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M40 55L60 55" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M40 65L50 65" stroke="#00F5FF" strokeWidth="3"/>
          </svg>
        );
      case 16: // Wellness
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#7E22CE" />
            <path d="M50 25C53.866 25 57 21.866 57 18C57 14.134 53.866 11 50 11C46.134 11 43 14.134 43 18C43 21.866 46.134 25 50 25Z" fill="#00F5FF" />
            <path d="M35 45C35 45 42.5 35 50 35C57.5 35 65 45 65 45" stroke="#00F5FF" strokeWidth="3"/>
            <path d="M65 55C65 55 57.5 65 50 65C42.5 65 35 55 35 55" stroke="#00F5FF" strokeWidth="3"/>
            <circle cx="50" cy="50" r="5" fill="#00F5FF"/>
            <path d="M30 80L40 70H60L70 80" stroke="#00F5FF" strokeWidth="3"/>
          </svg>
        );
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-delta-blue/30">
            <div className="animate-spin h-6 w-6 border-2 border-delta-neon rounded-full border-t-transparent"></div>
          </div>
        );
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div 
      className="min-h-screen pb-8"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.value}22, ${currentTheme.value}05)`,
      }}
    >
      <header className="backdrop-blur-sm border-b border-white/10 sticky top-0 z-10 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-delta-blue rounded-full p-1.5 mr-3">
              <Activity className="h-5 w-5 text-delta-neon" />
            </div>
            <h1 className="text-xl font-bold truncate">Delta Run Hub</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <ProfileSettings user={user} onUpdate={updateUserPreferences} />
            <Button
              variant="ghost"
              size="icon"
              onClick={logout}
              className="rounded-full text-gray-400 hover:text-gray-100"
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8 p-4 sm:p-6 rounded-lg glass-card">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 overflow-hidden hardware-accelerated"
              style={{ borderColor: currentTheme.value }}
            >
              {renderAvatarContent()}
            </div>
          </div>
          
          <div className="text-center sm:text-left w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Bem-vindo(a) ao Team Delta, <span className="text-emphasis" style={{ color: currentTheme.value }}>{user.displayName}</span>
            </h2>
            <p className="text-gray-400 mb-3 text-sm sm:text-base">
              Aqui está seu briefing para a campanha Delta Run Muscle
            </p>
            <FitnessQuote className="w-full sm:max-w-md text-sm sm:text-base" />
          </div>
        </div>
        
        <BriefingSection />
        
        <footer className="mt-12 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy;Todos os direitos reservados.</p>
          <p className="mt-1">Área exclusiva para influenciadores. Não compartilhe estas informações.</p>

          <div className="mt-4">
            <p>
              iDealizado por{" "}
              <a 
                href="https://arinelson.space/links" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#33C3F0] hover:text-[#1EAEDB] transition-colors font-medium"
                style={{
                  textShadow: "0 0 10px rgba(51, 195, 240, 0.5)",
                }}
              >
                Arinelson Santos
              </a>
            </p>
          </div>
        </footer>
      </main>
      
      {/* Chatbot component */}
      <DeltaChatbot />
    </div>
  );
};

export default Dashboard;
