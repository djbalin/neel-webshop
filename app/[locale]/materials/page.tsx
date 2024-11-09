import AudioSection from "@/components/AudioSection";
import { DownloadIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

function DownloadItem({ src, label }: { src: string; label: string }) {
  return (
    <a href="/audio/sample.mp3" download>
      <div className="flex flex-row space-x-4 justify-center items-center border-b-4 pb-2 border-green">
        <span className="font-extrabold text-md flex justify-center items-center">
          <Image
            src={src}
            alt="book"
            width={30}
            height={30}
            className="inline-block mr-2"
          />
          {label}
        </span>
        <span className="hidden sm:inline font-bold text-md ">•</span>
        <span className="hidden sm:inline text-sm font-semibold">Facet 5</span>
        <DownloadIcon />
      </div>
    </a>
  );
}

export default async function GuidePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations("Guide");

  return (
    <div className="flex flex-col pt-0 lg:pt-2 md:px-6 sm:px-8 lg:px-10  mx-auto space-y-4">
      <h1 className="text-4xl md:text-5xl pt-4 lg:mb-0 mb-10 xl:text-7xl text-center lg:text-left font-bold">
        {t("title")}
      </h1>
      <div className="flex md:flex-row w-full flex-col md:space-x-10 space-y-8 md:space-y-0">
        <section className="flex flex-col space-y-10 md:space-y-20 w-full md:w-1/2 xl:w-2/3 px-2 md:p-0">
          <header className="space-y-4 md:space-y-8">
            <p className="font-semibold text-lg text-center md:text-left">
              Lydfiler, rettenøgle, kopiark og pædagogiske tips kan frit
              downloades. Find dem nedenfor.
            </p>
          </header>

          <div className="flex flex-col  w-auto md:w-full mx-auto md:flex-row gap-6 lg:gap-8 flex-wrap">
            <DownloadItem src="/images/icons2/folder.svg" label="Lydfiler" />
            <DownloadItem
              src="/images/icons2/problem-solving.svg"
              label="Rettenøgle"
            />
            <DownloadItem src="/images/icons2/info.svg" label="Kopiark" />
            <DownloadItem
              src="/images/icons2/docs.svg"
              label="Pædagogiske tips"
            />
          </div>
        </section>

        <section className="w-full sm:max-w-xl  md:w-1/2 mx-auto">
          <AudioSection />
        </section>
      </div>
    </div>
  );
}
