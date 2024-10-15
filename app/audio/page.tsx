"use client";

import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const PAGE_SIZE = 5;

const AUDIO_FILE_PATHS = [
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
  "/audio/sample.mp3",
];
const TOTAL_PAGES = Math.ceil(AUDIO_FILE_PATHS.length / PAGE_SIZE);
export default function SoundFilesPage() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="flex justify-center pt-10 gap-x-10 px-12 mx-auto">
      <div className="w-1/2 flex items-center">
        <Image
          className="w-full"
          width={800}
          height={800}
          src={"/images/neel_book.png"}
          alt={""}
        />
      </div>
      <div className="mx-auto space-y-6 ">
        <h1 className="text-4xl font-semibold break-words">
          Lydfiler til Puls 4
        </h1>
        <div className="rounded-lg border-gray-100 border-2 shadow-lg">
          <div className="bg-slate-50 gap-x-4 items-center flex flex-row ">
            <span>
              <button
                className="p-3 hover:bg-slate-100 rounded-full"
                onClick={() =>
                  setCurrentPage((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                <ChevronLeftSquare size={30} />
              </button>
              <button
                className="p-3 hover:bg-slate-100 rounded-full"
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev === TOTAL_PAGES - 1 ? TOTAL_PAGES - 1 : prev + 1
                  )
                }
              >
                {/* <ChevronRightCircle size={30} />
                <ChevronRightIcon size={30} /> */}
                <ChevronRightSquare size={30} />
              </button>
            </span>
            <span className="font-medium ">
              Øvelse {PAGE_SIZE * currentPage + 1}-
              {Math.min(PAGE_SIZE * (currentPage + 1), AUDIO_FILE_PATHS.length)}{" "}
              af {AUDIO_FILE_PATHS.length}
            </span>
          </div>
          <div className="max-h-[450px] pr-10 xl:min-w-[600px] space-y-2 scrollable p-4 pt-2 pb-8">
            {AUDIO_FILE_PATHS.slice(
              currentPage * PAGE_SIZE,
              currentPage * PAGE_SIZE + PAGE_SIZE
            ).map((audioFilePath, idx) => {
              return (
                <div className="gap-y-1 flex flex-col" key={idx}>
                  <span>Øvelse {currentPage * PAGE_SIZE + (idx + 1)}</span>
                  <audio controls src={audioFilePath} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
