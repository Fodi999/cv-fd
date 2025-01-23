"use client";

import React from "react";
import Image from "next/image";
import Modal from "../components/ui/modal";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Sun, Moon } from "lucide-react";
import { useHomeLogic } from "./hooks/useHomeLogic";

const Home = () => {
  const {
    isModalOpen,
    modalContent,
    isDarkMode,
    openModal,
    closeModal,
    setIsDarkMode,
  } = useHomeLogic();

  return (
    <div className={`min-h-screen p-4 sm:p-8 font-sans ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-end mb-4 items-center">
        <Label htmlFor="theme-switch" className="mr-2">Dark Mode</Label>
        <Switch id="theme-switch" checked={isDarkMode} onCheckedChange={() => setIsDarkMode(!isDarkMode)} />
        <div className="ml-2">
          {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalContent}
        </Modal>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
        {/* Information Section */}
        <div className={`p-4 sm:p-6 rounded-md cursor-pointer ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`} onClick={() => openModal(
          <div className={`p-4 sm:p-6 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">80-631 GDANSK</h3>
            <p className="mb-2">WILHELMA STRиеВСКОГО 39A/21</p>
            <p className="mb-2">DMITRY FOMIN</p>
            <p className="mb-2">+48576212418</p>
            <p className="mb-2">E-mail: <a href="mailto:fodi85999@gmail.com" className="text-blue-400">fodi85999@gmail.com</a></p>
            <p className="mb-2">Instagram: <a href="https://instagram.com/" className="text-blue-400">https://instagram.com/</a></p>
            <p className="mb-2">Foodfood</p>
            <p>Test report No. 17061/562/2023</p>
          </div>
        )}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">80-631 GDANSK</h3>
          <p className="mb-2">WILHELMA STRиеВСКОГО 39A/21</p>
          <p className="mb-2">DMITRY FOMIN</p>
          <p className="mb-2">+48576212418</p>
          <p className="mb-2">E-mail: <a href="mailto:fodi85999@gmail.com" className="text-blue-400">fodi85999@gmail.com</a></p>
          <p className="mb-2">Instagram: <a href="https://instagram.com/" className="text-blue-400">https://instagram.com/</a></p>
          <p className="mb-2">Foodfood</p>
          <p>Test report No. 17061/562/2023</p>
        </div>

        {/* Photo Section */}
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000027.jpg" alt="Photo 1" className="rounded-md" width={600} height={400} priority />
            <p className="text-center mt-4">80-631 GDANSK</p>
          </div>
        )}>
          <Image src="/000027.jpg" alt="Photo 1" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={600} height={400} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">80-631 GDANSK</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000029.jpg" alt="Photo 2" className="rounded-md" width={400} height={300} priority />
            <p className="text-center mt-4">WILHELMA STRиеВСКОГО 39A/21</p>
          </div>
        )}>
          <Image src="/000029.jpg" alt="Photo 2" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={400} height={300} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">WILHELMA STRиеВСКОГО 39A/21</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000034.jpg" alt="Photo 3" className="rounded-md" width={500} height={350} priority />
            <p className="text-center mt-4">DMITRY FOMIN</p>
          </div>
        )}>
          <Image src="/000034.jpg" alt="Photo 3" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={500} height={350} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">DMITRY FOMIN</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000029.jpg" alt="Photo 4" className="rounded-md" width={600} height={400} priority />
            <p className="text-center mt-4">+48576212418</p>
          </div>
        )}>
          <Image src="/000029.jpg" alt="Photo 4" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={600} height={400} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">+48576212418</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000029.jpg" alt="Photo 5" className="rounded-md" width={400} height={300} />
            <p className="text-center mt-4">E-mail: fodi85999@gmail.com</p>
          </div>
        )}>
          <Image src="/000029.jpg" alt="Photo 5" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={400} height={300} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">E-mail: fodi85999@gmail.com</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000027.jpg" alt="Photo 6" className="rounded-md" width={500} height={350} priority />
            <p className="text-center mt-4">Instagram: https://instagram.com/</p>
          </div>
        )}>
          <Image src="/000027.jpg" alt="Photo 6" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={500} height={350} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">Instagram: https://instagram.com/</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000034.jpg" alt="Photo 7" className="rounded-md" width={600} height={400} priority />
            <p className="text-center mt-4">Foodfood</p>
          </div>
        )}>
          <Image src="/000034.jpg" alt="Photo 7" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={600} height={400} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">Foodfood</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000034.jpg" alt="Photo 8" className="rounded-md" width={400} height={300} priority />
            <p className="text-center mt-4">Test report No. 17061/562/2023</p>
          </div>
        )}>
          <Image src="/000034.jpg" alt="Photo 8" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={400} height={300} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">Test report No. 17061/562/2023</p>
        </div>
        <div className="relative group cursor-pointer" onClick={() => openModal(
          <div>
            <Image src="/000034.jpg" alt="Photo 9" className="rounded-md" width={500} height={350} priority />
            <p className="text-center mt-4">Описание фото 9</p>
          </div>
        )}>
          <Image src="/000034.jpg" alt="Photo 9" className="rounded-md filter grayscale group-hover:filter-none transition duration-300" width={500} height={350} priority />
          <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 rounded-md group-hover:opacity-0 transition duration-300">Описание фото 9</p>
        </div>

        {/* Skills Section */}
        <div className={`p-4 sm:p-6 rounded-md cursor-pointer ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`} onClick={() => openModal(
          <div className={`p-4 sm:p-6 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'}`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">SKILLS</h3>
            <p>Goal-oriented, sociable, stress-resistant, resourceful. A lot I know and understand about products. I also develop new products and training people in the field of correct work with products.</p>
          </div>
        )}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">SKILLS</h3>
          <p>Goal-oriented, sociable, stress-resistant, resourceful. A lot I know and understand about products. I also develop new products and training people in the field of correct work with products.</p>
        </div>

        {/* Experience Section */}
        <div className={`p-4 sm:p-6 rounded-md cursor-pointer ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black'}`} onClick={() => openModal(
          <div className={`p-4 sm:p-6 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-400 text-black'}`}>
            <h3 className="text-xl sm:text-3xl font-bold mb-4">EXPERIENCE</h3>
            <p>20 years of work abroad in restaurants in other countries:</p>
            <ul className="list-disc list-inside">
              <li>Poland, Lithuania, Estonia, Germany, France, Canada</li>
              <li>FISH in HOUSE Company: <a href="https://instagram.com/fish_in" className="text-blue-400">https://instagram.com/fish_in</a></li>
              <li>Dnepr house, Chef (June 2018 – June 2022): Development of new products, quality control, increasing durability, purchasing equipment for production processes. Sales volumes. Staff training, setting up the HACCP process production.</li>
              <li>Author&apos;s restaurant, Honey Raspberry Poland, Zgorzelec - cook (May 2017 – May 2018): <a href="https://instagram.com/miodmalinyzgorzelec" className="text-blue-400">https://instagram.com/miodmalinyzgorzelec</a></li>
              <li>France, Agde, Charlemagne restaurant. Cook - seafood (June 2022 – November 2022): <a href="https://instagram.com/bar_charlemagne" className="text-blue-400">https://instagram.com/bar_charlemagne</a></li>
              <li>Canada, Montreal. WAWEL bakery and confectionery - chef (December 2022 – August 2023)</li>
            </ul>
          </div>
        )}>
          <h3 className="text-xl sm:text-3xl font-bold mb-4">EXPERIENCE</h3>
          <p>20 years of work abroad in restaurants in other countries:</p>
          <ul className="list-disc list-inside">
            <li>Poland, Lithuania, Estonia, Germany, France, Canada</li>
            <li>FISH in HOUSE Company: <a href="https://instagram.com/fish_in" className="text-blue-400">https://instagram.com/fish_in</a></li>
            <li>Dnepr house, Chef (June 2018 – June 2022): Development of new products, quality control, increasing durability, purchasing equipment for production processes. Sales volumes. Staff training, setting up the HACCP process production.</li>
            <li>Author&apos;s restaurant, Honey Raspberry Poland, Zgorzelec - cook (May 2017 – May 2018): <a href="https://instagram.com/miodmalinyzgorzelec" className="text-blue-400">https://instagram.com/miodmalinyzgorzelec</a></li>
            <li>France, Agde, Charlemagne restaurant. Cook - seafood (June 2022 – November 2022): <a href="https://instagram.com/bar_charlemagne" className="text-blue-400">https://instagram.com/bar_charlemagne</a></li>
            <li>Canada, Montreal. WAWEL bakery and confectionery - chef (December 2022 – August 2023)</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className={`p-4 sm:p-6 rounded-md cursor-pointer ${isDarkMode ? 'bg-gray-500 text-white' : 'bg-gray-500 text-black'}`} onClick={() => openModal(
          <div className={`p-4 sm:p-6 rounded-md ${isDarkMode ? 'bg-gray-500 text-white' : 'bg-gray-500 text-black'}`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">EDUCATION</h3>
            <p>Certified Chef. Educational institution, Ukraine, Dnipro Vocational School No. 53 (September 2002 – May 2003). Graduated with honors, took part in internship at Charlie&apos;s restaurant.</p>
          </div>
        )}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">EDUCATION</h3>
          <p>Certified Chef. Educational institution, Ukraine, Dnipro Vocational School No. 53 (September 2002 – May 2003). Graduated with honors, took part in internship at Charlie&apos;s restaurant.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;