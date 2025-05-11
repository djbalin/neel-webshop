import { DownloadIcon } from "lucide-react";

export default async function GuidePage() {
  return (
    <section className="flex flex-col">
      <h1 className="header">The teacher&apos;s guide</h1>
      <header className="my-4">
        <p className="font-normal text-lg md:text-left">
          The teacher&#39;s guide and Answer key for <em>Facet</em> can be
          downloaded below, free of charge.
        </p>
      </header>

      <a
        href="/materials/facet_laerervejledning.pdf"
        download="facet_laerervejledning.pdf"
        className="bg-green w-fit text-white px-4 py-2 rounded   mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Download teacher&apos;s guide and answer key
        </span>
      </a>
      <a
        href="/materials/facet_rettenøgle.pdf"
        download="facet_rettenøgle.pdf"
        className="bg-green w-fit text-white px-4 py-2 rounded   mt-8"
      >
        <span className="flex gap-x-4 items-center">
          <DownloadIcon color="white" size={20} />
          Answer key for independent learners
        </span>
      </a>
    </section>
  );
}
