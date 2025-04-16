
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import ProfileSettings from "@/components/ProfileSettings";
import FitnessQuote from "@/components/FitnessQuote";
import BriefingSection from "@/components/BriefingSection";
import { LogOut, Activity } from "lucide-react";
import { themeColors } from "@/lib/auth";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard: React.FC = () => {
  const { user, logout, updateUserPreferences } = useAuth();
  const navigate = useNavigate();
  const [avatarSrc, setAvatarSrc] = useState<string>("");
  const isMobile = useIsMobile();

  // Get current theme color - memoized to avoid recalculations
  const currentTheme = useMemo(() => 
    themeColors.find(t => t.id === user?.themeColor) || themeColors[0], 
    [user?.themeColor]
  );

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, [user, navigate]);

  // Improve avatar loading with memoization and preloading
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    // Determine avatar type and index
    const isRunnerAvatar = user.avatarId <= 10;
    const avatarType = isRunnerAvatar ? 'runner' : 'fitness';
    const avatarIndex = isRunnerAvatar ? user.avatarId : user.avatarId - 10;
    
    // Set the avatar source path
    const avatarPath = `/avatars/${avatarType}-${avatarIndex}.svg`;
    
    // Preload the avatar image
    const img = new Image();
    img.src = avatarPath;
    img.onload = () => {
      setAvatarSrc(avatarPath);
    };
    img.onerror = () => {
      // Fallback to DiceBear avatar if the SVG fails to load
      setAvatarSrc(`https://api.dicebear.com/7.x/personas/svg?seed=${user.displayName}`);
    };

    // Cleanup the image on component unmount
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [user, navigate]);

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
      {/* Header/Navbar */}
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
        {/* Welcome section with optimized avatar */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8 p-4 sm:p-6 rounded-lg glass-card">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 overflow-hidden hardware-accelerated"
              style={{ borderColor: currentTheme.value }}
            >
              {avatarSrc ? (
                <img 
                  src={avatarSrc} 
                  alt={user.displayName} 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://api.dicebear.com/7.x/personas/svg?seed=${user.displayName}`;
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-delta-blue/30">
                  <div className="animate-spin h-6 w-6 border-2 border-delta-neon rounded-full border-t-transparent"></div>
                </div>
              )}
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
        
        {/* Main content */}
        <BriefingSection />
        
        {/* Footer */}
        <footer className="mt-12 text-center text-xs sm:text-sm text-gray-500">
          <p>&copy;Todos os direitos reservados.</p>
          <p className="mt-1">Área exclusiva para influenciadores. Não compartilhe estas informações.</p>

          <br>
          <br>
          <p>iDEALIZADO POR
          <a href="https://instagram.com/arinelson.me" target="_blank"> ARINELSON SANTOS </a>
          </p>
            
            
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
