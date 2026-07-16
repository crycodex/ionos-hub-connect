import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceBySlug } from "@/data/services";

export default function SoftwareAMedida() {
  const service = getServiceBySlug("software-a-medida")!;
  return <ServicePageLayout service={service} />;
}
