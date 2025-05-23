
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { MessageSquare, Zap, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";

const ContentTab: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleCopyLink = () => {
    if (user?.personalLink) {
      navigator.clipboard.writeText(user.personalLink);
      toast({
        title: "Link copiado!",
        description: "Seu link personalizado foi copiado para a área de transferência.",
        duration: 3000,
      });
    }
  };

  return (
    <TabsContent value="conteudo" className="space-y-5">
      <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10 border border-delta-neon/30">
        <h3 className="text-lg font-semibold text-delta-neon mb-2">Seu Link Personalizado</h3>
        <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <div className="w-full overflow-hidden">
            <code className="bg-black/30 px-3 py-2 rounded block font-mono text-delta-neon text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
              {user?.personalLink}
            </code>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleCopyLink}
            className="flex-shrink-0"
            title="Copiar link"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs sm:text-sm mt-2 text-gray-400">
          Use este link em todas as suas postagens para rastrear suas vendas.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-3">
        <MessageSquare className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
        <div className="w-full">
          <h3 className="text-lg font-semibold">Foco Principal: Stories</h3>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li className="break-words">Publique Stories (entre 3 a 7 stories) mostrando a prévia das peças da linha Delta Run Muscle.</li>
            <li className="break-words">Use seu link personalizado, que direcionará os interessados diretamente ao WhatsApp da Delta Fitness Brazil com sua identificação.</li>
            <li className="break-words">
             Inclua um último call-to-action no final do stories incluindo o seu link personalizado, como:
              <div className="mt-2 p-3 bg-black/30 rounded-lg overflow-hidden">
                <p className="break-words">
                  "Essa é a sua chance de fazer parte do Team Delta com condições exclusivas para a pré-venda da Linha Run! Corre lá no meu link (ou comenta este stories) e garanta sua peça antes de todo mundo: 
                  <span className="text-delta-neon block mt-1 overflow-x-auto pb-1">
                    {user?.personalLink}

                  </span>"
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start gap-3">
        <Zap className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
        <div className="w-full">
          <h3 className="text-lg font-semibold">BÔNUS: Reels/Carrossel (Opcional)</h3>
          <p className="break-words">Considerando que ao longo da semana você vai postar conteúdos variáveis no seu perfil, aqui fica opcional você criar ideias tanto para reels ou carrosseis com o objetivo de propagar seu link, mesmo que seja para a pré-venda e, consequentemente, não tenha como mostrar as peças em tempo real.

          Adaptação e criatividade aqui reina, então deixamos à vontade nessa etapa. Só verificar a parte do DO e DONT ao lado para lembrar do essencial.</p>
          <p className="mt-2 break-words">Exemplo de ideias criativas:</p>
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li className="break-words">Mostrando trechos do seu dia a dia em treino em reels e com a voz narrada e com o storytelling sendo bem construído para no final você divulgar o seu CTA.</li>
            <li className="break-words">Carrossel com fotos aleatórias do seu dia e dia e a narrativa sendo construída para no final você fazer o seu CTA.</li>
          </ul>
        </div>
      </div>
    </TabsContent>
  );
};

export default ContentTab;
