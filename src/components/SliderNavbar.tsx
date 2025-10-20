import { useState, useEffect } from "react";
import { Menu, X, Home, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function SliderNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      setIsDropdownOpen(false);
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
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Home Icon */}
            <div 
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Home 
                className="h-5 lg:h-6 w-5 lg:w-6 text-primary hover:text-primary/80 transition-colors" 
              />
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-border"></div>

            {/* Navigation Links */}
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10 text-sm whitespace-nowrap"
            >
              Servicios
            </button>
            
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10 text-sm whitespace-nowrap"
            >
              Nosotros
            </button>

            {/* Dropdown Menu - "Más" */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="text-foreground hover:text-primary transition-all duration-200 font-medium px-3 py-1 rounded-full hover:bg-primary/10 text-sm whitespace-nowrap flex items-center gap-1"
              >
                Más
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div 
                  className="absolute top-full mt-2 right-0 w-56 bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-xl animate-fade-in"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2 px-2 space-y-1">
                    <button 
                      onClick={() => scrollToSection('proceso')}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium"
                    >
                      Nuestro Proceso
                    </button>
                    <button 
                      onClick={() => scrollToSection('certificaciones')}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium"
                    >
                      Certificaciones
                    </button>
                    <button 
                      onClick={() => scrollToSection('testimonios')}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium"
                    >
                      Testimonios
                    </button>
                    <button 
                      onClick={() => scrollToSection('blog')}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium"
                    >
                      Blog & Recursos
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-primary to-blue-light text-white hover:from-primary/90 hover:to-blue-light/90 transition-all duration-200 font-semibold px-4 py-1 rounded-full text-sm whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Mobile Slider Background */}
        <div className="md:hidden bg-card/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            {/* Home Icon */}
            <div 
              className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-200" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Home 
                className="h-5 w-5 text-primary hover:text-primary/80 transition-colors" 
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2">
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
                className="block w-full text-left px-3 py-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="block w-full text-left px-3 py-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Nosotros
              </button>
              
              {/* Divider */}
              <div className="border-t border-border my-2"></div>
              
              <button 
                onClick={() => scrollToSection('proceso')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm"
              >
                Nuestro Proceso
              </button>
              <button 
                onClick={() => scrollToSection('certificaciones')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm"
              >
                Certificaciones
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left px-3 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm"
              >
                Blog & Recursos
              </button>
              
              {/* Divider */}
              <div className="border-t border-border my-2"></div>
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-center px-3 py-2 bg-gradient-to-r from-primary to-blue-light text-white rounded-lg transition-colors text-sm font-semibold shadow-md"
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
