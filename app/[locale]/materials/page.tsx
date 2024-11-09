import AudioSection from "@/components/AudioSection";
import { DownloadIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

function DownloadItem({ src, label }: { src: string; label: string }) {
  return (
    <a href="/audio/sample.mp3" download>
      <div className="flex flex-row space-x-4 justify-center items-center border-b-4 pb-2 border-green">
        <span className="font-extrabold text-lg flex justify-center items-center">
          <Image
            src={src}
            alt="book"
            width={30}
            height={30}
            className="inline-block mr-2"
          />
          {label}
        </span>
        <span className="font-bold text-md ">•</span>
        <span className="text-sm font-semibold">Facet 5</span>
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
    <div className="flex flex-row pt-12 justify-between w-[90%] mx-auto ">
      <section className="flex flex-col space-y-20">
        <header className="space-y-8">
          <h1 className="text-7xl font-bold">{t("title")}</h1>
          <p className="font-semibold text-lg">
            Lydfiler, rettenøgle, kopiark og pædagogiske tips kan frit
            downloades. Find dem nedenfor.
          </p>
        </header>

        <div className="flex gap-8 flex-row flex-wrap  ">
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

      <section className="max-h-[600px] w-1/3">
        <AudioSection />
      </section>
    </div>
  );
}
