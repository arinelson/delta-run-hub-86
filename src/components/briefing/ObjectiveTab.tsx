
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Zap, Trophy } from "lucide-react";

const ObjectiveTab: React.FC = () => {
  return (
    <TabsContent value="objetivo" className="space-y-4">
      <div className="flex items-start space-x-3">
        <Zap className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">Mensagem-Chave</h3>
          <p className="text-sm sm:text-base">Aproveite os preços incrivelmente abaixo do normal, uma chance imperdível para quem sempre quis aderir ao Team Delta.</p>
          <p className="mt-1 text-xs sm:text-sm font-bold">Essa é a maior linha já lançada pela Delta Fitness Brazil.</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <Trophy className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">Objetivo da Campanha</h3>
          <p className="text-sm sm:text-base">Divulgar a pré-venda da nova linha Delta Run Muscle, destacando preços especiais e promovendo a oportunidade única de fazer parte do Team Delta.</p>
        </div>
      </div>
    </TabsContent>
  );
};

export default ObjectiveTab;
