import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, waMessageForPath } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const { pathname } = useLocation();
  const href = waLink(waMessageForPath(pathname));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
