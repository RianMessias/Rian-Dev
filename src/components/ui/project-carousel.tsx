import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

interface ProjectCarouselProps {
  images: ProjectImage[];
  autoPlayInterval?: number;
}

export function ProjectCarousel({
  images,
  autoPlayInterval = 4500,
}: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || images.length <= 1) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const prev = () =>
    setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % images.length);

  const hasMultiple = images.length > 1;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/12 shadow-project">
      <div className="relative h-[260px] w-full sm:h-[360px] md:h-[480px]">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <figure
              key={img.src}
              className="relative min-h-0 w-full flex-shrink-0"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover object-top"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 sm:p-6">
                <span className="text-sm font-medium text-white sm:text-base">
                  {img.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white opacity-0 backdrop-blur transition hover:bg-slate-800/90 group-hover:opacity-100 md:opacity-0"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white opacity-0 backdrop-blur transition hover:bg-slate-800/90 group-hover:opacity-100 md:opacity-0"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-7 bg-emerald-300"
                    : "w-2.5 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
