import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import PurchaseBook from "./PurchaseBook";

export default function BookHeroSection({ locale }: { locale: string }) {
  setRequestLocale(locale);

  return (
    <section className=" place-items-center  pb-20 bg-green  gap-y-8 md:gap-x-12 w-full">
      <div className="w-3/5 flex flex-row justify-between space-x-8 ">
        <div className="  space-y-2">
          <h1 className="text-6xl  md:text-4xl lg:text-6xl font-extrabold tracking-tighter">
            Facet 5
          </h1>
          <div>
            <h2 className="text-white text-3xl font-extrabold tracking-tighter">
              Grundbog, 1. udgave
            </h2>
            <h3 className="text-white font-bold text-2xl">
              En del af serien Facet
            </h3>
          </div>
          <h4></h4>
          <p className="font-semibold text-sm  ">
            Facet 5 består af 4 kapitler med temaerne: Arbejde og identitet,
            Penge og økonomi, Sundhed og livsstil og Kriminalitet og straf...
            (læs mere)
          </p>
          <PurchaseBook />
        </div>
        <Image
          width={500}
          height={500}
          src={"/images/book_facet5.png"}
          alt={"Puls 4 book cover"}
          className="object-contain"
        />
      </div>
    </section>
  );
}
