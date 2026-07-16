import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

export default function PautaPublicidad() {
  const service = getServiceBySlug("pauta-publicidad-digital")!;
  return <ServicePageLayout service={service} />;
}
