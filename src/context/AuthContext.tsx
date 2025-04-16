
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, User, authenticateUser } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("deltaRunUser");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem("deltaRunUser");
      }
    }
  }, []);

  // Login function
  const login = async (username: string, password: string): Promise<boolean> => {
    const authUser = authenticateUser(username, password);
    
    if (authUser) {
      setUser(authUser);
      localStorage.setItem("deltaRunUser", JSON.stringify(authUser));
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
    localStorage.removeItem("deltaRunUser");
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
      duration: 3000,
    });
  };

  // Update user preferences
  const updateUserPreferences = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem("deltaRunUser", JSON.stringify(updatedUser));
    
    toast({
      title: "Perfil atualizado",
      description: "Suas preferências foram salvas com sucesso.",
      duration: 3000,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserPreferences }}>
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
