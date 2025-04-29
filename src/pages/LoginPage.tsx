
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock, User, Activity } from "lucide-react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate("/campaigns");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      if (success) {
        navigate("/campaigns");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking authentication
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="inline-block rounded-full p-3 bg-delta-blue">
          <svg className="h-8 w-8 text-delta-neon animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="mt-3 text-gray-400">Carregando...</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-dark">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-delta-blue rounded-full p-2 sm:p-3 animate-pulse-soft">
              <Activity className="h-8 w-8 sm:h-10 sm:w-10 text-delta-neon" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            <span className="text-delta-neon">Delta</span> Run Muscle
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">Acesse a área exclusiva de influenciadores</p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <div className="flex items-center border-b border-gray-400/30 py-2">
                <User className="h-5 w-5 text-delta-neon mr-3" />
                <Input
                  type="text"
                  placeholder="Usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 placeholder:text-gray-400/70"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center border-b border-gray-400/30 py-2">
                <Lock className="h-5 w-5 text-delta-neon mr-3" />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 placeholder:text-gray-400/70"
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-neon hover:opacity-90 text-black font-medium py-2"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
          
          <div className="mt-6 pt-4 border-t border-gray-700/30 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              Área exclusiva para membros do Team Delta. 
              <br />
              Contate seu gerenciador para acesso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
