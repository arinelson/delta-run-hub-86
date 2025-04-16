
import React, { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { 
  CheckCircle2, 
  XCircle, 
  Link, 
  Zap, 
  Info, 
  Trophy, 
  MessageSquare,
  FileImage,
  FileText,
  FileArchive,
  Folder,
  Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BriefingSection: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const tabsRef = useRef<HTMLDivElement>(null);

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

  // Lista de tabs para usar na navegação
  const tabItems = [
    { value: "objetivo", label: "Objetivo" },
    { value: "linha", label: "Sobre a Linha" },
    { value: "conteudo", label: "Conteúdo" },
    { value: "do", label: "Do's" },
    { value: "dont", label: "Don'ts" },
    { value: "personalize", label: "Personalize" },
    { value: "arquivos", label: "Arquivos" },
  ];

  return (
    <Card className="glass-card border-delta-blue-light/30 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold">
          <span className="text-gradient-to-r from-delta-blue-light to-delta-neon">
            Campanha Pré-Venda Delta Run Muscle
          </span>
        </CardTitle>
        <CardDescription>
          Promova a linha Delta Run Muscle e destaque os preços especiais exclusivos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="objetivo" className="w-full" ref={tabsRef}>
          <div className="relative w-full mb-6 overflow-hidden">
            {/* Improved ScrollArea with better overflow handling */}
            <ScrollArea className="w-full pb-4" orientation="horizontal">
              <div className="w-max min-w-full flex">
                <TabsList className="flex w-max px-1 gap-1 h-auto py-1">
                  {tabItems.map((tab) => (
                    <TabsTrigger 
                      key={tab.value} 
                      value={tab.value}
                      className="px-3 py-1.5 text-sm whitespace-nowrap flex-shrink-0 scroll-x-item"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </ScrollArea>
          </div>
          
          {/* Aqui mantemos o conteúdo das tabs, mas vamos otimizá-lo para mobile */}
          <TabsContent value="objetivo" className="space-y-4">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Mensagem-Chave</h3>
                <p className="text-sm sm:text-base">Aproveite os preços incrivelmente abaixo do normal, uma chance imperdível para quem sempre quis aderir ao Team Delta.</p>
                <p className="mt-1 text-xs sm:text-sm font-bold">Essa é a maior linha já lançada pela Delta Fitness Brazil.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Trophy className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Objetivo da Campanha</h3>
                <p className="text-sm sm:text-base">Divulgar a pré-venda da nova linha Delta Run Muscle, destacando preços especiais e promovendo a oportunidade única de fazer parte do Team Delta.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="linha" className="space-y-4">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Propósito da Linha Delta Run Muscle</h3>
                <p className="text-sm sm:text-base">A linha Delta Run Muscle foi criada para atender atletas e amantes de fitness que buscam peças com alta performance, conforto e estilo. Cada peça combina tecnologia inovadora, materiais premium e design moderno, garantindo durabilidade e versatilidade para treinos intensos ou uso casual.</p>
              </div>
            </div>
            
            <div className="my-4">
              <h3 className="text-lg font-semibold mb-2">Características Principais</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                <li>Tecnologia de secagem rápida e respirabilidade para máxima performance.</li>
                <li>Design ergonômico que valoriza o corpo e oferece liberdade de movimento.</li>
                <li>Estilo versátil, perfeito para academia, corridas ou até mesmo looks casuais.</li>
              </ul>
            </div>
            
            <div className="my-4">
              <h3 className="text-lg font-semibold mb-2">Peças da Linha</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                <li><span className="font-medium">Camisetas Performance:</span> Feitas com tecido leve e resistente, ideais para treinos intensos.</li>
                <li><span className="font-medium">Calças e Shorts Atléticos:</span> Design ajustável e bolsos funcionais.</li>
                <li><span className="font-medium">Tops Esportivos:</span> Com suporte reforçado para atividades de alto impacto.</li>
                <li><span className="font-medium">Jaquetas e Casacos:</span> Perfeitos para dias frios, com proteção contra vento e umidade.</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="conteudo" className="space-y-4">
            <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10 border border-delta-neon/30">
              <h3 className="text-lg font-semibold text-delta-neon mb-2">Seu Link Personalizado</h3>
              <div className="flex items-center gap-3">
                <code className="bg-black/30 px-3 py-2 rounded flex-1 font-mono text-delta-neon text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
                  {user?.personalLink}
                </code>
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

            <div className="flex items-start space-x-3">
              <MessageSquare className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Foco Principal: Stories</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Publique Stories mostrando a prévia das peças da linha Delta Run Muscle.</li>
                  <li>Use seu link personalizado, que direcionará os interessados diretamente ao WhatsApp da Delta Fitness Brazil com sua identificação.</li>
                  <li>Inclua um call-to-action claro, como: <br />
                    <div className="mt-2 p-3 bg-black/30 rounded-lg">
                      "Essa é a sua chance de fazer parte do Team Delta com condições exclusivas! Corre lá no meu link e garanta sua peça antes de todo mundo: <span className="text-delta-neon">{user?.personalLink}</span>"
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">BÔNUS: Reels (Opcional)</h3>
                <p>Se quiser se destacar ainda mais, crie um Reel criativo mostrando as peças em ação (ex.: durante um treino, em um dia casual, etc.).</p>
                <p className="mt-2">Exemplo de ideias criativas:</p>
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>"Quem vai garantir a peça antes de mim?"</li>
                  <li>Desafios ou teasers mostrando como as peças combinam com diferentes estilos de vida.</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="do" className="space-y-3">
            <h3 className="text-lg font-semibold text-center mb-2">O QUE FAZER (OBRIGATÓRIO)</h3>
            
            <div className="space-y-4">
              {[
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
              ].map((item, index) => (
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
          
          <TabsContent value="dont" className="space-y-3">
            <h3 className="text-lg font-semibold text-center mb-2">O QUE NÃO FAZER</h3>
            
            <div className="space-y-4">
              {[
                {
                  title: "Não esqueça o link personalizado",
                  desc: "Publicações sem o link não serão contabilizadas e podem prejudicar sua performance na campanha."
                },
                {
                  title: "Não divulgue preços específicos",
                  desc: "Evite mencionar valores exatos dos produtos. Apenas reforce que estão \"muito abaixo do normal\" ou \"imperdíveis\"."
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
              ].map((item, index) => (
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
          
          <TabsContent value="personalize">
            <h3 className="text-lg font-semibold text-center mb-4">O QUE VOCÊ PODE AJUSTAR OU PERSONALIZAR</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10">
                <h4 className="font-medium text-delta-neon mb-2">Estilo do conteúdo</h4>
                <p className="text-sm">O tom e o formato (vídeo, foto, carrossel, stories, etc.) podem ser adaptados ao seu estilo pessoal e à preferência do seu público.</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10">
                <h4 className="font-medium text-delta-neon mb-2">Horário de postagem</h4>
                <p className="text-sm">Escolha o melhor horário para engajamento com base no comportamento do seu público.</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10">
                <h4 className="font-medium text-delta-neon mb-2">Exemplos de frases</h4>
                <p className="text-sm">Personalize as legendas ou scripts dos vídeos, desde que mantenham a mensagem-chave da campanha.</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-br from-delta-blue/20 to-delta-neon/10">
                <h4 className="font-medium text-delta-neon mb-2">Ideias criativas (Reels)</h4>
                <p className="text-sm">Sinta-se à vontade para criar desafios, teasers ou dinâmicas próprias para engajar ainda mais seus seguidores.</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg border border-delta-neon/30">
              <p className="text-center font-medium mb-2">Lembre-se:</p>
              <p className="text-center">Essa campanha é uma parceria! Quanto mais você se dedicar a seguir essas diretrizes e usar sua criatividade dentro delas, maior será o impacto e o sucesso da pré-venda. 💪</p>
            </div>
            
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm font-medium mb-1">E-mail para dúvidas:</p>
                  <a href="mailto:contato@deltafitness.com" className="text-delta-neon hover:underline text-sm flex items-center">
                    <Link className="h-3 w-3 mr-1" />
                    contato@deltafitness.com
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-medium mb-1">WhatsApp:</p>
                  <a href="https://wa.me/5500000000000" className="text-delta-neon hover:underline text-sm flex items-center">
                    <Link className="h-3 w-3 mr-1" />
                    (00) 00000-0000
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="arquivos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Convertendo em um carousel para visualização mobile melhorada */}
              {isMobile ? (
                <Carousel className="w-full">
                  <CarouselContent>
                    {[
                      {
                        icon: FileImage,
                        title: "Imagens das Peças",
                        links: [
                          { href: "#", text: "Lookbook Delta Run Muscle" },
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
                    ].map((item, idx) => (
                      <CarouselItem key={idx}>
                        <Card className="p-4 hover:bg-white/5 transition-colors h-full">
                          <div className="flex items-start space-x-3">
                            <item.icon className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                              <ul className="space-y-2">
                                {item.links.map((link, linkIdx) => (
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
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-4">
                    <CarouselPrevious className="static translate-y-0 left-0" />
                    <CarouselNext className="static translate-y-0 right-0" />
                  </div>
                </Carousel>
              ) : (
                /* ... keep existing code (desktop grid layout for file sections) */
                <>
                  <Card className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start space-x-3">
                      <FileImage className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Imagens das Peças</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Lookbook Delta Run Muscle</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Fotos Lifestyle</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Fotos Detalhes Técnicos</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Informações Técnicas</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Catálogo Completo</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Especificações dos Tecidos</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Guia de Medidas</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start space-x-3">
                      <Folder className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Materiais de Apoio</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Sugestões de Legendas</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Templates Stories</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Músicas Sugeridas</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-start space-x-3">
                      <FileArchive className="h-6 w-6 text-delta-neon mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Arquivos de Suporte</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Kit de Mídia Completo</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Vídeos de Apoio</a>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Link className="h-4 w-4" />
                            <a href="#" className="text-delta-neon hover:underline">Briefing em PDF</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </>
              )}
            </div>

            <div className="mt-6 p-4 rounded-lg border border-delta-neon/30">
              <p className="text-center text-xs sm:text-sm">
                Todos os arquivos são de uso exclusivo para influenciadores do Team Delta.
                Não compartilhe estes materiais com terceiros.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BriefingSection;
