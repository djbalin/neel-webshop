"use client";

import Image from "next/image";
import { useState } from "react";
import { CONSTANTS } from "@/app/constants";
import type { ProductKey } from "@/contexts/CartContext";

const PREVIEW_PDF: Record<ProductKey, string | null> = {
  facet: "/pdf/book-preview.pdf",
  komplet: null,
};

const ACTIVE_BORDER: Record<ProductKey, string> = {
  facet: "border-orange bg-orange/10",
  komplet: "border-blueCustom bg-blueCustom/10",
};

const BOOKS: ProductKey[] = ["facet", "komplet"];

export default function PreviewSelector({
  initial = "facet",
}: {
  initial?: ProductKey;
}) {
  const [selected, setSelected] = useState<ProductKey>(initial);
  const pdf = PREVIEW_PDF[selected];

  return (
    <section className="flex flex-col pb-16">
      <h1 className="header">Læseprøve</h1>
      <p className="text-sm mt-2">
        Hvis læseprøven ikke indlæses forneden, kan den downloades{" "}
        <a
          href={pdf ?? "/pdf/book-preview.pdf"}
          className="underline font-medium text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          ved at trykke her
        </a>
        .
      </p>

      {/* Book selector */}
      <div className="mt-6 flex flex-wrap gap-4">
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

      {/* Preview */}
      {pdf ? (
        <div className="mt-4">
          <embed
            key={selected}
            src={pdf}
            type="application/pdf"
            height="750px"
            width="100%"
            className="rounded-md shadow-lg"
          />
        </div>
      ) : (
        <div className="mt-6 rounded-lg border-2 border-dashed border-gray-200 p-6 text-center">
          <span className="inline-block rounded-full bg-orange px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
            Kommer snart
          </span>
        </div>
      )}
    </section>
  );
}
