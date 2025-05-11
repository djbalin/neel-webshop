import { DownloadIcon } from "lucide-react";

export default async function GuidePage() {
  return (
    <section className="flex flex-col">
      <h1 className="header">Lærervejledning</h1>
      <header className="my-4">
        <p className="font-normal text-lg md:text-left">
          Lærervejledning og rettenøgle til <b>Facet</b> kan frit downloades
          nedenfor.
        </p>
      </header>

      <a
        href="/materials/facet_laerervejledning.pdf"
        download="facet_laerervejledning.pdf"
        className="bg-green w-fit text-white px-4 py-2 rounded   mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Download lærervejledning
        </span>
      </a>
      <a
        href="/materials/facet_rettenoegle.pdf"
        download="facet_rettenøgle.pdf"
        className="bg-green w-fit text-white px-4 py-2 rounded   mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Download rettenøgle til selvstuderende
        </span>
      </a>
    </section>
  );
}
