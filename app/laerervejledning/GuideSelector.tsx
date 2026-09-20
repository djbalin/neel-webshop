"use client";

import Image from "next/image";
import { useState } from "react";
import { DownloadIcon } from "lucide-react";
import { CONSTANTS } from "@/app/constants";
import type { ProductKey } from "@/contexts/CartContext";

const MATERIALS: Record<
  ProductKey,
  { guide: string; guideFileName: string; answerKey: string; answerKeyFileName: string }
> = {
  facet: {
    guide: "/materials/facet_laerervejledning.pdf",
    guideFileName: "facet_laerervejledning.pdf",
    answerKey: "/materials/facet_rettenoegle.pdf",
    answerKeyFileName: "facet_rettenøgle.pdf",
  },
  komplet: {
    guide: "/materials/komplet_laerervejledning.pdf",
    guideFileName: "komplet_laerervejledning.pdf",
    answerKey: "/materials/komplet_rettenoegle.pdf",
    answerKeyFileName: "komplet_rettenøgle.pdf",
  },
};

const ACTIVE_BORDER: Record<ProductKey, string> = {
  facet: "border-orange bg-orange/10",
  komplet: "border-blueCustom bg-blueCustom/10",
};

const BOOKS: ProductKey[] = ["komplet", "facet"];

export default function GuideSelector() {
  const [selected, setSelected] = useState<ProductKey>("komplet");
  const materials = MATERIALS[selected];

  return (
    <section className="flex flex-col">
      <h1 className="header">Lærervejledning</h1>
      <header className="my-4">
        <p className="font-normal text-lg md:text-left">
          Lærervejledning og rettenøgle kan frit downloades nedenfor.
        </p>
      </header>

      {/* Book selector */}
      <div className="mt-2 flex flex-wrap gap-4">
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
              <span className="text-sm font-semibold">{book.shortTitle}</span>
            </button>
          );
        })}
      </div>

      <a
        href={materials.guide}
        download={materials.guideFileName}
        className="bg-green w-fit text-white px-4 py-2 rounded mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Download lærervejledning
        </span>
      </a>
      <a
        href={materials.answerKey}
        download={materials.answerKeyFileName}
        className="bg-green w-fit text-white px-4 py-2 rounded mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Download rettenøgle til selvstuderende
        </span>
      </a>
    </section>
  );
}
