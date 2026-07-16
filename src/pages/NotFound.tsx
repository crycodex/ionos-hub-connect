import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24 pt-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-8xl text-primary mb-4">404</h1>
          <h2 className="font-display text-3xl text-ink mb-4">Página no encontrada</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10">
            La página que buscas no existe o fue movida. Prueba con el inicio o agenda un diagnóstico.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-pill-primary">
              <Home size={18} className="mr-2" />
              Volver al inicio
            </Link>
            <button type="button" onClick={() => window.history.back()} className="btn-pill-secondary">
              <ArrowLeft size={18} className="mr-2" />
              Regresar
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
