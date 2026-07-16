import { useEffect, useState } from 'react';
import LogoLoop, { LogoItem } from './LogoLoop';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const ClientesCarousel = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const revealRef = useGsapReveal<HTMLDivElement>({ selector: '.cc-reveal', stagger: 0.15 });

  // Detectar el tema actual
  useEffect(() => {
    // Verificar el tema inicial
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    // Observar cambios en el tema
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const clientes: LogoItem[] = [
    {
      src: '/imgs/clientes/chipotle.png',
      alt: 'Chipotle',
      height: 80,
    },
    {
      src: '/imgs/clientes/santalucia.png',
      alt: 'Santa Lucía',
      height: 80,
    },
    {
      src: '/imgs/clientes/mianonna.png',
      alt: 'Mia Nonna',
      height: 80,
    },
    {
      src: '/imgs/clientes/distribuidora.png',
      alt: 'Distribuidora',
      height: 80,
    },
    {
      src: isDarkMode ? '/imgs/clientes/mafercano_dark.png' : '/imgs/clientes/mafercano.png',
      alt: 'Mafercano',
      height: 80,
    },
    {
      src: isDarkMode ? '/imgs/clientes/zonagamers_dark.png' : '/imgs/clientes/zonagamers.png',
      alt: 'Zona Gamers',
      height: 80,
    },
    {
      src: '/imgs/clientes/itsi.png',
      alt: 'ITSI',
      height: 80,
    },
  ];

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
            logoHeight={80}
            gap={64}
            pauseOnHover
            fadeOut={false}
            scaleOnHover={true}
            ariaLabel="Logos de clientes"
            className="py-8"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientesCarousel;

