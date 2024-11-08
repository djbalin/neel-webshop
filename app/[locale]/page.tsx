import { Link } from "@/i18n/routing";
import Image from "next/image";

export default async function HomePage({}: // params: { lang },
{
  // params: { lang: Locale };
}) {
  // const t = await getTranslations({ locale: lang, namespace: "HomePage" });
  // console.log(t);

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
              className="mx-auto  drop-shadow-2xl  shadow-gray-600"
              src={"/images/book_facet5.png"}
              alt={"Facet 5 book cover"}
              width={350}
              height={350}
              priority
            />
          </figure>
        </div>
      </section>
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
