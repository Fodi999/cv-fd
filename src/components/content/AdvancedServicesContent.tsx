"use client";

import React from "react";
import Image from "next/image";
import sectionsContent from "@/language/en/aboutMeContent.json";

interface Section {
  id: string;
  title: string;
  imageUrl?: string;
  description: string;
  buttonText?: string;
}

const advancedServicesContent: Section | undefined = sectionsContent.sections.find(
  (section: Section) => section.id === "advanced-services"
);

const AdvancedServicesContent = () => {
  if (!advancedServicesContent) return null;

  return (
    <div id={advancedServicesContent.id} className="flex flex-col items-center p-4 text-center sm:p-6 md:flex-row md:text-left md:gap-8 lg:gap-12">
      {/* Фото */}
      {advancedServicesContent.imageUrl && (
        <div className="relative w-full h-48 sm:h-64 md:w-1/2 lg:h-80 rounded-lg overflow-hidden shadow-md">
          <Image
            src={advancedServicesContent.imageUrl}
            alt={advancedServicesContent.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      )}

      {/* Текстовый блок */}
      <div className="flex flex-col justify-center gap-4 mt-4 md:mt-0 md:w-1/2">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400">
          {advancedServicesContent.description}
        </p>
      </div>
    </div>
  );
};

export default AdvancedServicesContent;
