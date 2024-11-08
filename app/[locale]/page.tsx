import { Locale } from "@/i18n/config";
import { Link } from "@/i18n/routing";
import console from "console";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations({ locale: lang, namespace: "HomePage" });
  console.log(t);

  return (
    <>
      <section className="relative bg-green place-items-center  justify-between  text-center pt-20 px-6">
        <div className="w-[70%] space-y-4">
          <h1 className="text-6xl  md:text-4xl lg:text-6xl font-extrabold tracking-tighter">
            Facet 5
          </h1>
          <h2 className="text-2xl text-white font-bold  ">
            Ny grundbog til modul 5 på Danskuddannelse 3
          </h2>
          <p className="paragraph text-white font-normal  text-sm text-center">
            Facet 5 er en ny grundbog til modul 5 på Danskuddannelse 3.
            Materialet skaber en aktiv og dynamisk undervisning, hvor sprogets
            mange facetter kommer i spil, når kursisterne skal diskutere og
            argumentere, samtidig med at den forbereder kursisterne optimalt til
            Prøve i dansk 3 med PD3-lignende øvelser og opgaver.
          </p>
          <button className="bg-white rounded-md border-orange border-2 px-8 text-lg font-bold">
            <Link href={"/books"}>Læs mere</Link>
          </button>
        </div>
        <div className="h-[260px]  w-full bg-orange-50">
          <figure className="absolute  w-full bg-orange-50 -bottom-16 ">
            <Image
              // className="absolute z-20 left-1/2 transform -translate-x-1/2  shadow-lg max-w-xs lg:max-w-md"
              className="mx-auto  drop-shadow-2xl max-w-xs lg:max-w-md shadow-gray-600"
              src={"/images/book_facet5.png"}
              alt={"Facet 5 book cover"}
              width={600}
              height={600}
              priority
            />
          </figure>
        </div>
      </section>

      {/* <section className="place-items-center pt-20  w-full">
        <div className="w-1/2 bg-green place-items-center space-y-4">
          <h1 className="text-6xl md:text-4xl lg:text-6xl font-extrabold tracking-tighter">
            Facet 5
          </h1>
          <h2 className="text-2xl font-bold text-white ">
            Ny grundbog til modul 5 på Danskuddannelse 3
          </h2>
          <p className="paragraph font-normal text-white text-sm text-center">
            Facet 5 er en ny grundbog til modul 5 på Danskuddannelse 3.
            Materialet skaber en aktiv og dynamisk undervisning, hvor sprogets
            mange facetter kommer i spil, når kursisterne skal diskutere og
            argumentere, samtidig med at den forbereder kursisterne optimalt til
            Prøve i dansk 3 med PD3-lignende øvelser og opgaver.
          </p>
          <button className="bg-white rounded-md border-orange border-2 px-8 text-lg font-bold">
            <Link href={"/books"}>Læs mere</Link>
          </button>
        </div>
        <div className="relative z-10 height-[100px] bg-red-50">
          <figure className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <Image
              className="z-10 mx-auto w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain"
              src={"/images/book_facet5.png"}
              alt={"Facet 5 book cover"}
              width={400}
              height={400}
            />
          </figure>
        </div>
      </section> */}
      <section className="h-[800px] w-full px-24 space-y-6 text-center place-items-center pt-32">
        <h2 className="text-2xl  font-bold  ">Mød forfatterne</h2>
        <p>
          Facet 5 er skrevet af de to erfarne og anerkendte lærebogsforfattere
          Fanny Slotorub og Neel Jersild Moreira, der hver har en lang række
          udgivelser til DU2 og DU3 bag sig.
        </p>
      </section>
    </>
  );
}
