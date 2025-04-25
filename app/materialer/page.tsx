import { DownloadIcon } from "lucide-react";

export default async function GuidePage() {
  return (
    <section className="flex flex-col">
      <h1 className="header">Materialer</h1>
      <header className="my-4">
        <p className="font-normal text-lg md:text-left">
          Lærervejledning og rettenøgle til <b>Facet</b> kan frit downloades
          nedenfor.
        </p>
      </header>

      <a
        href="/materials/lærervejledning.docx"
        download="lærervejledning.docx"
        className="bg-green w-fit text-white px-4 py-2 rounded   mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Download lærervejledning og rettenøgle
        </span>
      </a>
    </section>
  );
}
