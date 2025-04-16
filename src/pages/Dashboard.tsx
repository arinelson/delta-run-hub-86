
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import ProfileSettings from "@/components/ProfileSettings";
import FitnessQuote from "@/components/FitnessQuote";
import BriefingSection from "@/components/BriefingSection";
import { LogOut, RunningIcon } from "lucide-react";
import { themeColors } from "@/lib/auth";

const Dashboard: React.FC = () => {
  const { user, logout, updateUserPreferences } = useAuth();
  const navigate = useNavigate();

  // Placeholder for avatar display
  const avatarPlaceholder = `https://api.dicebear.com/7.x/personas/svg?seed=${user?.displayName || "Avatar"}`;
  
  // Get current theme color
  const currentTheme = themeColors.find(t => t.id === user?.themeColor) || themeColors[0];

  if (!user) {
    navigate("/");
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
              <RunningIcon className="h-5 w-5 text-delta-neon" />
            </div>
            <h1 className="text-xl font-bold">Delta Run Hub</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
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
        {/* Welcome section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8 p-6 rounded-lg glass-card">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
            <div 
              className="w-24 h-24 rounded-full border-2 overflow-hidden"
              style={{ borderColor: currentTheme.value }}
            >
              <img 
                src={avatarPlaceholder} 
                alt={user.displayName} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-1">
              Bem-vindo(a) ao Team Delta, <span className="text-glow" style={{ color: currentTheme.value }}>{user.displayName}</span>
            </h2>
            <p className="text-gray-400 mb-3">
              Aqui está seu briefing para a campanha Delta Run Muscle
            </p>
            <FitnessQuote className="sm:max-w-md" />
          </div>
        </div>
        
        {/* Main content */}
        <BriefingSection />
        
        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2025 Delta Fitness Brazil. Todos os direitos reservados.</p>
          <p className="mt-1">Área exclusiva para influenciadores. Não compartilhe estas informações.</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
