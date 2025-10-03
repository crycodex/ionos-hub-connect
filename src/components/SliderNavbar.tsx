import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function SliderNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
          ? "scale-105" 
          : "scale-100"
      }`}
    >
      {/* Slider Container */}
      <div className="relative">
        {/* Desktop Slider Background */}
        <div className="hidden md:block bg-card/80 backdrop-blur-lg border border-border rounded-full px-4 lg:px-6 py-3 shadow-lg">
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/imgs/logo%20remove.png" 
                alt="IonosHub"  
                className="h-5 lg:h-6 w-auto" 
              />
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-border"></div>

            {/* CTA Buttons */}
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10 text-sm lg:text-base"
            >
              Servicios
            </button>
            
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10 text-sm lg:text-base"
            >
              Quienes Somos
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10 text-sm lg:text-base"
            >
              Contacto
            </button>

            {/* Separator */}
            <div className="w-px h-6 bg-border"></div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Slider Background */}
        <div className="md:hidden bg-card/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/imgs/logo%20remove.png" 
                alt="IonosHub"  
                className="h-5 w-auto" 
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full h-8 w-8"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full mt-2 left-0 right-0 bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-xl animate-fade-in">
            <div className="py-3 px-4 space-y-2">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-3 py-2 text-foreground hover:bg-primary/10 rounded-full transition-colors text-sm font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="block w-full text-left px-3 py-2 text-foreground hover:bg-primary/10 rounded-full transition-colors text-sm font-medium"
              >
                Quienes Somos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-3 py-2 text-foreground hover:bg-primary/10 rounded-full transition-colors text-sm font-medium"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
