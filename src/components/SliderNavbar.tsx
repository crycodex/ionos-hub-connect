import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function SliderNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/imgs/logo%20remove.png" 
              alt="IONOS HUB" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
            >
              Servicios
            </button>
            
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm"
            >
              Nosotros
            </button>

            {/* Dropdown Menu - "Más" */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm flex items-center gap-1"
              >
                Más
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div 
                  className="absolute top-full mt-2 right-0 w-56 bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-xl animate-fade-in"
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
                      onClick={() => window.location.href = '/blog-recursos'}
                      className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors font-medium"
                    >
                      Blog & Recursos
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Contact Button */}
            <Button 
              onClick={handleContactClick}
              className="bg-[#00A8E8] hover:bg-[#00A8E8]/90 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-all duration-300"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Nuestro Proceso
              </button>
              <button 
                onClick={() => scrollToSection('certificaciones')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Certificaciones
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Testimonios
              </button>
              <button 
                onClick={() => window.location.href = '/blog-recursos'}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors text-sm font-medium"
              >
                Blog & Recursos
              </button>
              <Button 
                onClick={handleContactClick}
                className="w-full bg-[#00A8E8] hover:bg-[#00A8E8]/90 text-white font-semibold mt-4"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
