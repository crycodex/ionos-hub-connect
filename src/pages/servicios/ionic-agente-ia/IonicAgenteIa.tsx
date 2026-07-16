import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

export default function IonicAgenteIa() {
  const service = getServiceBySlug("ionic-agente-ia")!;
  return <ServicePageLayout service={service} />;
}
