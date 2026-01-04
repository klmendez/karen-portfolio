"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Carousel({ title, children }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    const interval = window.setInterval(() => {
      const scrollAmount = container.offsetWidth * 0.8;
      const nearEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 4;

      if (nearEnd) {
        animationFrame = window.requestAnimationFrame(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        });
      } else {
        animationFrame = window.requestAnimationFrame(() => {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      }
    }, 4500);

    return () => {
      window.clearInterval(interval);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-4">
      {title ? <h3 className="text-lg font-semibold tracking-tight md:text-xl">{title}</h3> : null}

      <div className="relative">
        <div ref={containerRef} className="hide-scrollbar flex snap-x snap-mandatory overflow-x-auto gap-4 pb-4 pr-6" role="list">
          {children}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-background via-background/90 to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-background via-background/90 to-transparent sm:block" />

        <div className="absolute inset-y-0 left-0 hidden items-center pl-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy("left")}
            className="pointer-events-auto btn btn-outline btn-icon"
            aria-label="Desplazar carrusel a la izquierda"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 hidden items-center pr-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy("right")}
            className="pointer-events-auto btn btn-outline btn-icon"
            aria-label="Desplazar carrusel a la derecha"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
