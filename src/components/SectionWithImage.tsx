"use client";

import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface SectionProps {
  title: string;
  imageUrl: string;
  buttonText?: string;
  ContentComponent: React.ComponentType; // Компонент контента для Drawer
}

const SectionWithImage: React.FC<SectionProps> = ({
  title,
  imageUrl,
  buttonText = "Open Drawer",
  ContentComponent,
}) => {
  return (
    <section className="relative h-60 md:h-72 lg:h-96 rounded-lg overflow-hidden shadow-md group">
      {/* Фото на заднем плане */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        style={{ objectFit: "cover" }}
        className="rounded-lg group-hover:scale-110 transition-transform duration-300"
      />

      {/* Текст и кнопка внизу */}
      <div className="absolute inset-x-0 bottom-0 bg-black/40 p-4 flex items-center justify-between text-white">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>

        {/* Кнопка, открывающая Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="bg-white text-black hover:bg-gray-200">
              {buttonText}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerDescription>Описание содержимого</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <ContentComponent />
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary" className="w-full">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
};

export default SectionWithImage;
