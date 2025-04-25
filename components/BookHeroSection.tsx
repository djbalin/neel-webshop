import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import PurchaseBook from "./PurchaseBook";

export default function BookHeroSection({ locale }: { locale: string }) {
  setRequestLocale(locale);

  return (
    <section className="flex flex-col md:flex-row pb-14">
      <div className="md:w-3/5 ">
        <h1 className="header  mb-1">Facet</h1>
        <span className="text-sm text-gray-500">
          Af{" "}
          <a href="/about" className="underline font-medium text-gray-700">
            Fanny Slotorub
          </a>{" "}
          &{" "}
          <a href="/about" className="underline font-medium text-gray-700">
            Neel Jersild Moreira
          </a>
        </span>
        <p className="font-normal my-4 w-4/5 ">
          <b>Facet</b> er en grundbog til kursister på Danskuddannelse 3 modul
          5, der er på vej mod Prøve i Dansk 3.
        </p>
        <PurchaseBook />
        <div className="flex flex-col gap-y-2 mt-2">
          <span className="text-gray-700 text-sm">
            Forventet leveringstid: 3-4 arbejdsdage
          </span>
          <a href="/preview" className="text-blue-600 underline text-sm">
            Læseprøve →
          </a>
        </div>
      </div>
      <div className="md:w-2/5 px-6 mt-8 md:mt-0">
        <div className="relative aspect-[3/4] w-2/3">
          <Image
            src="/images/forside.avif"
            alt="Facet lærebog"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="flex w-full py-16 flex-row space-x-6  ">
  <div className="flex w-3/5   bg-blue-50  flex-col">
    <h1 className="text-6xl   md:text-4xl lg:text-6xl font-normal tracking-tight mb-1">
      Facet
    </h1>
    <span>
      Af{" "}
      <a href="/about" className="anchorTag">
        Fanny Slotorub
      </a>{" "}
      &{" "}
      <a href="/about" className="anchorTag">
        Neel Jersild Moreira
      </a>
    </span>
    <p className="font-normal mt-6 mb-8 ">
      <b>Facet</b> består af 4 kapitler med temaerne: Arbejde og identitet,
      Penge og økonomi, Sundhed og livsstil og Kriminalitet og straf... (læs
      mere)
    </p>
    <PurchaseBook />
    <span className="mt-3">Forventet leveringstid: 3 uger</span>
  </div>
  <div className="w-2/5">
    <Image
      width={250}
      height={250}
      src={"/images/forside.avif"}
      alt={"Puls 4 book cover"}
      className="object-contain"
    />
  </div>
</div>; */
}
