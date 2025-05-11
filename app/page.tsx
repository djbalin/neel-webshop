import Logo from "@/app/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "@/app/constants";
export default async function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto mb-16 xs:pb-10">
        <div className="md:w-3/5">
          <header className="mb-4 md:mb-8">
            <h1 className="header mb-2">Facet</h1>
            <h2 className="text-lg xs:text-2xl font-medium xs:font-normal">
              Grundbog i dansk til DU3 • Modul 5
            </h2>
          </header>

          {/* Mobile book image - only shows on small screens */}
          <div className="flex justify-center mb-8 md:hidden">
            <div className="relative aspect-[3/4] w-2/3 max-w-[300px]">
              <Image
                src="/images/forside.avif"
                alt="Facet lærebog"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

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
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 clickable rounded-xl bg-orange  text-white px-8 py-1 text-lg font-medium">
              <Link href={CONSTANTS.LINKS.BOOKS.da}>Læs mere</Link>
            </button>
          </div>
        </div>
        {/* Desktop book image - only shows on medium screens and up */}
        <div className="hidden md:flex md:w-2/5 px-6 items-center justify-center">
          <div className="relative aspect-[3/4] w-2/3 max-w-none">
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
      <div className="full-bleed bg-green px-8 sm:px-8 lg:px-20 mx-auto flex w-full justify-center py-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
          <div className="bg-orange max-w-md rounded-xl text-white p-4 sm:p-6 md:w-2/5 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">
              Læseprøve
            </h2>
            <p className="mb-4 md:mb-8">
              Få et smugkig i bogen - se indholdsfortegnelsen og læs de første
              sider af kapitel 1.
            </p>
            <div className="flex justify-center">
              <Link
                href={CONSTANTS.LINKS.PREVIEW.da}
                className="clickable inline-block rounded-xl bg-blue-900 text-white py-2 md:py-3 px-6 md:px-8 text-base md:text-lg"
              >
                Læs læseprøven her
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <Image
              className="max-w-full h-auto object-contain"
              src={"/images/open_2.avif"}
              alt={"Facet book example"}
              priority
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>

      <section className="w-full xl:w-5/6 mx-auto space-y-12 md:space-y-16 pt-20 md:pt-36">
        <header className="space-y-4">
          <h2 className="text-4xl md:text-5xl">Om forfatterne</h2>
          <p className="text-base md:text-lg">
            <b>Facet</b> er skrevet af de to erfarne og anerkendte
            lærebogsforfattere Fanny Slotorub og Neel Jersild Moreira, der hver
            har en lang række udgivelser til DU2 og DU3 bag sig.
          </p>
        </header>

        <div className="space-y-2">
          <div className="flex-1 flex flex-col md:flex-row align-top space-y-8 md:space-y-0 md:space-x-14 justify-between">
            <article className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-normal text-orange mb-4">
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
            <article className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-normal text-orange mb-4">
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
              <p className="paragraph">
                Mange års erfaring som beskikket censor og som medlem af
                opgavekommissionen.
              </p>
            </article>
          </div>
          <div className="flex justify-center md:justify-start mx-auto">
            <Link
              className={`tracking-wider clickable bg-green font-medium sm:text-lg text-white py-1 px-4 sm:px-8`}
              href={CONSTANTS.LINKS.ABOUT.da}
            >
              Læs mere om forfatterne
            </Link>
          </div>
        </div>
      </section>
      <hr className="w-full border-t border-gray-300 mt-10 mb-8"></hr>
      {/* <div className="flex max-w-[500px]"> */}
      <div className="px-4 max-w-[400px] sm:max-w-[700px] sm:pb-10 pb-6 mx-auto flex flex-row justify-center items-center md:items-start md:pl-16 text-sm md:pr-12 tracking-tight md:space-y-0 md:space-x-6 space-x-4">
        <div className="hidden sm:flex justify-center min-w-[150px]">
          <Logo height={150} width={150} disableLink={true} />
        </div>

        <p className="text-xs sm:text-sm">
          <b>Forlaget DIT - Dansk i Tiden</b> udgiver undervisningsmaterialer i
          dansk som andetsprog til Danskuddannelse 2 og 3.
        </p>
        {/* </div> */}
      </div>
    </>
  );
}
