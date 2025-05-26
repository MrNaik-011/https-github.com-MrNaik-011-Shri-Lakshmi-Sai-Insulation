
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const images = [
    {
      url: "https://5.imimg.com/data5/QM/CE/MY-38303410/download-500x500.jpg",
      title: "Insulation Services",
      description: "Professional thermal insulation solutions"
    },
    {
      url: "https://5.imimg.com/data5/EN/FF/MY-38303410/hot-cold-puff-chemical-insulation-125x125.jpg",
      title: "Hot & Cold Insulation",
      description: "PUF chemical insulation systems"
    },
    {
      url: "https://5.imimg.com/data5/BK/QK/MY-38303410/industrial-insulation-service-125x125.jpg",
      title: "Industrial Services",
      description: "Comprehensive industrial insulation"
    },
    {
      url: "https://5.imimg.com/data5/KA/XW/MY-38303410/reactor-boiler-pipeline-500x500.jpg",
      title: "Boiler Insulation",
      description: "Reactor and boiler pipeline solutions"
    }
  ];

  return (
    <div className="relative max-w-md mx-auto">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="relative group">
                <div className="bg-white rounded-2xl p-4 mx-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-lg">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="relative">
                      {/* Image container with enhanced clarity */}
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop";
                        }}
                      />
                      
                      {/* Overlay gradient for readability, more subtle than before */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3550A3]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 transform translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-[#3550A3] text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-700">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#3550A3]/80 hover:bg-[#3550A3] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3550A3]/80 hover:bg-[#3550A3] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Enhanced Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index ? 'bg-[#3550A3] scale-110' : 'bg-[#3550A3]/30 hover:bg-[#3550A3]/50'}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selectedIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
