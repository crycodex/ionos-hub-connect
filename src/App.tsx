import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogRecursos from "./pages/BlogRecursos";
import ScrollToTop from "./components/ScrollToTop";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Team from "./pages/Team";

// Code-splitting dinámico para páginas de servicios (las más pesadas)
const AgentesVirtuales = lazy(() => import("./pages/servicios/agentes-virtuales/AgentesVirtuales"));
const ROICalculator = lazy(() => import("./pages/servicios/agentes-virtuales/ROICalculator"));
const BusinessIntelligence = lazy(() => import("./pages/servicios/business-intelligence/BusinessIntelligence"));
const MarketingDigital = lazy(() => import("./pages/servicios/marketing-digital/MarketingDigital"));
const InvestigacionMercados = lazy(() => import("./pages/servicios/investigacion-mercados/InvestigacionMercados"));
const TransformacionDigital = lazy(() => import("./pages/servicios/transformacion-digital/TransformacionDigital"));
const DesarrolloWebMovil = lazy(() => import("./pages/servicios/desarrollo-web-movil/DesarrolloWebMovil"));

// Componente de carga para Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog-recursos" element={<BlogRecursos />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          
          {/* Rutas con code-splitting dinámico */}
          <Route 
            path="/roi-calculator" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ROICalculator />
              </Suspense>
            } 
          />
          <Route 
            path="/agentes-virtuales" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AgentesVirtuales />
              </Suspense>
            } 
          />
          <Route 
            path="/business-intelligence" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BusinessIntelligence />
              </Suspense>
            } 
          />
          <Route 
            path="/marketing-digital" 
            element={
              <Suspense fallback={<PageLoader />}>
                <MarketingDigital />
              </Suspense>
            } 
          />
          <Route 
            path="/investigacion-de-mercados" 
            element={
              <Suspense fallback={<PageLoader />}>
                <InvestigacionMercados />
              </Suspense>
            } 
          />
          <Route 
            path="/transformacion-digital" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TransformacionDigital />
              </Suspense>
            } 
          />
          <Route 
            path="/desarrollo-web-movil" 
            element={
              <Suspense fallback={<PageLoader />}>
                <DesarrolloWebMovil />
              </Suspense>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
