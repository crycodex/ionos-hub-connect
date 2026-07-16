import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

export default function EstrategiaContenido() {
  const service = getServiceBySlug("estrategia-contenido")!;
  return <ServicePageLayout service={service} />;
}
