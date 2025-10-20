import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlobCursor from "./components/BlobCursor";
import ScrollToTop from "./components/ScrollToTop";
// Importar páginas de servicios
import AgentesVirtuales from "./pages/servicios/agentes-virtuales/AgentesVirtuales";
import ROICalculator from "./pages/servicios/agentes-virtuales/ROICalculator";
import BusinessIntelligence from "./pages/servicios/business-intelligence/BusinessIntelligence";
import BusinessIntelligenceDemo from "./pages/servicios/business-intelligence/BusinessIntelligenceDemo";
import MarketingDigital from "./pages/servicios/marketing-digital/MarketingDigital";
import CasosDeExito from "./pages/servicios/marketing-digital/CasosDeExito";
import Portfolio from "./pages/servicios/marketing-digital/Portfolio";
import InvestigacionMercados from "./pages/servicios/investigacion-mercados/InvestigacionMercados";
import TransformacionDigital from "./pages/servicios/transformacion-digital/TransformacionDigital";
import EticaTratamientoDatos from "./pages/servicios/etica-tratamiento-datos/EticaTratamientoDatos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BlobCursor
        blobType="circle"
        fillColor="hsl(204, 100%, 37%)" 
        trailCount={3}
        sizes={[40, 80, 50]}
        innerSizes={[20, 35, 25]}
        innerColor="hsl(199, 100%, 45%)"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="hsl(210, 100%, 50%, 0.3)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/agentes-virtuales" element={<AgentesVirtuales />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/business-intelligence-demo" element={<BusinessIntelligenceDemo />} />
          <Route path="/marketing-digital" element={<MarketingDigital />} />
          <Route path="/marketing-digital/casos-de-exito" element={<CasosDeExito />} />
          <Route path="/marketing-digital/portfolio" element={<Portfolio />} />
          <Route path="/investigacion-de-mercados" element={<InvestigacionMercados />} />
          <Route path="/transformacion-digital" element={<TransformacionDigital />} />
          <Route path="/etica-y-tratamiento-de-datos" element={<EticaTratamientoDatos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
