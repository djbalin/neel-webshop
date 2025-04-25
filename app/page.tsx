import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="flex flex-col  md:flex-row max-w-6xl mx-auto mb-16 pb-10">
        <div className="md:w-3/5 ">
          <header className="mb-8">
            <h1 className="header mb-2">Facet</h1>
            <h2 className="text-2xl font-normal">
              Grundbog i dansk til DU3 • Modul 5
            </h2>
          </header>

          <div className="space-y-4">
            <p>
              <b>Facet</b> er en grundbog til kursister på Danskuddannelse 3
              modul 5, der er på vej mod Prøve i Dansk 3.
            </p>
            <p>
              <b>Facet</b> skaber en aktiv og dynamisk undervisning, hvor
              sprogets mange facetter kommer i spil, når kursisterne skal
              arbejde med de varierede opgavetyper, der kommer godt rundt om
              alle fire færdigheder. Samtidig forberedes kursisterne optimalt
              til Prøve i Dansk 3 med en lang række PD3-lignende opgaver.
            </p>
          </div>

          <button className="mt-6 bg-orange text-white px-8 py-1 text-lg font-medium">
            <Link href={"/books"}>Læs mere</Link>
          </button>
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

      {/* Full-width green section */}
      <section className="full-bleed bg-green">
        <div className="h-[500px] px-20  mx-auto flex w-full flex-row">
          <div className="w-1/2 flex items-center">
            <div className="bg-orange text-white p-10 max-w-lg">
              <h2 className="text-4xl font-normal mb-6">Læseprøve</h2>
              <p className="text-xl mb-8">
                Få et smugkig i bogen - se indholdsfortegnelsen og læs de første
                sider af kapitel 1.
              </p>
              <Link
                href="/preview"
                className="inline-block bg-blue-900 text-white py-3 px-8 text-lg"
              >
                Læs læseprøven her
              </Link>
            </div>
          </div>
          <div className="w-1/2 relative flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                className="drop-shadow-2xl object-contain scale-125"
                src={"/images/open_2.avif"}
                alt={"Facet 5 book example"}
                priority
                fill
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-4/6 mx-auto space-y-16 pt-36">
        <header className="space-y-4">
          <h2 className="text-5xl   ">Om forfatterne</h2>
          <p className="text-lg">
            <b>Facet</b> er skrevet af de to erfarne og anerkendte
            lærebogsforfattere Fanny Slotorub og Neel Jersild Moreira, der hver
            har en lang række udgivelser til DU2 og DU3 bag sig.
          </p>
        </header>

        <div className="space-y-6">
          <div className="flex-1 flex flex-row align-top space-x-14 justify-between">
            <article className="w-1/2">
              <h3 className="text-4xl font-normal text-orange mb-4">
                Fanny Slotorub
              </h3>
              <p className="paragraph">
                Forfatter til en lang række populære lærebøger inden for dansk
                som andetsprog, herunder <b>Grammatik i brug, At skrive</b> samt{" "}
                <b>Puls- og Fokusserien.</b>
              </p>
              <p className="paragraph">
                Ansat på Københavns Sprogcenter i mere end 20 år med
                undervisning på alle niveauer på Danskuddannelse 2 og 3. Mange
                års erfaring som beskikket censor ved Prøve i Dansk 2 og 3.
                Siden 2018 ansat som pædagogisk konsulent for Styrelsen for
                International Rekruttering og Integration (SIRI).
              </p>
            </article>
            <article className="w-1/2">
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
                undervisning på alle niveauer på DU2 og DU3. Siden 2018 ansat på
                CSI Sprogcenter.
              </p>
            </article>
          </div>
          <div className="flex mx-auto">
            <Link
              className={`tracking-wider bg-green font-medium text-lg text-white py-1 px-8`}
              href={"/about"}
            >
              Læs mere om forfatterne
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mb-16 mx-auto mt-36 place-items-center space-y-14">
        <h3 className="text-5xl font-normal">Forlaget DIT - Dansk i Tiden</h3>

        <div className="flex pl-16 text-sm pr-12 tracking-tight  flex-row space-x-8 place-items-center ">
          <Logo height={200} width={200} />

          <article className="flex  flex-col  space-y-4 ">
            <p>
              <b>Forlaget DIT - Dansk i Tiden</b> udgiver
              undervisningsmaterialer i dansk som andetsprog til Danskuddannelse
              2 og 3.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
