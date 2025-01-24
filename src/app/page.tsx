"use client";

import SectionWithImage from "@/components/SectionWithImage";
import AboutMeContent from "@/components/content/AboutMeContent";
import WebflowContent from "@/components/content/WebflowContent";
import ContactMeContent from "@/components/content/ContactMeContent";
import AdvancedServicesContent from "@/components/content/AdvancedServicesContent";
import sectionsData from "@/language/en/pagesections.json";

const contentComponents: { [key: string]: React.ComponentType } = {
  AboutMeContent,
  WebflowContent,
  ContactMeContent,
  AdvancedServicesContent,
};

export default function Home() {
  return (
    <div className="p-6 transition-colors">
      {/* Сетка секций */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionsData.sections.map((section) => {
          const ContentComponent = contentComponents[section.contentComponent as keyof typeof contentComponents];
          return (
            <div key={section.id} id={section.id} className="break-inside-avoid">
              <SectionWithImage
                title={section.title}
                imageUrl={section.imageUrl}
                buttonText={section.buttonText}
                ContentComponent={ContentComponent}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
