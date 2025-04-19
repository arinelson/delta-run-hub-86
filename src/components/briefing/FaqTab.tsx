
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
      answer: "Todo o material está disponível na seção 'Arquivos' do dashboard ou você pode baixar ele de forma completa em 'Arquivos de Suporte' em 'Briefing em PDF'. Recomendamos que baixe ele no seu dispositivo para acessar offline, caso seja necessário. Caso tenha problemas para acessar algum arquivo específico, entre em contato conosco pelo WhatsApp."
    },
    {
      question: "Até quando posso divulgar a pré-venda?",
      answer: "A fase de pré-venda vai até o dia 28 do mês de Abril. Após esta data, os preços voltarão ao normal e todas as peças estarão disponíveis na loja online oficial após as peças chegarem. Contudo, mesmo sem a pré-venda da Linha Run você pode continuar divulgando seu link para necessidades de compra na Delta Fitness"
    },
    {
      question: "Por que estão fazendo uma campanha se nao tem as peças em mãos ainda?",
      answer: "Embora isso possa soar uma boa objeção, mas o objetivo da Pré-venda é justamente gerar desejo prévio antes das peças chegarem À essa altura do branding da marca, podemos fazer isso sem prejudicar a experiência do usuário porque temos know-how do que estamos fazendo e a estratégia foi redesenhada com essa campanha fugaz."
    },
    {
      question: "Posso usar minhas próprias fotos das peças?",
      answer: "Mesmo que você esteja divulgando a pré-venda da Linha Run, isto é, peças que não estão no estoque disponível mas com oportunidade exclusiva de adquirí-las antes de todo mundo, é recomendável que você esteja usando qualquer peça da Delta Fitness Brazil quando você estiver aparecendo nos stories."
    },
    {
      question: "O que acontece se alguém comprar pelo meu link mas não mencionar meu nome?",
      answer: "Não se preocupe! O sistema rastreia automaticamente todas as vendas feitas através do seu link personalizado, porque ele foi feito configurado previamente com o seu nome."
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
      question: "E se eu perder a senha para entrar aqui?",
      answer: "Para evitar isso, salve-a em um lugar seguro, mas caso seja inevitável entre em contato com o suporte imediatamente."
    },

    {
      question: "Qual é a vantagem da pessoa usar o meu link?",
      answer: "Para esta campanha seria obter 10% de desconto em qualquer compra na Delta Fitness Brazil."
    },
    {
      question: "Posso recomendar o site?",
      answer: "Embora o site esteja funcionando, mas ele está passando por remodelagens de design, então criamos esta camapanha para levar, exclusivamente, para o WhatsApp com o seu link personalizado com o objetivo de obter um maior controle sobre a interação da campanha. Dito isso, recomendamos que não leve ainda para o site se o objetivo for a compra final."
    },

    {
      question: "É obrigatório fazer campanha apenas no Instagram??",
      answer: "Absolutamente não. Embora seja o canal com maior visibilidade mas você pode usar qualquer outro meio para divulgar o seu link, seja TikTok, Pinterest, Facebook e afins, ou grupos de WhatsApp que você esteja inserido e adapte a sua estratégia pra cada canal de comunicação. Assim como também autorizamos fazer prospecção ativa com amigos, familiares ou pessoas que podem se interessar pelas peças da Delta Fitness Brazil. Apenas não recomendamos fazer spam em nenhum deles"
    },
  {
      question: "Como devo fazer a campanha nos Stories se não teve nenhum exemplo de como poderia ser feito?",
      answer: "Valorizamos muito a individualidade de cada influencer e por isso foi decidido não exigir muitos pontos, apenas o essencial do que deveria ter, que você pode conferir na seção DO e DONT. Todavia, adaptamos para cada influencer ficar livre para usar nos seus conteúdos fitness com a percepção da própria audiência."
    },
   {
      question: "Caso o meu link pare de funcionar durante a campanha, o que devo fazer?",
      answer: (
        <>
          Caso seja uma decisão rápida, você pode usar um gerador de mensagem personalizada para o WhatsApp {' '}
          <a href="https://whatsgeneratorlink.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            (clique aqui). 
          </a>
          E dentro desse gerador você insiraria o número 558293460460 e criaria uma mensagem personalizada informando seu CUPOM (como mostra na imagem abaixo). E logo em seguida você geraria e copiaria o link abaixo e usaria de volta na sua campanha (dica bônus: ao gerar esse link você poderia usar um encurtador de links como bitly para simplificar mais). E na pior das hipóteses, você entraria em contato com o suporte no WhatsApp.
          {/* Inserindo a imagem */}
      <div className="mt-4 flex justify-center">
        <img 
          src="/ariwhats.gif" 
          alt="Exemplo de como criar mensagem personalizada" 
          className="max-w-full h-auto rounded-lg border border-delta-neon/20 shadow-md"
        />
      </div>
        </>
      ),
    },
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
          href="https://wa.me/558293460460?text=Queria%20tirar%20d%C3%BAvidas%20sobre%20o%20https%3A%2F%2Fdeltarunmuscle.netlify.app%2F%20%20%F0%9F%92%AA%F0%9F%96%A4." 
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
