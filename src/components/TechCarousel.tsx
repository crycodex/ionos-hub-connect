import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface TechItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
  url: string;
}

interface TechCarouselProps {
  technologies: TechItem[];
  className?: string;
  title?: string;
  showTitle?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export const TechCarousel = ({ 
  technologies, 
  className = "", 
  title = "Stack Tecnológico",
  showTitle = true,
  autoplay = true,
  autoplayDelay = 2000
}: TechCarouselProps) => {
  // Configuración del carrusel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  }, autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : []);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const handleTechClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`bg-muted/30 rounded-2xl p-8 ${className}`}>
      {showTitle && (
        <h4 className="text-xl font-semibold mb-6 text-center">{title}</h4>
      )}
      
      {/* Carrusel automático de tecnologías */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="flex-none w-24 md:w-28 lg:w-32 mr-4">
                <div 
                  className="text-center group hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => handleTechClick(tech.url)}
                  title={`Visitar ${tech.name}`}
                >
                  <div className="bg-background/50 rounded-lg p-3 mb-2 border border-border/50 group-hover:border-primary/30 group-hover:shadow-md transition-all">
                    <IconComponent className={`h-6 w-6 md:h-8 md:w-8 ${tech.color} mx-auto`} />
                  </div>
                  <div className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
