import { Link } from "@/i18n/routing";
import { ListItem } from "./Book1";

// export default function Book2({ locale }: { locale: string }) {
export default function Book2() {
  // setRequestLocale(locale);
  return (
    <section className="place-items-center pt-12 space-y-16 w-3/4 mx-auto">
      <header className="place-items-center space-y-6">
        <h2 className="text-6xl font-extrabold text-orange">Om bogen</h2>
        <p className="text-2xl">
          <b>Facet 5</b> er for dig, som snart skal op til Prøve i Dansk 3 og
          gerne vil forberede dig optimalt.
        </p>
      </header>

      <div className="grid gap-x-8 space-y-16 grid-cols-2">
        <article className="space-y-4">
          <h3 className="h3">Facet 5 består af 4 kapitler</h3>
          <div className="grid grid-cols-2 gap-2 text-center text-white font-bold uppercase text-sm">
            <span className=" px-2 py-2 rounded-md bg-yellow text-md">
              1 Arbejde og identitet
            </span>
            <span className=" px-2 py-2 rounded-md bg-orange text-md">
              2 Penge og økonomi
            </span>
            <span className=" px-2 py-2 rounded-md bg-green text-md">
              3 sundhed og livsstil
            </span>
            <span className=" px-2 py-2 rounded-md bg-blue text-md">
              4 kriminalitet og straf
            </span>
          </div>
          <p className="paragraph">
            Hver af kapitlerne er inddelt i læsning, skrivning og mundtlighed,
            så du, trin for trin, tilegner dig de færdigheder der skal til for
            at bestå PD3 med et succesfuldt og godt resultat. Til hver disciplin
            er der en guldgrube af opgaver og strategier samt tips og tricks.
            Bag i bogen findes en komplet gennemgang af prøven med uvurderlige
            tips og tricks.
          </p>
        </article>
        <div className="bg-gray-200 rounded-md"></div>

        <article className="">
          <h3 className="h3">Læseforståelse og ordkendskab</h3>
          <p className="paragraph">
            Træning i relevante læsestrategier i de læseopgaver, som du møder
            til prøven med opgaver, der styrker ordkendskab og hjælper dig til
            at vælge de rigtige svar.
          </p>
        </article>

        <article className="rounded-md">
          <h3 className="h3">Skriftlig fremstilling og sprogbrug</h3>
          <p className="paragraph">
            Metodisk gennemgang og opgaver med alle de relevante sproghandlinger
            til brug i mailen. Du bliver trænet i at vurdere fordele og ulemper
            og beskrive dem, ligesom du føres igennem det sprog, der knytter sig
            til beskrivelsen af statistik. 
          </p>
        </article>

        <div className="bg-gray-200 rounded-md"></div>

        <article className="">
          <h3 className="h3">Mundtlig kommunikation og sprogbrug</h3>
          <p className="paragraph">
            Du bliver trænet i at præsentere, argumentere samt at udtrykke
            synspunkter og holdninger, så du opnår det bedst mulige resultat i
            den mundtlige prøve. Og i dit arbejds- og hverdagsliv i det hele
            taget…
            <br />
            <br />
            Facet indeholder udover PD3-identiske læse-, skrive- og mundtlige
            opgaver, et væld af forskellige opgaver som bl.a. har fokus på:
          </p>
          <div className="bg-greenPale rounded-lg p-2 font-bold">
            <ul className="space-y-2">
              <ListItem
                src={"/images/glyphs/read.png"}
                label="Ordkendskab og ordklasser"
              />
              <ListItem src={"/images/glyphs/find.png"} label="Fejlretning" />
              <ListItem
                src={"/images/glyphs/idea.png"}
                label="Quizzer der styrker viden om samfundet"
              />
              <ListItem
                src={"/images/glyphs/speak.png"}
                label="Sproghandlinger"
              />
              <ListItem src={"/images/glyphs/find.png"} label="Krydsord" />
              <ListItem
                src={"/images/glyphs/decision.png"}
                label="Dilemmaer- og diskussionsopgaver"
              />
              <ListItem
                src={"/images/glyphs/book.png"}
                label="Læsning og præsentation af avisartikler"
              />
            </ul>
          </div>
        </article>

        <article>
          <h3 className="h3">Grammatik</h3>
          <p className="paragraph">
            Sideløbende fokus på grammatik, bl.a. med opgaver i brug af passiv,
            modalverber, frasalverber, forbinderord og ordstilling, sammensatte
            substantiver, præpositionsforbindelser og adjektiver.
          </p>
        </article>

        <article>
          <h3 className="h3">Lytteøvelser</h3>
          <p className="paragraph">
            Til materialet er der endvidere en masse lytteøvelser, hvor du hører
            dansk som det tales blandt venner, studerende og kollegaer, dansk i
            tiden.
          </p>
          <button className="bg-blue text-white rounded-md px-4 py-1 font-bold tracking-tight">
            <Link href={"/audio"}>Se læringsmateriale</Link>
          </button>
        </article>
      </div>
    </section>
  );
}
