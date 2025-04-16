import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, User, authenticateUser } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check for saved user on initial load with improved error handling
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("deltaRunUser");
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        
        // Verify the user object has expected properties
        if (!parsedUser.id || !parsedUser.username) {
          console.warn("Stored user data may be corrupted, redirecting to login");
          localStorage.removeItem("deltaRunUser");
          setUser(null);
          if (window.location.pathname !== "/") {
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.error("Failed to parse saved user:", error);
      localStorage.removeItem("deltaRunUser");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  // Add session ping to keep authentication alive
  useEffect(() => {
    if (user) {
      // Update timestamp periodically to keep session "fresh"
      const interval = setInterval(() => {
        try {
          const savedUser = localStorage.getItem("deltaRunUser");
          if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            parsedUser.lastActive = new Date().getTime();
            localStorage.setItem("deltaRunUser", JSON.stringify(parsedUser));
          }
        } catch (error) {
          console.error("Failed to update session timestamp:", error);
        }
      }, 60000); // Update every minute

      return () => clearInterval(interval);
    }
  }, [user]);

  // Login function
  const login = async (username: string, password: string): Promise<boolean> => {
    const authUser = authenticateUser(username, password);
    
    if (authUser) {
      // Add timestamp for session tracking
      const userWithTimestamp = {
        ...authUser,
        lastActive: new Date().getTime()
      };
      
      setUser(userWithTimestamp);
      
      // Use try-catch for localStorage operations
      try {
        localStorage.setItem("deltaRunUser", JSON.stringify(userWithTimestamp));
      } catch (error) {
        console.error("Failed to save user to localStorage:", error);
        toast({
          title: "Aviso",
          description: "Seu login foi bem-sucedido, mas pode não persistir em atualizações de página devido a configurações do navegador.",
          variant: "warning",
          duration: 5000,
        });
      }
      
      toast({
        title: "Login bem-sucedido!",
        description: `Bem-vindo(a) de volta, ${authUser.displayName}!`,
        duration: 3000,
      });
      return true;
    } else {
      toast({
        title: "Falha no login",
        description: "Usuário ou senha incorretos. Tente novamente.",
        variant: "destructive",
        duration: 3000,
      });
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("deltaRunUser");
    } catch (error) {
      console.error("Failed to remove user from localStorage:", error);
    }
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
      duration: 3000,
    });
  };

  // Update user preferences with improved error handling
  const updateUserPreferences = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates, lastActive: new Date().getTime() };
    setUser(updatedUser);
    
    try {
      localStorage.setItem("deltaRunUser", JSON.stringify(updatedUser));
      
      toast({
        title: "Perfil atualizado",
        description: "Suas preferências foram salvas com sucesso.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Failed to save updated user preferences:", error);
      toast({
        title: "Aviso",
        description: "Suas preferências foram atualizadas, mas podem não persistir em atualizações de página.",
        variant: "warning",
        duration: 3000,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserPreferences, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
