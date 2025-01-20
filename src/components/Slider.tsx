import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  slides: Slide[];
  currentSlide: number;
  direction: string;
  theme: string;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function Slider({ slides, currentSlide, direction, theme, handlePrev, handleNext }: SliderProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : direction === "next"
              ? "translate-x-full"
              : "-translate-x-full"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: "cover" }}
            priority={index === currentSlide}
          />
          <div className={`absolute inset-0 ${theme === "light" ? "bg-gradient-to-r from-white/80" : "bg-gradient-to-r from-black/80"} z-10 flex flex-col justify-center items-center text-center p-4`}>
            <h1 className={`text-4xl font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{slide.title}</h1>
            <p className={`mt-4 text-lg ${theme === "light" ? "text-black" : "text-white"}`}>{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <Image
          src={theme === "light" ? "/000032.svg" : "/000033.svg"}
          alt="Навигационная иконка"
          width={50}
          height={50}
        />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <Image
          src={theme === "light" ? "/000037.svg" : "/000038.svg"}
          alt="Навигационная иконка"
          width={50}
          height={50}
        />
      </button>
    </div>
  );
}