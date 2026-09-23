"use client";

import Image from "next/image";
import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { CONSTANTS } from "@/app/constants";
import type { ProductKey } from "@/contexts/CartContext";

const ACTIVE_BORDER: Record<ProductKey, string> = {
  facet: "border-ditBlue bg-ditBlue/10",
  komplet: "border-orange bg-orange/10",
};

const BOOKS: ProductKey[] = ["komplet", "facet"];

type AudioStructure = {
  [chapter: string]: {
    [section: string]: {
      [exercise: string]: string[];
    };
  };
};

export default function AudioSelector({
  facetChapters,
  facetChapterTitles,
  facetAudioStructure,
  facetSectionTitles,
  kompletChapters,
  kompletChapterTitles,
  kompletAudioStructure,
  kompletSectionTitles,
  isEn = false,
}: {
  facetChapters: string[];
  facetChapterTitles: { [key: string]: string };
  facetAudioStructure: AudioStructure;
  facetSectionTitles: { [key: string]: { [key: string]: string } };
  kompletChapters: string[];
  kompletChapterTitles: { [key: string]: string };
  kompletAudioStructure: AudioStructure;
  kompletSectionTitles: { [key: string]: { [key: string]: string } };
  isEn?: boolean;
}) {
  const [selected, setSelected] = useState<ProductKey>("komplet");

  const t = isEn
    ? {
        heading: "Audio files",
        intro:
          "Audio files for the books are available to play and download from this website, free of charge.",
        player: "Audio player",
      }
    : {
        heading: "Lydfiler",
        intro: "Lydfiler kan frit afspilles og downloades her på siden.",
        player: "Lydafspiller",
      };

  return (
    <div className="flex flex-col xl:flex-row justify-between pb-12">
      <section className="flex flex-col lg:pr-8 ">
        <header className="space-y-4 md:space-y-8">
          <h1 className="header mb-4 lg:mb-0 text-center md:text-left">
            {t.heading}
          </h1>
          <p className="text-lg text-center md:text-left">{t.intro}</p>
        </header>

        {/* Book selector */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          {BOOKS.map((key) => {
            const book = CONSTANTS.PRODUCTS[key];
            const isActive = key === selected;
            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                aria-pressed={isActive}
                className={`group flex w-36 flex-col items-center gap-3 rounded-xl border-2 p-4 transition-colors ${
                  isActive
                    ? ACTIVE_BORDER[key]
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={book.image}
                    alt={book.shortTitle}
                    fill
                    className="object-contain drop-shadow-sm"
                  />
                </div>
                <span className="text-sm font-semibold">
                  {book.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <div className="h-full w-full xl:min-w-[700px] border-gray-100 mt-10 xl:mt-0 border-2 shadow-lg rounded-lg">
        <div className="bg-gray-200 space-y-2 p-2 border-b-2 border-gray-200 text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium">
            {t.player}
          </h2>
        </div>
        <div className="h-full max-h-[600px] space-y-6 scrollable p-6 overflow-auto">
          {selected === "facet" ? (
            <AudioPlayer
              chapters={facetChapters}
              chapterTitles={facetChapterTitles}
              audioStructure={facetAudioStructure}
              sectionTitles={facetSectionTitles}
              isEn={isEn}
            />
          ) : (
            <AudioPlayer
              chapters={kompletChapters}
              chapterTitles={kompletChapterTitles}
              audioStructure={kompletAudioStructure}
              sectionTitles={kompletSectionTitles}
              basePath="/audio-komplet"
              isEn={isEn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
