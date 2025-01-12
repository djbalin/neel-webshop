import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  return (
    <>
      <section className="relative  place-items-center mb-28  lg:pt-10 text-center ">
        <div className="w-2/3 ">
          <header className="space-y-3 mb-8">
            <h1 className="text-8xl font-normal ">Facet</h1>
            <h2 className="text-5xl font-normal  ">
              Ny grundbog i dansk til 3.5
            </h2>
          </header>

          <div className="max-w-[50rem] mx-auto text-center ">
            <p className=" mb-2">
              <b>Facet</b> er en grundbog til kursister på Danskuddannelse 3
              modul 5, der er på vej mod Prøve i Dansk 3.
            </p>
            <p className=" mb-4">
              <b>Facet</b> skaber en aktiv og dynamisk undervisning, hvor
              sprogets mange facetter kommer i spil, når kursisterne skal
              arbejde med et væld af varierede opgavetyper, der kommer godt
              rundt om de fire færdigheder. Samtidig forberedes kursisterne
              optimalt til Prøve i dansk 3 med en lang række PD3-lignende
              øvelser og opgaver.
            </p>
          </div>

          <button className=" bg-orange text-white px-8 py-1 text-lg font-medium">
            <Link href={"/books"}>Læs mere</Link>
          </button>
        </div>
      </section>
      <div className="h-[500px] bg-green relative w-full">
        <div className="h-[630px] absolute -top-10  w-full ">
          <Image
            className="mx-auto  drop-shadow-2xl  shadow-gray-600 object-contain  "
            src={"/images/book_facet5.png"}
            alt={"Facet 5 book example"}
            priority
            // height={700}
            // width={400}
            fill
          />
        </div>
      </div>

      <section className="w-5/6 xl:w-full mx-auto space-y-16 place-items-center pt-36">
        <header className="w-4/5 place-items-center text-center space-y-4">
          <h2 className="text-5xl font-normal  ">Om forfatterne</h2>
          <p className="text-normal max-w-2xl mx-auto">
            <b>Facet</b> er skrevet af de to erfarne og anerkendte
            lærebogsforfattere Fanny Slotorub og Neel Jersild Moreira, der hver
            har en lang række udgivelser til DU2 og DU3 bag sig.
          </p>
        </header>

        <div className="flex gap-14  mx-auto max-w-6xl">
          {/* Image container */}
          <div className="flex-1 aspect-square relative">
            <Image
              src={"/images/neel_persons.png"}
              alt=""
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Red container */}
          <div className="flex-1 flex flex-col space-y-8 justify-between">
            <article className="">
              <div>
                <h3 className="text-4xl font-normal text-orange mb-4">
                  Fanny Slotorub
                </h3>
                <p className="paragraph">
                  Forfatter til en lang række populære lærebøger inden for dansk
                  som andetsprog, herunder <b>Grammatik i brug, At skrive</b>{" "}
                  samt <b>Puls- og Fokusserien.</b>
                </p>
                <p className="paragraph">
                  Ansat på Københavns Sprogcenter i mere end 20 år med
                  undervisning på alle niveauer på Danskuddannelse 2 og 3. Mange
                  års erfaring som beskikket censor ved Prøve i Dansk 2 og 3.
                  Siden 2018 ansat som pædagogisk konsulent for Styrelsen for
                  International Rekruttering og Integration (SIRI).
                </p>
              </div>
            </article>
            <article className="">
              <div>
                <h3 className="text-4xl font-normal text-orange mb-4">
                  Neel Jersild Moreira
                </h3>
                <p className="paragraph">
                  Forfatter til en lang række populære lærebøger inden for dansk
                  som andetsprog, nemlig <b>Puls- og Fokusserien</b> samt{" "}
                  <b>10 Danskere</b> og frilæsningsbogen{" "}
                  <b>Det er dit valg, Ahmed.</b>
                </p>
                <p className="paragraph">
                  Ansat på Københavns Sprogcenter i en længere årrække med
                  undervisning på alle niveauer på DU2 og DU3. Siden 2018 ansat
                  på CSI Sprogcenter.
                </p>
              </div>
            </article>
            <div className="flex  mx-auto">
              <Link
                className={`tracking-wider bg-orange font-medium text-white py-1 px-8`}
                href={"/about"}
              >
                Læs mere om forfatterne her
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mb-16 mx-auto mt-36 place-items-center space-y-14">
        <h3 className="text-5xl font-normal">Forlaget DIT - Dansk I Tiden</h3>

        <div className="flex pl-16 text-sm pr-12 tracking-tight  flex-row space-x-8 place-items-center ">
          <div className="bg-black py-3 px-5">
            <div className=" flex items-center   relative w-24 h-24">
              <Image
                src={"/images/logo_jan2025.svg"}
                alt="logo"
                className="object-contain "
                fill
              />
            </div>
          </div>

          <article className="flex  flex-col  space-y-4 ">
            <p>
              <b>Forlaget DIT - Dansk I Tiden</b> udgiver
              undervisningsmaterialer i dansk som andetsprog til Danskuddannelse
              2 og 3.
            </p>

            <p>
              <b>Facet</b> til 3.4 udkommer i efteråret 2024.
            </p>

            <p className="italic">
              Følg ForlagetDIT på{" "}
              <a href="/" className="anchorTag">
                Facebook
              </a>
              , <a className="anchorTag">Instagram</a> og{" "}
              <a className="anchorTag">Linkedin</a>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
