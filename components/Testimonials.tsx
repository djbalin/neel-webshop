"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text: "Vi har hos AB Danish brugt Facet og finder materialet meget brugbart og gennemarbejdet. Det er endt med at blive vores foretrukne materiale, når vi skal klargøre studerende til Prøve i Dansk 3 eller undervise studerende på et tilsvarende niveau.",
    author: "Mikkel Ahlburg, CEO, AB Danish",
  },

  {
    text: "Facet er en god bog til PD3, fordi den passer godt til det niveau, man har, når man skal træne til PD3. Den har forholdsvis simple layouts, men samtidig kompleks teori om blandt andet dansk syntaks og ordstilling, som ellers er spredt ud over mange forskellige bøger. I Facet er det samlet på nogle få sider.",

    author: "Carina Jørgensen, danskunderviser, AB Danish",
  },
  {
    text: "Facet gennemgår de forskellige prøveformer og forklarer dem på en meget pædagogisk måde. Derudover giver bogen blandt andet gode muligheder for at arbejde med lytteøvelser og mundtligt dansk.",
    author: "Mikkel Ahlburg, CEO, AB Danish",
  },
  {
    text: "Facet har gode opgaver, som udfordrer eleven på de måder, man har behov for at blive udfordret, når man træner til PD3. Det er derfor en meget kompakt bog med meget relevant stof samlet på forholdsvis lidt plads.",
    author: "Carina Jørgensen, danskunderviser, AB Danish",
  },

  {
    text: "En af Facets store styrker er efter min mening, at den ikke kun træner den studerende i at bestå en bestemt prøve. De forskellige temaer og opgaver giver samtidig mulighed for at udvide ordforrådet, arbejde med grammatik og blive bedre til at formulere og argumentere for egne synspunkter på dansk.",
    author: "Mikkel Ahlburg, CEO, AB Danish",
  },
  {
    text: "Facet er designet med farver og billeder, så den ikke bliver for tør, hvilket andre bøger godt kan blive. Man har lyst til at arbejde med Facet, fordi den har flotte farver og visuelt er interessant at se på.",
    author: "Carina Jørgensen, danskunderviser, AB Danish",
  },
] as const;

const AUTOPLAY_MS = 8000;

function scrollToSlide(
  track: HTMLDivElement | null,
  index: number,
  behavior?: ScrollBehavior,
) {
  track?.scrollTo({ left: index * track.clientWidth, behavior });
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const next = (active + 1) % testimonials.length;
    // Jump when wrapping to the start, so it doesn't flick back through every quote.
    const timer = setTimeout(
      () =>
        scrollToSlide(
          trackRef.current,
          next,
          next === 0 ? "instant" : undefined,
        ),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(timer);
  }, [active, paused]);

  const updateActive = () => {
    const track = trackRef.current;
    if (track) setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section className="mb-16 md:mb-20">
      <h2 className="text-4xl md:text-5xl mb-6 md:mb-8">Det siger brugerne:</h2>

      <div className="md:grid md:grid-cols-12">
        <div className="relative hidden md:block col-start-1 col-span-8 row-start-1 overflow-hidden rounded-xl">
          <Image
            src="/images/open_2.avif"
            alt="Opslag fra Facet"
            fill
            sizes="66vw"
            className="object-cover object-left"
          />
        </div>

        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative z-10 min-w-0 col-start-6 col-span-7 row-start-1 rounded-xl bg-green p-4 md:mt-4 md:mb-20"
        >
          <div
            ref={trackRef}
            onScroll={updateActive}
            className="flex overflow-x-auto snap-x snap-mandatory motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map(({ text, author }, index) => (
              <figure
                key={text}
                className={`${
                  index % 2 === 0 ? "bg-orange" : "bg-ditBlue"
                } flex w-full shrink-0 snap-start flex-col rounded-xl text-white p-4 sm:p-6`}
              >
                <blockquote className="flex-1 italic leading-relaxed">
                  {text}
                </blockquote>
                <div aria-hidden className="mt-4 flex items-start">
                  <span className="h-[2px] w-6 bg-white" />
                  <svg
                    viewBox="0 0 44 34"
                    className="h-[34px] w-[44px] shrink-0 fill-none stroke-white stroke-2"
                  >
                    <path d="M1 0V32L44 1" />
                  </svg>
                  <span className="h-[2px] flex-1 bg-white" />
                </div>
                <figcaption className="mt-2 text-sm">{author}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-3 flex justify-center md:justify-end">
            {testimonials.map(({ text }, index) => (
              <button
                key={text}
                type="button"
                aria-label={`Vis citat ${index + 1}`}
                aria-current={index === active}
                onClick={() => scrollToSlide(trackRef.current, index)}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`h-3 w-3 rounded-full border-2 border-white ${
                    index === active ? "bg-white" : ""
                  }`}
                />
              </button>
            ))}
          </div>

          <span
            aria-hidden
            className="absolute left-12 top-full hidden md:block h-0 w-0 border-t-[34px] border-r-[44px] border-t-green border-r-transparent"
          />
        </div>
      </div>
    </section>
  );
}
