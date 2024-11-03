"use client";

import PurchaseBook from "@/components/PurchaseBook";
import Image from "next/image";

export default function BooksPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-12 w-full max-w-screen-xl mx-auto px-4 py-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          width={500}
          height={500}
          src={"/images/neel_book.png"}
          alt={"Puls 4 book cover"}
          className="w-3/4 md:w-full max-w-md object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 md:pr-8 lg:pr-24 space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold break-words text-center md:text-left">
          Puls 4, Grundbog,<br></br> 1. udgave
        </h1>
        <h2 className="text-xl md:text-2xl text-center md:text-left">
          En del af serien <span className="underline text-blue-600">Puls</span>
        </h2>
        <div className="text-sm text-slate-600 items-center align-middle justify-center text-center md:text-left">
          <span className="bg-blue-400 w-3 h-3 inline-block mr-1 rounded-full"></span>
          Af{" "}
          <span className="underline text-slate-500">Neel Jersild Moreira</span>{" "}
          & <span className="underline text-slate-500">Fanny Slotorub</span>
        </div>
        <p className="font-light text-sm leading-5 text-center md:text-left">
          Puls 4 er et grundbogsmateriale til kursister, som deltager i
          arbejdsmarkedsrettet danskundervisning eller går på Danskuddannelse 3,
          modul 2. Denne reviderede udgave af Puls 4 har i særlig ...
        </p>
        <div className="flex justify-center md:justify-start">
          <PurchaseBook />
        </div>
      </div>
    </div>
  );
}
