import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogRecursos from "./pages/BlogRecursos";
import ScrollToTop from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Team from "./pages/Team";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import CasosDeExito from "./pages/CasosDeExito";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { SeoProvider } from "./components/PageSeo";

const EstrategiaContenido = lazy(() => import("./pages/servicios/estrategia-contenido/EstrategiaContenido"));
const ProduccionVisual = lazy(() => import("./pages/servicios/produccion-visual-audiovisual/ProduccionVisual"));
const PautaPublicidad = lazy(() => import("./pages/servicios/pauta-publicidad-digital/PautaPublicidad"));
const IonicAgenteIa = lazy(() => import("./pages/servicios/ionic-agente-ia/IonicAgenteIa"));
const SoftwareAMedida = lazy(() => import("./pages/servicios/software-a-medida/SoftwareAMedida"));
const AnaliticaResultados = lazy(() => import("./pages/servicios/analitica-resultados/AnaliticaResultados"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
  </div>
);

const queryClient = new QueryClient();

function ServiceRoute({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SeoProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <CookieConsent />
          <WhatsAppFloat />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog-recursos" element={<BlogRecursos />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/casos-de-exito" element={<CasosDeExito />} />
            <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
            <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />

            <Route
              path="/servicios/estrategia-contenido"
              element={
                <ServiceRoute>
                  <EstrategiaContenido />
                </ServiceRoute>
              }
            />
            <Route
              path="/servicios/produccion-visual-audiovisual"
              element={
                <ServiceRoute>
                  <ProduccionVisual />
                </ServiceRoute>
              }
            />
            <Route
              path="/servicios/pauta-publicidad-digital"
              element={
                <ServiceRoute>
                  <PautaPublicidad />
                </ServiceRoute>
              }
            />
            <Route
              path="/servicios/ionic-agente-ia"
              element={
                <ServiceRoute>
                  <IonicAgenteIa />
                </ServiceRoute>
              }
            />
            <Route
              path="/servicios/software-a-medida"
              element={
                <ServiceRoute>
                  <SoftwareAMedida />
                </ServiceRoute>
              }
            />
            <Route
              path="/servicios/analitica-resultados"
              element={
                <ServiceRoute>
                  <AnaliticaResultados />
                </ServiceRoute>
              }
            />

            {/* Legacy SPA fallbacks (Vercel also has 301 redirects) */}
            <Route path="/agentes-virtuales" element={<Navigate to="/servicios/ionic-agente-ia" replace />} />
            <Route path="/business-intelligence" element={<Navigate to="/servicios/analitica-resultados" replace />} />
            <Route path="/desarrollo-web-movil" element={<Navigate to="/servicios/software-a-medida" replace />} />
            <Route path="/marketing-digital" element={<Navigate to="/servicios/pauta-publicidad-digital" replace />} />
            <Route path="/transformacion-digital" element={<Navigate to="/#ecosistema" replace />} />
            <Route path="/investigacion-de-mercados" element={<Navigate to="/servicios/analitica-resultados" replace />} />
            <Route path="/roi-calculator" element={<Navigate to="/servicios/ionic-agente-ia" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </SeoProvider>
  </QueryClientProvider>
);

export default App;
