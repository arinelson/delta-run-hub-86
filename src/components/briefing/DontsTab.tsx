
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { XCircle } from "lucide-react";

const DontsTab: React.FC = () => {
  const dontsItems = [
    {
      title: "Não esqueça o link personalizado",
      desc: "Publicações sem o link não serão contabilizadas e podem prejudicar sua performance na campanha. Volte a etapas anteriores e salve e teste o seu link para garantir que você viu que está funcionando."
    },
    {
      title: "Não divulgue preços específicos",
      desc: "Evite mencionar valores exatos dos produtos. Apenas reforce que estão \"muito abaixo do normal\" ou \"imperdíveis\". Exceto se for no privado ou realmente uma necessidade de informar para o seu público, então vai da percepção que você tiver do seu público."
    },
    {
      title: "Não promova links externos",
      desc: "Não redirecione os seguidores para outros sites ou lojas que não sejam o WhatsApp oficial da Delta Fitness Brazil."
    },
    {
      title: "Não use linguagem negativa",
      desc: "Evite frases como \"última chance\" ou \"vai acabar logo\" sem autorização prévia, para não gerar pressão excessiva."
    },
    {
      title: "Não altere o foco da campanha",
      desc: "Mantenha o foco na pré-venda da linha Delta Run Muscle. Não misture outras promoções ou marcas no mesmo conteúdo."
    }
  ];

  return (
    <TabsContent value="dont" className="space-y-3">
      <h3 className="text-lg font-semibold text-center mb-2">O QUE NÃO FAZER</h3>
      
      <div className="space-y-4">
        {dontsItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default DontsTab;
