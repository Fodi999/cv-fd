"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`w-full py-4 shadow-lg z-10 fixed top-0 left-0 transition-colors ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">My Website</h1>
        <div className="flex items-center space-x-4">
          <Label htmlFor="theme-switch">Dark Mode</Label>
          <Switch
            id="theme-switch"
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
          />
          <div className="ml-2">
            {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;




