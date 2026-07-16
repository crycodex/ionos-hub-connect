import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

export default function AnaliticaResultados() {
  const service = getServiceBySlug("analitica-resultados")!;
  return <ServicePageLayout service={service} />;
}
