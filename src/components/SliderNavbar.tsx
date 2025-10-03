import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function SliderNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? "scale-105" 
          : "scale-100"
      }`}
    >
      {/* Slider Container */}
      <div className="relative">
        {/* Slider Background */}
        <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/imgs/logo%20remove.png" 
                alt="IonosHub" 
                className="h-6 w-auto" 
              />
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-border"></div>

            {/* CTA Buttons */}
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10"
            >
              Servicios
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10"
            >
              Quienes Somos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10"
            >
              Contacto
            </button>

            {/* Separator */}
            <div className="w-px h-6 bg-border"></div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
</div>
    </nav>
  );
}
