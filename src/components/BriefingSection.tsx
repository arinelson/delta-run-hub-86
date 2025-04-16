
import React, { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";

// Import refactored tab components
import TabsList, { TabItem } from "@/components/briefing/TabsList";
import ObjectiveTab from "@/components/briefing/ObjectiveTab";
import AboutLineTab from "@/components/briefing/AboutLineTab";
import ContentTab from "@/components/briefing/ContentTab";
import DosTab from "@/components/briefing/DosTab";
import DontsTab from "@/components/briefing/DontsTab";
import PersonalizeTab from "@/components/briefing/PersonalizeTab";
import FilesTab from "@/components/briefing/FilesTab";

const BriefingSection: React.FC = () => {
  const { user } = useAuth();
  const tabsRef = useRef<HTMLDivElement>(null);

  // Lista de tabs para usar na navegação
  const tabItems: TabItem[] = [
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
          Promover a linha Delta Run Muscle e destacar o propósito exclusivo da Linha e os preços especiais exclusivos 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="objetivo" className="w-full" ref={tabsRef}>
          <TabsList tabItems={tabItems} />
          
          {/* Import individual tab content components */}
          <ObjectiveTab />
          <AboutLineTab />
          <ContentTab />
          <DosTab />
          <DontsTab />
          <PersonalizeTab />
          <FilesTab />
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BriefingSection;
