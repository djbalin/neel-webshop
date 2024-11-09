import { anton } from "@/fonts/fonts";
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
      <section className="relative bg-green place-items-center pt-10 text-center ">
        <div className="w-2/3 space-y-10">
          <header className="space-y-2">
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter">
              Facet 5
            </h1>
            <h2 className="text-2xl text-white font-bold  ">
              Ny grundbog til modul 5 på Danskuddannelse 3
            </h2>
          </header>
          <p className="paragraph text-white font-normal  text-base text-center">
            <b>Facet 5</b> er en ny grundbog til modul 5 på Danskuddannelse 3.
            Materialet skaber en aktiv og dynamisk undervisning, hvor sprogets
            mange facetter kommer i spil, når kursisterne skal diskutere og
            argumentere, samtidig med at den forbereder kursisterne optimalt til
            Prøve i dansk 3 med PD3-lignende øvelser og opgaver.
          </p>
          <button className="bg-white rounded-md border-orange border-2 px-8 text-lg font-bold">
            <Link href={"/books"}>Læs mere</Link>
          </button>
        </div>

        <div className="h-[400px]  w-full">
          <div className="absolute h-[400px]  w-full -bottom-16 ">
            <Image
              className="mx-auto  drop-shadow-2xl  shadow-gray-600 object-contain object-top"
              src={"/images/book_facet5.png"}
              alt={"Facet 5 book example"}
              priority
              fill
            />
          </div>
        </div>
      </section>

      <section className="w-full mx-auto space-y-16 place-items-center pt-36">
        <header className="w-4/5 place-items-center text-center space-y-8">
          <h2 className="text-5xl font-extrabold  ">Mød forfatterne</h2>
          <p className="text-lg ">
            Facet 5 er skrevet af de to erfarne og anerkendte lærebogsforfattere
            Fanny Slotorub og Neel Jersild Moreira, der hver har en lang række
            udgivelser til DU2 og DU3 bag sig.
          </p>
        </header>

        {/* A row */}
        <article className="landing-article">
          <div className="relative w-1/2">
            <Image
              src={"/images/neel_persons.png"}
              alt={""}
              fill
              className="object-contain object-top"
            />
          </div>
          <div className="landing-article-text ">
            <h3 className="landing-h3">Fanny Slotorub</h3>
            <p className="paragraph">
              Ansat på Københavns Sprogcenter i mere end 20 år med undervisning
              på alle niveauer på Danskuddannelse 2 og 3. Beskikket censor ved
              Prøve i Dansk 3.
            </p>
            <p className="paragraph">
              Forfatter til en lang række populære lærebøger inden for dansk som
              andetsprog, herunder Grammatik i brug, At skrive samt Puls- og
              Fokusserien (Forlaget Praxis). 
            </p>
            {/* A footer of the article */}
            <footer className="flex flex-row w-full items-center justify-evenly">
              <p className="font-bold">Læs mere om Fanny her</p>
              <Link
                className={`${anton.className} tracking-wider bg-greenBlue   text-white py-1 px-2 rounded-md`}
                href={"/about"}
              >
                OM FORFATTERNE
              </Link>
            </footer>
          </div>
        </article>
        {/* Another row */}
        <article className="landing-article">
          <div className="landing-article-text ">
            <h3 className="landing-h3">Neel Jersild Moreira</h3>
            <p className="paragraph">
              Ansat på Københavns Sprogcenter i mere end 20 år med undervisning
              på alle niveauer på Danskuddannelse 2 og 3. Beskikket censor ved
              Prøve i Dansk 3.
            </p>
            <p className="paragraph">
              Ansat på Københavns Sprogcenter i mere end 20 år med undervisning
              på alle niveauer på Danskuddannelse 2 og 3. Beskikket censor ved
              Prøve i Dansk 3.
            </p>
            <footer className="flex flex-row w-full items-center justify-evenly">
              <p className="font-bold">Læs mere om Neel her</p>
              <Link
                className={`${anton.className} tracking-wider bg-greenBlue   text-white py-1 px-2 rounded-md`}
                href={"/about"}
              >
                OM FORFATTERNE
              </Link>
            </footer>
          </div>
          <div className="relative w-1/2">
            <Image
              src={"/images/neel_persons.png"}
              alt={""}
              fill
              className="object-contain object-top"
            />
          </div>
        </article>
      </section>

      <section className="w-4/5 mx-auto place-items-center mt-32 space-y-14">
        <h3 className="text-5xl font-extrabold">
          Forlaget DIT - Dansk I Tiden
        </h3>

        <div className="flex flex-row space-x-10 ">
          <div className=" flex items-center relative w-2/5">
            <Image
              src={"/images/logo_notext.svg"}
              alt="logo"
              className="object-contain object-top"
              fill
            />
          </div>

          <article className="flex  w-3/5 flex-col  space-y-4 items-start ">
            <p className="text-lg">
              <b>Forlaget DIT - Dansk I Tiden</b> udgiver
              undervisningsmaterialer i dansk som andetsprog til Danskuddannelse
              2 og 3.
            </p>

            <p className="text-lg font-bold">
              Facet 4 til 3.4 udkommer i efteråret 2024.
            </p>

            <p className="text-lg">
              Følg ForlagetDIT på Facebook, Instagram og Linkedin.
            </p>

            <div className="flex flex-row gap-x-6 items-center">
              <a href={"/"}>
                <Image
                  src={"/images/socials/ig.svg"}
                  alt="instagram"
                  width={40}
                  height={40}
                />
              </a>
              <a href={"/"}>
                <Image
                  src={"/images/socials/fb.svg"}
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a href={"/"}>
                <Image
                  src={"/images/socials/in.svg"}
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
