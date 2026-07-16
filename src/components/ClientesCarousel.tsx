import LogoLoop, { LogoItem } from "./LogoLoop";
import { useGsapReveal } from "@/hooks/useGsapReveal";

/** Logos en /public/imgs/clientes */
const clientes: LogoItem[] = [
  { src: "/imgs/clientes/chipotle.png", alt: "El Chipotle", height: 72 },
  { src: "/imgs/clientes/zonagamers.png", alt: "Zona Gamers", height: 72 },
  { src: "/imgs/clientes/santalucia.png", alt: "Santa Lucía", height: 72 },
  { src: "/imgs/clientes/mianonna.png", alt: "Mia Nonna", height: 72 },
  { src: "/imgs/clientes/distribuidora.png", alt: "Distribuidora Hernández", height: 72 },
  { src: "/imgs/clientes/mafercano.png", alt: "Mafercano", height: 72 },
  { src: "/imgs/clientes/itsi.png", alt: "ITSI", height: 72 },
];

const ClientesCarousel = () => {
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: ".cc-reveal", stagger: 0.15 });

  return (
    <section className="section-band border-y border-border bg-white" id="clientes">
      <div ref={revealRef} className="container mx-auto max-w-content px-4">
        <div className="cc-reveal text-center mb-12">
          <p className="badge-pill mb-4 mx-auto w-fit">Clientes</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-4">
            Empresas que confían en IonosHub
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Negocios que digitalizaron su operación con nuestro ecosistema
          </p>
        </div>

        <div className="cc-reveal max-w-6xl mx-auto">
          <LogoLoop
            logos={clientes}
            speed={80}
            direction="left"
            logoHeight={72}
            gap={64}
            pauseOnHover
            fadeOut={false}
            scaleOnHover
            ariaLabel="Logos de clientes"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientesCarousel;
