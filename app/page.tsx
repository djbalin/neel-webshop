"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto">
      <div className="w-1/2">
        <Image src={"assets/images/neel_book.png"} alt={""} />
      </div>

      <div className="w-1/2 pr-24 overflow-hidden space-y-4">
        <h1 className="text-4xl font-semibold break-words">
          Puls 4, Grundbog,<br></br> 1. udgave
        </h1>
        <h2 className="text-2xl">
          En del af serien <span className="underline text-blue-600">Puls</span>
        </h2>
        <span className="text-sm text-slate-600 items-center align-middle justify-center">
          <span className="bg-blue-400 w-3 h-3 inline-block mr-1 rounded-full"></span>
          Af{" "}
          <span className="underline text-slate-500">Neel Jersild Moreira</span>{" "}
          & <span className="underline text-slate-500">Fanny Slotorub</span>
        </span>
        <p className="font-light leading-5">
          Puls 4 er et grundbogsmateriale til kursister, som deltager i
          arbejdsmarkedsrettet danskundervisning eller går på Danskuddannelse 3,
          modul 2. Denne reviderede udgave af Puls 4 har i særlig... (læs mere)
        </p>
      </div>
    </div>
  );
}
