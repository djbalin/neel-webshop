import { DownloadIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

// function DownloadItem({ src, label }: { src: string; label: string }) {
//   return (
//     <a href="/audio/sample.mp3" download>
//       <div className="flex flex-row space-x-4 justify-center items-center border-b-4 pb-2 border-green">
//         <span className="font-extrabold text-md flex justify-center items-center">
//           <Image
//             src={src}
//             alt="book"
//             width={30}
//             height={30}
//             className="inline-block mr-2"
//           />
//           {label}
//         </span>
//         <span className="hidden sm:inline font-bold text-md ">•</span>
//         <span className="hidden sm:inline text-sm font-semibold">Facet 5</span>
//         <DownloadIcon />
//       </div>
//     </a>
//   );
// }

export default async function GuidePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations("Guide");

  return (
    <section className="flex flex-col text-left w-4/5  mx-auto space-y-4 pt-10">
      <h1 className="text-4xl md:text-5xl xl:text-7xl pt-4 lg:mb-0 mb-10  lg:text-left font-bold">
        {t("title")}
      </h1>
      <div className="flex flex-col space-y-10 md:space-y-20 w-full md:w-1/2 xl:w-2/3 px-2 md:p-0">
        <header className="space-y-4 md:space-y-8">
          <p className="font-normal text-lg md:text-left">
            Lærervejledning til <b>Facet</b> kan frit downloades nedenfor.
          </p>
        </header>

        <a
          href="/materials/lærervejledning.docx"
          download="lærervejledning.docx"
          className="bg-greenPale w-fit text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          <span className="flex gap-x-4 items-center">
            <DownloadIcon color="white" size={20} />
            Download lærervejledning
          </span>
        </a>
      </div>
    </section>
  );
}
