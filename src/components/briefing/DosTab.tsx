
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

const DosTab: React.FC = () => {
  const dosItems = [
    {
      title: "Use seu link personalizado.",
      desc: "Sempre inclua seu link exclusivo nas postagens para rastrear suas vendas e garantir sua comissão/parceria."
    },
    {
      title: "Mostre imagens ou vídeos de alta qualidade",
      desc: "Publique fotos/vídeos de alta qualidade para divulgar a informação da pré-venda da linha Delta Run Muscle."
    },
    {
      title: "Fale sobre a pré-venda",
      desc: "Informe e deixe claro que é uma pré-venda, o que significa que as peças não estão com vocês no momento, mas é uma condição exclusiva de antecipação."
    },
    {
      title: "Engaje visualmente",
      desc: "Crie conteúdos criativos que façam desejar as peças da Delta Fitness pelo histórico de experiência de peças anteriores."
    },
    {
      title: "Prazos",
      desc: "A Pré-Venda para adquirir em condições exclusivas é entre 21/04 - 28/04. E a informação das peças chegarem é para o final de Maio (prazo máximo)."
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
