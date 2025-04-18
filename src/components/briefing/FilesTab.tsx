
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Link, FileImage, FileText, Folder, FileArchive } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
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
  links: { href: string; text: string; target?: string }[];
}

const FilesTab: React.FC = () => {
  const isMobile = useIsMobile();

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
        { href: "https://docs.google.com/document/d/143-yMwNpq41vhiNq9g4ZFUyCKRyUZ12J-4rA2xvDUlc/edit?usp=sharing", text: "Briefing em PDF", target: "_blank" }
      ]
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
                  <a href={link.href} target={link.target} className="text-delta-neon hover:underline text-sm">
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
