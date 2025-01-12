import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import PurchaseBook from "./PurchaseBook";

export default function BookHeroSection({ locale }: { locale: string }) {
  setRequestLocale(locale);

  return (
    <section className=" place-items-center  pb-20 bg-greenPale pt-10 mt-20  gap-y-8 md:gap-x-12 w-full">
      <div className="w-3/5 flex flex-row justify-between space-x-8 ">
        <div className="flex flex-col">
          <h1 className="text-6xl  md:text-4xl lg:text-6xl font-normal tracking-tight">
            Facet
          </h1>
          <span>
            Af <a className="anchorTag">Fanny Slotorub</a> og{" "}
            <a className="anchorTag">Neel Jersild Moreira</a>
          </span>
          <p className="font-normal text-sm mt-6 mb-8 ">
            <b>Facet</b> består af 4 kapitler med temaerne: Arbejde og
            identitet, Penge og økonomi, Sundhed og livsstil og Kriminalitet og
            straf... (læs mere)
          </p>
          <PurchaseBook />
        </div>
        <Image
          width={650}
          height={650}
          src={"/images/book_facet5.png"}
          alt={"Puls 4 book cover"}
          className="object-contain"
        />
      </div>
    </section>
  );
}
