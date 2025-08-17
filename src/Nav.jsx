import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Skills", "Projects", "Experience", "Contact"];
  

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-white cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          MyPortfolio<span className="text-pink-500">.</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              className="text-white cursor-pointer hover:text-pink-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/80 backdrop-blur-md p-6 space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {menuItems.map((item) => (
            <div
              key={item}
              className="text-white text-lg cursor-pointer hover:text-pink-500"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
