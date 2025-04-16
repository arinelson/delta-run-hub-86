
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

const DosTab: React.FC = () => {
  const dosItems = [
    {
      title: "Use seu link personalizado",
      desc: "Sempre inclua seu link exclusivo nas postagens para rastrear suas vendas e garantir sua comissão/parceria."
    },
    {
      title: "Mostre imagens ou vídeos das peças",
      desc: "Publique fotos/vídeos de alta qualidade das peças da linha Delta Run Muscle."
    },
    {
      title: "Fale sobre a pré-venda",
      desc: "Deixe claro que os produtos estão em fase de pré-venda e que os preços estão abaixo do normal."
    },
    {
      title: "Inclua um call-to-action claro",
      desc: "Exemplo: \"Corre lá no meu link e garanta já sua peça!\""
    },
    {
      title: "Engaje visualmente",
      desc: "Crie conteúdos criativos que mostrem as peças em uso ou em destaque, incentivando o desejo de compra."
    }
  ];

  return (
    <TabsContent value="do" className="space-y-3">
      <h3 className="text-lg font-semibold text-center mb-2">O QUE FAZER (OBRIGATÓRIO)</h3>
      
      <div className="space-y-4">
        {dosItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-sm sm:text-base">{item.title}</p>
              <p className="text-xs sm:text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default DosTab;
