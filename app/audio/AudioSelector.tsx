"use client";

import Image from "next/image";
import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import KompletAudioPlayer from "../components/KompletAudioPlayer";
import { CONSTANTS } from "@/app/constants";
import type { ProductKey } from "@/contexts/CartContext";

const ACTIVE_BORDER: Record<ProductKey, string> = {
  facet: "border-orange bg-orange/10",
  komplet: "border-blueCustom bg-blueCustom/10",
};

const BOOKS: ProductKey[] = ["komplet", "facet"];

type FacetStructure = {
  [chapter: string]: {
    [section: string]: {
      [exercise: string]: string[];
    };
  };
};

type KompletStructure = {
  [chapter: string]: {
    [group: string]: string[];
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
}: {
  facetChapters: string[];
  facetChapterTitles: { [key: string]: string };
  facetAudioStructure: FacetStructure;
  facetSectionTitles: { [key: string]: { [key: string]: string } };
  kompletChapters: string[];
  kompletChapterTitles: { [key: string]: string };
  kompletAudioStructure: KompletStructure;
}) {
  const [selected, setSelected] = useState<ProductKey>("komplet");

  return (
    <div className="flex flex-col xl:flex-row justify-between pb-12">
      <section className="flex flex-col lg:pr-8 ">
        <header className="space-y-4 md:space-y-8">
          <h1 className="header mb-4 lg:mb-0 text-center md:text-left">
            Lydfiler
          </h1>
          <p className="text-lg text-center md:text-left">
            Lydfiler kan frit afspilles og downloades her på siden.
          </p>
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
            Lydafspiller
          </h2>
        </div>
        <div className="h-full max-h-[600px] space-y-6 scrollable p-6 overflow-auto">
          {selected === "facet" ? (
            <AudioPlayer
              chapters={facetChapters}
              chapterTitles={facetChapterTitles}
              audioStructure={facetAudioStructure}
              sectionTitles={facetSectionTitles}
            />
          ) : (
            <KompletAudioPlayer
              chapters={kompletChapters}
              chapterTitles={kompletChapterTitles}
              audioStructure={kompletAudioStructure}
            />
          )}
        </div>
      </div>
    </div>
  );
}
