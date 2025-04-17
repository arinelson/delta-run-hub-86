
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "./FAQAccordion";

const FaqTab: React.FC = () => {
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

  return (
    <TabsContent value="faq" className="space-y-6">
      <div className="space-y-6">
        <div className="bg-delta-blue-light/10 backdrop-blur-sm border border-delta-neon/20 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3 text-center">Perguntas Frequentes</h3>
          <p className="text-sm text-center mb-4">
            Encontre respostas para as dúvidas mais comuns sobre a campanha Delta Run Muscle
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </div>

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
          Se tiver dúvidas adicionais, nossa equipe está pronta para ajudar você
          a ter sucesso nesta campanha.
        </p>
      </div>
    </TabsContent>
  );
};

export default FaqTab;
