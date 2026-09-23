import Image from "next/image";
import { DownloadIcon } from "lucide-react";
import { CONSTANTS } from "@/app/constants";
import type { ProductKey } from "@/contexts/CartContext";

const MATERIALS: Record<
  ProductKey,
  {
    guide: string;
    guideFileName: string;
    answerKey: string;
    answerKeyFileName: string;
  }
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

const BUTTON_COLOR: Record<ProductKey, string> = {
  facet: "bg-blueCustom",
  komplet: "bg-orange",
};

const BOOKS: ProductKey[] = ["komplet", "facet"];

export default function GuideSelector({ isEn = false }: { isEn?: boolean }) {
  const t = isEn
    ? {
        heading: "Teacher's guide",
        intro:
          "The teacher's guide and answer key can be downloaded below, free of charge.",
        guideButton: "Download teacher's guide",
        answerKeyButton: "Download answer key for independent learners",
      }
    : {
        heading: "Lærervejledning",
        intro: "Lærervejledning og rettenøgle kan frit downloades nedenfor.",
        guideButton: "Download lærervejledning",
        answerKeyButton: "Download rettenøgle til selvstuderende",
      };

  return (
    <section className="flex flex-col">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl">{t.heading}</h1>
      <header className="my-4">
        <p className="font-normal text-lg md:text-left">{t.intro}</p>
      </header>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {BOOKS.map((key) => {
          const book = CONSTANTS.PRODUCTS[key];
          const materials = MATERIALS[key];
          return (
            <div
              key={key}
              className="flex flex-col items-center gap-4 rounded-xl border-2 border-gray-200 p-6"
            >
              <div className="relative aspect-[3/4] w-32">
                <Image
                  src={book.image}
                  alt={book.shortTitle}
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <span className="text-lg font-semibold">{book.title}</span>

              <a
                href={materials.guide}
                download={materials.guideFileName}
                className={`${BUTTON_COLOR[key]} w-full text-white px-4 py-2 rounded mt-2`}
              >
                <span className="flex gap-x-4 items-center justify-center">
                  <DownloadIcon color="white" size={20} className="shrink-0" />
                  {t.guideButton}
                </span>
              </a>
              <a
                href={materials.answerKey}
                download={materials.answerKeyFileName}
                className={`${BUTTON_COLOR[key]} w-full text-white px-4 py-2 rounded`}
              >
                <span className="flex gap-x-4 items-center justify-center">
                  <DownloadIcon color="white" size={20} className="shrink-0" />
                  {t.answerKeyButton}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
