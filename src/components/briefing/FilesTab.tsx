
import React, { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Link, FileImage, FileText, Folder, FileArchive, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQAccordion from "./FAQAccordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FileSection {
  icon: React.ElementType;
  title: string;
  links: { href: string; text: string }[];
}

const FilesTab: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<string>("files");

  const fileSections: FileSection[] = [
    {
      icon: FileImage,
      title: "Imagens das Peças",
      links: [
        { href: "https://docs.google.com/document/d/143-yMwNpq41vhiNq9g4ZFUyCKRyUZ12J-4rA2xvDUlc/edit?usp=sharing", text: "Lookbook Delta Run Muscle", target: "_blank" },
        { href: "#", text: "Fotos Lifestyle" },
        { href: "#", text: "Fotos Detalhes Técnicos" }
      ]
    },
    {
      icon: FileText,
      title: "Informações Técnicas",
      links: [
        { href: "#", text: "Catálogo Completo" },
        { href: "#", text: "Especificações dos Tecidos" },
        { href: "#", text: "Guia de Medidas" }
      ]
    },
    {
      icon: Folder,
      title: "Materiais de Apoio",
      links: [
        { href: "#", text: "Sugestões de Legendas" },
        { href: "#", text: "Templates Stories" },
        { href: "#", text: "Músicas Sugeridas" }
      ]
    },
    {
      icon: FileArchive,
      title: "Arquivos de Suporte",
      links: [
        { href: "#", text: "Kit de Mídia Completo" },
        { href: "#", text: "Vídeos de Apoio" },
        { href: "#", text: "Briefing em PDF" }
      ]
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Como faço para acessar o material completo da campanha?",
      answer: "Todo o material está disponível na seção 'Arquivos' do dashboard. Caso tenha problemas para acessar algum arquivo específico, entre em contato conosco pelo WhatsApp."
    },
    {
      question: "Até quando posso divulgar a pré-venda?",
      answer: "A fase de pré-venda vai até o dia 30 do mês corrente. Após esta data, os preços voltarão ao normal e todas as peças estarão disponíveis na loja online oficial."
    },
    {
      question: "Como recebo minha comissão pelas vendas?",
      answer: "As comissões são calculadas com base nas vendas realizadas através do seu link personalizado. Os pagamentos são processados todo dia 10 do mês seguinte às vendas."
    },
    {
      question: "Posso usar minhas próprias fotos das peças?",
      answer: "Sim! Incentivamos que você mostre as peças da forma mais autêntica possível. Se você já recebeu alguma peça da coleção, pode criar conteúdos originais seguindo as diretrizes de marca no briefing."
    },
    {
      question: "O que acontece se alguém comprar pelo meu link mas não mencionar meu nome?",
      answer: "Não se preocupe! O sistema rastreia automaticamente todas as vendas feitas através do seu link personalizado, independentemente de mencionarem seu nome ou não."
    },
    {
      question: "Por quanto tempo devo manter os Stories no ar?",
      answer: "Recomendamos manter os Stories por pelo menos 24 horas e fixá-los nos destaques do seu perfil durante todo o período da campanha para maximizar a visibilidade."
    },
    {
      question: "Posso oferecer descontos adicionais aos meus seguidores?",
      answer: "Não. Os preços promocionais da pré-venda já são exclusivos e não podem ser alterados. Oferecer descontos adicionais não autorizados pode resultar no cancelamento da sua participação na campanha."
    },
    {
      question: "Quais hashtags devo usar nas publicações?",
      answer: "Recomendamos sempre usar as hashtags #TeamDelta #DeltaRunMuscle #PréVendaDelta em todas as suas publicações relacionadas à campanha."
    },
    {
      question: "Posso divulgar outras marcas junto com a Delta Run Muscle?",
      answer: "Não recomendamos a divulgação simultânea de outras marcas de vestuário fitness no mesmo conteúdo da campanha Delta Run Muscle para evitar confusão entre os seus seguidores."
    },
    {
      question: "Como posso verificar o status das minhas vendas?",
      answer: "Em breve disponibilizaremos um painel de performance onde você poderá acompanhar em tempo real todas as suas vendas e comissões. Por enquanto, enviaremos relatórios semanais por e-mail."
    }
  ];

  const FileCard = ({ section }: { section: FileSection }) => {
    const Icon = section.icon;
    
    return (
      <Card className="p-4 hover:bg-white/5 transition-colors h-full">
        <div className="flex items-start space-x-3">
          <Icon className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx} className="flex items-center space-x-2">
                  <Link className="h-4 w-4" />
                  <a href={link.href} className="text-delta-neon hover:underline text-sm">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <TabsContent value="arquivos" className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-4">
          <TabsList>
            <TabsTrigger value="files" className="px-4">
              Arquivos
            </TabsTrigger>
            <TabsTrigger value="faq" className="px-4">
              FAQ
            </TabsTrigger>
          </TabsList>
        </div>

        {activeTab === "files" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isMobile ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {fileSections.map((section, idx) => (
                    <CarouselItem key={idx}>
                      <FileCard section={section} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0 left-0" />
                  <CarouselNext className="static translate-y-0 right-0" />
                </div>
              </Carousel>
            ) : (
              <>
                {fileSections.map((section, idx) => (
                  <FileCard key={idx} section={section} />
                ))}
              </>
            )}
          </div>
        )}

        {activeTab === "faq" && (
          <div className="space-y-6">
            <div className="bg-delta-blue-light/10 backdrop-blur-sm border border-delta-neon/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-center">Perguntas Frequentes</h3>
              <p className="text-sm text-center mb-4">
                Encontre respostas para as dúvidas mais comuns sobre a campanha Delta Run Muscle
              </p>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        )}
      </Tabs>

      <div className="mt-6 flex flex-col items-center">
        <p className="text-center text-sm mb-4">Não encontrou resposta para sua dúvida?</p>
        <a 
          href="https://wa.me/5500000000000?text=Olá!%20Sou%20influencer%20do%20Team%20Delta%20e%20tenho%20uma%20dúvida%20sobre%20a%20campanha." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto"
        >
          <Button 
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-delta-neon border-none text-delta-black font-semibold hover:from-green-400 hover:to-delta-neon-light transition-all shadow-[0_0_15px_rgba(0,245,255,0.5)]"
          >
            <MessageCircleQuestion className="h-5 w-5" />
            Fale Conosco no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>

      <div className="mt-6 p-4 rounded-lg border border-delta-neon/30">
        <p className="text-center text-xs sm:text-sm">
          Todos os arquivos são de uso exclusivo para influenciadores do Team Delta.
          Não compartilhe estes materiais com terceiros.
        </p>
      </div>
    </TabsContent>
  );
};

export default FilesTab;
