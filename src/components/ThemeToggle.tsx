import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Inicializar el tema al cargar el componente
  useEffect(() => {
    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Por defecto modo claro
      setTheme("light");
      applyTheme("light");
    }
  }, []);

  // Función para aplicar el tema
  const applyTheme = (newTheme: "light" | "dark") => {
    const root = document.documentElement;
    
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  // Alternar entre temas
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 hover:scale-110 group shadow-sm hover:shadow-md hover-transitions"
      aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
      title={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
    >
      {/* Ícono de Sol (Modo Claro Activo) */}
      <Sun
        className={`absolute w-5 h-5 text-amber-500 transition-opacity duration-150 ${
          theme === "light"
            ? "opacity-100"
            : "opacity-0"
        }`}
      />
      
      {/* Ícono de Luna (Modo Oscuro Activo) */}
      <Moon
        className={`absolute w-5 h-5 text-blue-400 transition-opacity duration-150 ${
          theme === "dark"
            ? "opacity-100"
            : "opacity-0"
        }`}
      />
    </button>
  );
};

