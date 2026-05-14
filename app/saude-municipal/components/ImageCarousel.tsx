"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string;
  imageClassName?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ImageCarousel({
  images,
  alt = "Galeria de imagens",
  className = "",
  imageClassName = "",
  showControls = true,
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!images || images.length === 0) return null;

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, autoPlayInterval);

    return () => window.clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const prev = () => setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () => setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));

  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-lg bg-slate-900 ${className}`}>
      <img
        src={images[activeIndex]}
        alt={`${alt} ${activeIndex + 1}`}
        className={`w-full h-80 object-cover ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      {showControls && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition"
            aria-label="Imagem anterior"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition"
            aria-label="Próxima imagem"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </>
      )}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full transition ${index === activeIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
