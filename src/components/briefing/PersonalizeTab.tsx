
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Link } from "lucide-react";

const PersonalizeTab: React.FC = () => {
  const customizableItems = [
    {
      title: "Estilo do conteúdo",
      desc: "O tom e o formato (vídeo, foto, carrossel, stories, etc.) podem ser adaptados ao seu estilo pessoal e à preferência do seu público."
    },
    {
      title: "Prazos e Horários",
      desc: "Escolha o melhor horário para engajamento com base no comportamento do seu público, dentro do período da campanha que é (21/04 - 28/04). A informação da Pré-Venda é que as peças vão chegar no final de Maio. Após você organizar esses detalhes da campanha e divulgar no seu perfil, avise antecipadamente qual dia ou quais dias você irá postar/divulgar no seu perfil para que a Delta Fitness Brazil esteja ciente previamente."
    },
    {
      title: "Exemplos de frases",
      desc: "Personalize as legendas ou scripts dos vídeos e/ou stories, desde que mantenham a mensagem-chave da campanha."
    },
    {
      title: "Ideias criativas (Reels/Carrosseis)",
      desc: "Sinta-se à vontade para criar desafios, teasers ou dinâmicas próprias para engajar ainda mais seus seguidores."
    }
  ];

  return (
    <TabsContent value="personalize">
      <h3 className="text-lg font-semibold text-center mb-4">O QUE VOCÊ PODE AJUSTAR OU PERSONALIZAR</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {customizableItems.map((item, index) => (
          <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10">
            <h4 className="font-medium text-delta-neon mb-2">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-lg border border-delta-neon/30">
        <p className="text-center font-medium mb-2">Lembre-se:</p>
        <p className="text-center">Essa campanha é uma parceria! Quanto mais você se dedicar a seguir essas diretrizes e usar sua criatividade dentro delas, maior será o impacto e o sucesso da pré-venda. 💪</p>
      </div>
      
      <div className="flex justify-center mt-6">
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <p className="text-sm font-medium mb-1">E-mail para dúvidas:</p>
            <a href="mailto:deltafitnessbrasil@gmail.com?subject=Contato&body=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es." className="text-delta-neon hover:underline text-sm flex items-center">
              <Link className="h-3 w-3 mr-1" />
              Mande um email
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-medium mb-1">WhatsApp:</p>
            <a href="https://wa.me/558293460460?text=Queria%20tirar%20d%C3%BAvidas%20sobre%20o%20https%3A%2F%2Fdeltarunmuscle.netlify.app%2F%20%20%F0%9F%92%AA%F0%9F%96%A4." className="text-delta-neon hover:underline text-sm flex items-center">
              <Link className="h-3 w-3 mr-1" />
              Para dúvidas
            </a>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default PersonalizeTab;
