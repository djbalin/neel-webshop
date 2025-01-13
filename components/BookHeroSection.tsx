import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import PurchaseBook from "./PurchaseBook";

export default function BookHeroSection({ locale }: { locale: string }) {
  setRequestLocale(locale);

  return (
    <div className="w-full   bg-greenPale  py-16 ">
      <div className="w-3/5 flex flex-row space-x-6 place-items-center mx-auto">
        <div className="flex w-2/5  flex-col">
          <h1 className="text-6xl  md:text-4xl lg:text-6xl font-normal tracking-tight mb-1">
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
            <b>Facet</b> består af 4 kapitler med temaerne: Arbejde og
            identitet, Penge og økonomi, Sundhed og livsstil og Kriminalitet og
            straf... (læs mere)
          </p>
          <PurchaseBook />
          <span className="mt-3">Forventet leveringstid: 3 uger</span>
        </div>
        <div className="w-3/5">
          <Image
            width={650}
            height={650}
            src={"/images/book_facet5.png"}
            alt={"Puls 4 book cover"}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
