"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Contacts from "@/components/Contacts";
import Slider from "@/components/Slider";

const slides = [
  {
    id: 1,
    title: "V-RAY",
    description: "Профессиональный рендеринг с V-Ray.",
    image: "/000027.jpg",
  },
  {
    id: 2,
    title: "НАВЫКИ",
    description: "Описание навыков.",
    image: "/000029.jpg",
  },
  {
    id: 3,
    title: "ОПЫТ РАБОТЫ",
    description: "Описание опыта работы.",
    image: "/000035.jpg",
  },
  {
    id: 4,
    title: "ПРОДУКТЫ",
    description: "Описание продуктов.",
    image: "/000036.jpg",
  },
  {
    id: 5,
    title: "ОБРАЗОВАНИЕ",
    description: "Описание образования.",
    image: "/000030.jpg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const [theme, setTheme] = useState("light");
  const [activeSlider, setActiveSlider] = useState<string | null>(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handlePrev = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  const getSlides = () => {
    switch (activeSlider) {
      case "skills":
        return [slides[1]];
      case "experience":
        return [slides[2]];
      case "products":
        return [slides[3]];
      case "education":
        return [slides[4]];
      case "vray":
        return [slides[0]];
      default:
        return slides;
    }
  };

  return (
    <div className={`min-h-screen grid grid-cols-12 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      {/* Левая навигация */}
      <div className={`col-span-3 border-r border-red-500 p-8 flex flex-col justify-between relative`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Navigation theme={theme} setActiveSlider={setActiveSlider} />
        <Contacts theme={theme} />
      </div>

      {/* Правая часть */}
      <div className="col-span-9 relative overflow-hidden">
        <Slider slides={getSlides()} currentSlide={currentSlide} direction={direction} theme={theme} handlePrev={handlePrev} handleNext={handleNext} />
      </div>
    </div>
  );
}
