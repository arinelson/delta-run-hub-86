
import React from "react";
import { TabsList as ShadcnTabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export type TabItem = {
  value: string;
  label: string;
};

interface TabsListProps {
  tabItems: TabItem[];
}

const TabsList: React.FC<TabsListProps> = ({ tabItems }) => {
  return (
    <div className="relative w-full mb-6 overflow-hidden">
      <ScrollArea className="w-full pb-4" orientation="horizontal">
        <div className="w-max min-w-full flex">
          <ShadcnTabsList className="flex w-max px-1 gap-1 h-auto py-1">
            {tabItems.map((tab) => (
              <TabsTrigger 
                key={tab.value} 
                value={tab.value}
                className="px-3 py-1.5 text-sm whitespace-nowrap flex-shrink-0 scroll-x-item"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </ShadcnTabsList>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TabsList;
