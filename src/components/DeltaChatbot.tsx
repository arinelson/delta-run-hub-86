
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const MAX_MESSAGES = 10;

  // Configuração inicial com instruções do sistema
  useEffect(() => {
    if (user && isChatStarted && messages.length === 0) {
      const systemMessage: Message = {
        role: "system",
        content: `Você é um assistente da Delta Fitness Brazil chamado Delta Bot. Você fornece dicas sobre vestuário esportivo, treinos e motivação para treinar.
        
        Regras importantes:
        1. Seja sempre direto, objetivo e conciso em suas respostas.
        2. Personalize as respostas para ${user.displayName}.
        3. Foque em conteúdo de fitness, treinos e vestuário esportivo.
        4. Responda como um humano, de forma natural e sem formalidade excessiva.
        5. Não use asteriscos, emojis ou símbolos desnecessários nas respostas.
        6. Mantenha respostas curtas, entre 1-3 frases.
        7. Sempre que possível, mencione produtos da linha Delta Run Muscle.
        8. Nunca mencione que você é uma IA, GPT, ou modelo de linguagem.`
      };

      const welcomeMessage: Message = {
        role: "assistant",
        content: `Olá, ${user.displayName}! Sou o Delta Bot, seu assistente da Team Delta. Como posso ajudar com dicas de treino ou sobre a linha Delta Run Muscle hoje?`
      };

      setMessages([systemMessage, welcomeMessage]);
    }
  }, [user, isChatStarted]);

  // Scrollar para o final quando novas mensagens chegarem
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

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
      
      const apiKey = import.meta.env.VITE_GROK_DELTAHUB || process.env.VITE_GROK_DELTAHUB;
      
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
          model: "llama3-8b-8192",
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
      setMessageCount(prev => prev + 1);
    } catch (error) {
      console.error("Error calling Groq API:", error);
      toast.error("Desculpe, não consegui processar sua mensagem. Tente novamente mais tarde.");
      
      setMessages(prev => [
        ...prev.filter(m => m.role !== "system"),
        {
          role: "assistant", 
          content: "Desculpe, estou com dificuldades técnicas no momento. Tente novamente em instantes."
        }
      ]);
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
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
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
                    disabled={isLoading || messageCount >= MAX_MESSAGES}
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    disabled={!input.trim() || isLoading || messageCount >= MAX_MESSAGES}
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
