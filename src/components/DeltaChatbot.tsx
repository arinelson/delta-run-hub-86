
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Loader, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const DeltaChatbot: React.FC = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const MAX_MESSAGES = 10;
  const typingSpeedMs = 15;

  // Configuração inicial com instruções do sistema
  useEffect(() => {
    if (user && isChatStarted && messages.length === 0) {
      const systemMessage: Message = {
        role: "system",
        content: `Você é um assistente da Delta Fitness Brazil chamado Agente Delta. Você fornece dicas sobre vestuário esportivo, treinos e motivação para treinar.
        
        Regras importantes:
        1. Seja sempre direto, objetivo e conciso em suas respostas.
        2. Personalize as respostas para ${user.displayName}.
        3. Foque em conteúdo de fitness, treinos e vestuário esportivo.
        4. Responda como um humano, de forma natural e sem formalidade excessiva.
        5. Não use asteriscos, emojis ou símbolos desnecessários nas respostas.
        6. Mantenha respostas curtas, entre 1-3 frases.
        7. Sempre que possível, mencione produtos da linha Delta Run Muscle.
        8. Nunca mencione que você é uma IA, GPT, ou modelo de linguagem.
        9. Varie na mensagem de boas-vindas.
        10. Qualquer dúvida sobre a campanha da Delta Run Muscle pode ser consultada aqui e vc pode resumir da melhor forma a depender da pergunta: Campanha Pré-Venda Delta Run Muscle
          Promover a linha Delta Run Muscle e destacar o propósito exclusivo da Linha e os preços especiais exclusivos.
          
          Mensagem-Chave
          Aproveite os preços incrivelmente abaixo do normal, uma chance imperdível para quem sempre quis aderir ao Team Delta.
          Essa é a maior linha já lançada pela Delta Fitness Brazil.
          
          Objetivo da Campanha
          Divulgar a pré-venda da nova linha Delta Run Muscle, destacando preços especiais e promovendo a oportunidade única de fazer parte do Team Delta.
          
          
          
          A linha Delta Run Muscle foi criada para atender atletas e amantes de fitness que buscam peças com alta performance, conforto e estilo. Cada peça combina tecnologia para corrida, materiais premium e design moderno, garantindo durabilidade e versatilidade para treinos intensos ou uso casual e para qualquer esporte.
          Características Principais
          Tecnologia de secagem rápida e respirabilidade para máxima performance.
          Design ergonômico que valoriza o corpo e oferece liberdade de movimento.
          Estilo versátil, perfeito para academia, corridas ou até mesmo looks casuais.
          Peças da Linha
          Camisas de Compressão: Feitas com tecido leve e resistente, ideais para treinos intensos.
          Tops e Shorts: Design ajustável e funcionais.
          Camisa Normal: Com suporte reforçado para atividades de alto impacto.
          Regata: Perfeitos para dias quentes, com uma maior flexibilidade.
          
          Foco Principal: Stories
          Publique Stories (entre 3 a 7 stories) mostrando a prévia das peças da linha Delta Run Muscle.
          Use seu link personalizado, que direcionará os interessados diretamente ao WhatsApp da Delta Fitness Brazil com sua identificação.
          Inclua um último call-to-action no final do stories incluindo o seu link personalizado.
          BÔNUS: Reels/Carrossel (Opcional)
          Considerando que ao longo da semana você vai postar conteúdos variáveis no seu perfil, aqui fica opcional você criar ideias tanto para reels ou carrosseis com o objetivo de propagar seu link, mesmo que seja para a pré-venda e, consequentemente, não tenha como mostrar as peças em tempo real.
          
          Adaptação e criatividade aqui reina, então deixamos à vontade nessa etapa. Só verificar a parte do DO e DONT ao lado para lembrar do essencial. 
          Exemplo de ideias criativas:
          Mostrando trechos do seu dia a dia em treino em reels e com a voz narrada e com o storytelling sendo bem construído para no final você divulgar o seu CTA.
          Carrossel com fotos aleatórias do seu dia e dia e a narrativa sendo construída para no final você fazer o seu CTA.
          
          O QUE FAZER (OBRIGATÓRIO)
          ✅ Use seu link personalizado.
          Sempre inclua seu link exclusivo nas postagens para rastrear suas vendas e garantir sua comissão/parceria.
          
          ✅ Mostre imagens ou vídeos de alta qualidade
          Publique fotos/vídeos de alta qualidade para divulgar a informação da pré-venda da linha Delta Run Muscle.
          
          ✅ Fale sobre a pré-venda
          Informe e deixe claro que é uma pré-venda, o que significa que as peças não estão com vocês no momento, mas é uma condição exclusiva de antecipação.
          
          ✅ Engaje visualmente
          Crie conteúdos criativos que façam desejar as peças da Delta Fitness pelo histórico de experiência de peças anteriores.
          
          ✅ Prazos
          A Pré-Venda para adquirir em condições exclusivas é entre 21/04 - 28/04. E a informação das peças chegarem é para o final de Maio (prazo máximo).
          
          
          
          O QUE NÃO FAZER
          ❌ Não esqueça o link personalizado
          Publicações sem o link não serão contabilizadas e podem prejudicar sua performance na campanha.
          
          ❌ Não divulgue preços específicos
          Evite mencionar valores exatos dos produtos. Apenas reforce que estão "muito abaixo do normal" ou "imperdíveis".
          
          ❌ Não promova links externos
          Não redirecione os seguidores para outros sites ou lojas que não sejam o WhatsApp oficial da Delta Fitness Brazil.
          
          ❌ Não use linguagem negativa
          Evite frases como "última chance" ou "vai acabar logo" sem autorização prévia, para não gerar pressão excessiva.
          
          ❌ Não altere o foco da campanha
          Mantenha o foco na pré-venda da linha Delta Run Muscle. Não misture outras promoções ou marcas no mesmo conteúdo.
          
          O QUE VOCÊ PODE AJUSTAR OU PERSONALIZAR
          Estilo do conteúdo
          O tom e o formato (vídeo, foto, carrossel, stories, etc.) podem ser adaptados ao seu estilo pessoal e à preferência do seu público.
          Prazos e Horários
          Escolha o melhor horário para engajamento com base no comportamento do seu público, dentro do período da campanha que é (21/04 - 28/04). A informação da Pré-Venda é que as peças vão chegar no final de Maio. Após você organizar esses detalhes da campanha e divulgar no seu perfil, avise antecipadamente qual dia ou quais dias você irá postar/divulgar no seu perfil para que a Delta Fitness Brazil esteja ciente previamente.
          Exemplos de frases
          Personalize as legendas ou scripts dos vídeos e/ou stories, desde que mantenham a mensagem-chave da campanha.
          Ideias criativas (Reels/Carrosseis)
          Sinta-se à vontade para criar desafios, teasers ou dinâmicas próprias para engajar ainda mais seus seguidores.
          Lembre-se:
          Essa campanha é uma parceria! Quanto mais você se dedicar a seguir essas diretrizes e usar sua criatividade dentro delas, maior será o impacto e o sucesso da pré-venda. 💪
          `
      };

      const welcomeMessage: Message = {
        role: "assistant",
        content: `Olá, ${user.displayName}! Sou o Agente Delta, seu assistente da Team Delta. Como posso ajudar com dicas de treino ou sobre a linha Delta Run Muscle hoje?`
      };

      setMessages([systemMessage, welcomeMessage]);
      simulateTyping(welcomeMessage.content);
    }
  }, [user, isChatStarted]);

  // Scrollar para o final quando novas mensagens chegarem
  useEffect(() => {
    if (messagesEndRef.current && !isTyping) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, displayedText]);

  // Função para simular digitação
  const simulateTyping = (text: string) => {
    setIsTyping(true);
    setDisplayedText("");
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeedMs);
  };

  const handleStartChat = () => {
    setIsChatStarted(true);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;
    
    // Verificar limite de mensagens
    if (messageCount >= MAX_MESSAGES) {
      setMessages(prev => [
        ...prev.filter(m => m.role !== "system"),
        {
          role: "assistant",
          content: `Parece que estou muito requisitado hoje! Muitos influencers estão me consultando ao mesmo tempo. Para continuar recebendo dicas e novidades, siga a Delta Fitness Brazil no Instagram: @deltafitness.brazil`
        }
      ]);
      simulateTyping(`Parece que estou muito requisitado hoje! Muitos influencers estão me consultando ao mesmo tempo. Para continuar recebendo dicas e novidades, siga a Delta Fitness Brazil no Instagram: @deltafitness.brazil`);
      return;
    }

    const userMessage: Message = { role: "user", content: input };
    
    setMessages(prev => [...prev.filter(m => m.role !== "system"), userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const systemMessage = messages.find(m => m.role === "system");
      const chatMessages = [
        ...(systemMessage ? [systemMessage] : []),
        ...messages.filter(m => m.role !== "system"),
        userMessage
      ];
      
      const apiKey = import.meta.env.VITE_GROK_DELTAHUB; //|| process.env.VITE_GROK_DELTAHUB;
      
      if (!apiKey) {
        throw new Error("API key not found");
      }
      
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "compound-beta-mini",
          messages: chatMessages,
          temperature: 0.7,
          max_tokens: 200
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Error calling Groq API");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.choices[0].message.content.trim()
      };

      setMessages(prev => [...prev.filter(m => m.role !== "system"), assistantMessage]);
      simulateTyping(assistantMessage.content);
      setMessageCount(prev => prev + 1);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      toast.error("Desculpe, não consegui processar sua mensagem. Tente novamente mais tarde.");
      
      const errorMessage = "Desculpe, estou com dificuldades técnicas no momento. Tente novamente em instantes.";
      setMessages(prev => [
        ...prev.filter(m => m.role !== "system"),
        {
          role: "assistant", 
          content: errorMessage
        }
      ]);
      simulateTyping(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            className="h-12 w-12 rounded-full bg-delta-blue hover:bg-delta-blue/90 shadow-lg border border-delta-neon/30 animate-pulse-soft"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6 text-delta-neon" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 sm:w-96 p-0 border border-delta-neon/20 bg-black/90 backdrop-blur-lg shadow-lg rounded-lg"
          side="top"
          align="end"
          sideOffset={20}
        >
          <div className="flex flex-col h-96">
            <div className="flex items-center justify-between border-b border-gray-700 p-3">
              <div className="flex items-center">
                <div className="bg-delta-blue rounded-full p-1.5 mr-2">
                  <MessageCircle className="h-4 w-4 text-delta-neon" />
                </div>
                <h3 className="font-medium text-sm">Delta Team Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 p-3 overflow-y-auto space-y-3">
              {!isChatStarted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-3 text-center p-4">
                  <div className="bg-delta-blue rounded-full p-3">
                    <MessageCircle className="h-8 w-8 text-delta-neon" />
                  </div>
                  <h3 className="text-lg font-medium">Olá {user?.displayName}!</h3>
                  <p className="text-sm text-gray-400">
                    Precisa de ajuda com dúvidas sobre a linha Delta Run Muscle ou dicas de treino?
                  </p>
                  <Button 
                    className="mt-2 bg-gradient-neon text-black" 
                    onClick={handleStartChat}
                  >
                    Iniciar conversa
                  </Button>
                </div>
              ) : (
                <>
                  {messages.filter(m => m.role !== "system").map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          msg.role === "user"
                            ? "bg-delta-blue text-white"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">
                          {msg.role === "assistant" && isTyping && messages.filter(m => m.role !== "system").length - 1 === index
                            ? displayedText
                            : msg.content}
                        </p>
                        {msg.role === "assistant" && isTyping && messages.filter(m => m.role !== "system").length - 1 === index && (
                          <span className="inline-block w-1 h-4 bg-white/70 ml-1 animate-pulse"></span>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && !isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 max-w-[80%] rounded-lg px-3 py-2">
                        <Loader className="h-4 w-4 animate-spin text-delta-neon" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>
            
            {isChatStarted && (
              <form onSubmit={handleSendMessage} className="border-t border-gray-700 p-3">
                <div className="flex items-center space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-gray-800 border-gray-700 focus:ring-delta-neon focus:border-delta-neon"
                    disabled={isLoading || isTyping || messageCount >= MAX_MESSAGES}
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    disabled={!input.trim() || isLoading || isTyping || messageCount >= MAX_MESSAGES}
                    className="bg-delta-blue hover:bg-delta-blue/80"
                  >
                    {isLoading ? (
                      <Loader className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {messageCount >= MAX_MESSAGES && (
                  <p className="text-xs text-gray-400 mt-2">
                    Limite de mensagens atingido. Siga @deltafitness.brazil no Instagram para mais dicas.
                  </p>
                )}
              </form>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DeltaChatbot;
