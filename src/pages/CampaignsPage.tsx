
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Activity, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CampaignsPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Campanhas disponíveis (apenas a primeira está ativa)
  const campaigns = [
    {
      id: "delta-run-muscle",
      title: "Delta Run Muscle",
      description: "Pré-venda exclusiva da nova linha Delta Run Muscle",
      active: true,
      color: "#00F5FF" // Cor neon para campanha ativa
    },
    {
      id: "proxima-linha",
      title: "Próxima Linha",
      description: "Detalhes sobre a próxima linha em breve",
      active: false,
      comingSoon: true
    },
    {
      id: "proxima-linha2",
      title: "Próxima Linha 2",
      description: "Outra linha exclusiva a caminho",
      active: false
    },
    {
      id: "proxima-linha3",
      title: "Próxima Linha 3",
      description: "Mais novidades em breve",
      active: false
    }
  ];
  
  const handleCampaignClick = (campaignId: string, isActive: boolean) => {
    if (isActive) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen pb-8 bg-gradient-dark">
      <header className="backdrop-blur-sm border-b border-white/10 sticky top-0 z-10 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-delta-blue rounded-full p-1.5 mr-3">
              <Activity className="h-5 w-5 text-delta-neon" />
            </div>
            <h1 className="text-xl font-bold">Delta Run Hub</h1>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm mr-2 text-gray-300">Olá, {user?.displayName}</span>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Campanhas <span className="text-delta-neon">Delta Fitness</span>
          </h2>
          <p className="text-gray-400">Selecione uma campanha ativa para acessar seu briefing exclusivo</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className={`overflow-hidden transition-all duration-300 cursor-pointer border ${
                campaign.active 
                  ? "border-delta-neon shadow-[0_0_15px_rgba(0,245,255,0.3)]" 
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => handleCampaignClick(campaign.id, campaign.active)}
            >
              <div className={`h-2 ${campaign.active ? "bg-delta-neon animate-pulse-soft" : "bg-gray-700"}`}></div>
              <CardContent className="p-5 relative">
                {campaign.active ? (
                  <Badge 
                    variant="default" 
                    className="absolute right-4 top-4 bg-delta-neon text-black font-medium animate-pulse-soft"
                  >
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    ATIVA
                  </Badge>
                ) : (
                  <Badge 
                    variant="outline" 
                    className="absolute right-4 top-4 border-white/20 text-gray-400"
                  >
                    <Lock className="h-3 w-3 mr-1" />
                    BLOQUEADA
                  </Badge>
                )}
                
                <div className="flex items-center mb-4 mt-2">
                  {campaign.active ? (
                    <div className="h-12 w-12 rounded-full bg-delta-neon/20 flex items-center justify-center mr-4">
                      <Activity className="h-6 w-6 text-delta-neon" />
                    </div>
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gray-800/50 flex items-center justify-center mr-4">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                  <div>
                    <h3 className={`font-bold text-lg ${campaign.active ? "text-delta-neon" : "text-gray-400"}`}>
                      {campaign.title}
                    </h3>
                    {campaign.comingSoon && (
                      <p className="text-xs text-yellow-500">Em breve</p>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {campaign.description}
                </p>
                
                <Button 
                  variant={campaign.active ? "default" : "outline"} 
                  disabled={!campaign.active}
                  className={`w-full ${campaign.active ? "bg-delta-neon text-black hover:bg-delta-neon/90" : "opacity-50"}`}
                >
                  {campaign.active ? "Acessar Campanha" : "Bloqueado"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Novas campanhas serão desbloqueadas automaticamente quando disponíveis.
          </p>
        </div>
      </main>
      
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
    </div>
  );
};

export default CampaignsPage;
