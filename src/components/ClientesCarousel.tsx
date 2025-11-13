import LogoLoop, { LogoItem } from './LogoLoop';

const ClientesCarousel = () => {
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
      src: '/imgs/clientes/mafercano.png',
      alt: 'Mafercano',
      height: 80,
    },
    {
      src: '/imgs/clientes/zonagamers.png',
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
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Clientes que Confían en Nosotros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas líderes que han transformado su negocio con nuestras soluciones
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
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

