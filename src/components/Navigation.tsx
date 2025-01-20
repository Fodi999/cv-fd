interface NavigationProps {
    theme: string;
    setActiveSlider: (slider: string | null) => void;
  }
  
  export default function Navigation({ theme, setActiveSlider }: NavigationProps) {
    return (
      <nav className="space-y-8">
        <ul className="list-disc list-inside space-y-6">
          <li>
            <button
              className={`text-lg font-medium uppercase tracking-wider ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              } hover:text-red-600 transition`}
              onClick={() => setActiveSlider("skills")}
            >
              НАВЫКИ
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium uppercase tracking-wider ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              } hover:text-red-600 transition`}
              onClick={() => setActiveSlider("experience")}
            >
              ОПЫТ РАБОТЫ
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium uppercase tracking-wider ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              } hover:text-red-600 transition`}
              onClick={() => setActiveSlider("products")}
            >
              ПРОДУКТЫ
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium uppercase tracking-wider ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              } hover:text-red-600 transition`}
              onClick={() => setActiveSlider("education")}
            >
              ОБРАЗОВАНИЕ
            </button>
          </li>
          <li>
            <button
              className={`text-lg font-medium uppercase tracking-wider ${
                theme === "light" ? "text-gray-600" : "text-gray-400"
              } hover:text-red-600 transition`}
              onClick={() => setActiveSlider("vray")}
            >
              V-RAY
            </button>
          </li>
        </ul>
      </nav>
    );
  }