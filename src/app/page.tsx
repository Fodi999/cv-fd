"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sun, Moon, Mail } from "lucide-react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const images = [
    { src: "/000034.jpg", alt: "Zdjęcie 1" },
    { src: "/000029.jpg", alt: "Zdjęcie 2" },
    { src: "/000027.jpg", alt: "Zdjęcie 3" },
  ];

  const mailtoLink = "mailto:fodi85999@gmail.com?subject=Witaj&body=Cześć, jak się masz?";

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black flex flex-col items-center p-4 sm:p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 sm:p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
          <Image src="/feis 1.png" alt="Logo" className="rounded-full" width={80} height={80} />
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Label htmlFor="theme-switch">Ciemny motyw</Label>
            <Switch checked={isDarkMode} onCheckedChange={() => setIsDarkMode(!isDarkMode)} />
            {isDarkMode ? <Moon className="w-5 h-5 text-gray-300" /> : <Sun className="w-5 h-5 text-yellow-500" />}
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-4 sm:mb-6 font-bebas-neue">DMYTRO FOMIN</h1>
        <p className="text-gray-700 dark:text-gray-300 text-center text-base sm:text-lg mb-2 font-bebas-neue">80-631 GDAŃSK</p>
        <p className="text-gray-700 dark:text-gray-300 text-center text-base sm:text-lg mb-2 font-bebas-neue">UL. WILHELMA STRYJEWSKIEGO 39A/21</p>
        <p className="text-gray-700 dark:text-gray-300 text-center text-base sm:text-lg mb-2 font-bebas-neue">
          +48 576 212 418 | 
          <a href={mailtoLink} className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            fodi85999@gmail.com
          </a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center text-base sm:text-lg mb-4 font-bebas-neue">
          <a href="https://instagram.com/fodifood" className="text-pink-600 dark:text-pink-400 hover:underline">Instagram: @fodifood</a>
        </p>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4 font-bebas-neue">Sprawozdanie z badań</h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 font-bebas-neue">Nr. 17061/562/2023</p>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4 font-bebas-neue">Umiejętności</h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 font-bebas-neue">
              <li>Celowy, towarzyski, odporny na stres, pomysłowy</li>
              <li>Dużo wiem i rozumiem o produktach</li>
              <li>Opracowuję także nowe produkty</li>
              <li>Szkolę ludzi w zakresie prawidłowej pracy z produktami</li>
            </ul>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4 font-bebas-neue">Staż pracy</h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md space-y-4">
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4 font-bebas-neue">
              <li>20 lat Pracował za granicą w restauracjach w innych krajach: Polsce, Litwie, Estonii, Niemczech, Francji, Kanadzie.</li>
              <li>
                <strong>Firma FISH in HOUSE</strong> (Dniepr, Szef Kuchni, 10 czerwca 2018 r. – 1.06.2022)
                <ul className="ml-4 list-disc list-inside space-y-2">
                  <li>Opracowywanie nowych produktów</li>
                  <li>Badanie jakości i zwiększanie trwałości</li>
                  <li>Zakup urządzeń do procesów produkcyjnych</li>
                  <li>Szkolenie personelu, HACCP, konfiguracja procesów produkcyjnych</li>
                </ul>
                <p><a href="https://instagram.com/fish_in_house" className="text-blue-600 dark:text-blue-400 hover:underline">Instagram: @fish_in_house</a></p>
              </li>
              <li>
                <strong>Restauracja Autorska, Miod Malina Polska</strong> (Zgorzelec, Kucharz, 1 maja 2017 r. - 20 maja 2018 r.)
                <p><a href="https://instagram.com/miodmalinyzgorzelec" className="text-blue-600 dark:text-blue-400 hover:underline">Instagram: @miodmalinyzgorzelec</a></p>
              </li>
              <li>
                <strong>Francja, miasto Agde, Restauracja Charlemagne</strong> (Kucharz - owoce morza, 10.06.2022 - 16.11.2022)
                <p><a href="https://instagram.com/bar_charlemagne" className="text-pink-600 dark:text-pink-400 hover:underline">Instagram: @bar_charlemagne</a></p>
              </li>
              <li>
                <strong>Kanada, Montreal, Boulangerie Patisserie WAWEL</strong> (Kucharz, 1.12.2022 - 1.08.2023)
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4 font-bebas-neue">Edukacja</h2>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 font-bebas-neue">
              Dyplomowany kucharz. Instytucja edukacyjna, Ukraina, Dniepr-Zawodowa Szkoła Techniczna-53
              <br />
              1 września 2002 - 31 maja 2003 Ukończył studia z wyróżnieniem, odbył staż w restauracji Charlie&apos;s
            </p>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 border-b-2 border-gray-300 dark:border-gray-600 pb-2 mb-4 font-bebas-neue">Galeria</h2>
          <Carousel className="relative">
            <CarouselContent className="flex">
              {images.map((image, index) => (
                <CarouselItem key={index} className="relative w-full h-64 sm:h-80 lg:h-96">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-opacity" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition-opacity" />
          </Carousel>
        </section>
      </div>
    </div>
  );
}

