import Image from "next/image";

export function ListItem({ src, label }: { src: string; label: string }) {
  return (
    <li>
      <Image
        src={src}
        alt="book"
        width={35}
        height={35}
        className="inline-block mr-2"
      />
      {label}
    </li>
  );
}

export default function Book1() {
  // export default function Book1({ locale }: { locale: string }) {
  return (
    <section className="place-items-center space-y-20 textext-center pt-16 w-1/2 mx-auto">
      <article className="space-y-8 text-center">
        <h3 className="text-4xl font-extrabold">
          Facet 5 består af 4 kapitler med temaerne:
        </h3>
        <div className="flex flex-wrap justify-center space-x-2 gap-y-2 text-center text-white font-bold uppercase text-sm">
          <span className="px-3 py-2 rounded-md bg-yellow">
            1 Arbejde og identitet
          </span>
          <span className="px-3 py-2 rounded-md bg-orange">
            2 Penge og økonomi
          </span>
          <span className="px-3 py-2 rounded-md bg-green">
            3 sundhed og livsstil
          </span>
          <span className="px-3 py-2 rounded-md bg-blueCustom">
            4 kriminalitet og straf
          </span>
        </div>
        <p className="paragraph">
          Hvert kapitel er inddelt i 3 dele med hvert sit hovedfokus:{" "}
          <b>læsning, skrivning og mundtlighed,</b> så kursisterne, trin for
          trin, tilegner sig de færdigheder, der skal til for at bestå PD3 med
          et succesfuldt og godt resultat. Til hver disciplin er der en
          guldgrube af opgaver. Bag i bogen findes en komplet gennemgang af
          prøven med uvurderlige tips og tricks.
        </p>
      </article>

      <article className="mt-8 space-y-4 text-center">
        <h3 className=" text-lg">
          Facet indeholder udover{" "}
          <b>PD3-identiske læse-, skrive- og mundtlige opgaver,</b> et væld af
          forskellige opgaver som bl.a. har fokus på:
        </h3>
        <div className="text-left inline-block   mx-auto p-2 font-bold">
          <div className="h-[0.15rem] bg-green mb-2"></div>
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
          <div className="h-[0.15rem] bg-green mt-4"></div>
        </div>
        {/* </div> */}
      </article>

      {/* <div className="flex flex-col mt-12 space-y-16">
          <div className="flex flex-row space-x-8">
            <div className="flex-1">
              <h3 className="h3">Læseforståelse og ordkendskab</h3>
              <p className="paragraph">
                Træning i relevante læsestrategier i de læseopgaver, som du
                møder til prøven med opgaver, der styrker ordkendskab og hjælper
                dig til at vælge de rigtige svar.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="h3">Skriftlig fremstilling og sprogbrug</h3>
              <p className="paragraph">
                Metodisk gennemgang og opgaver med alle de relevante
                sproghandlinger til brug i mailen. Du bliver trænet i at vurdere
                fordele og ulemper og beskrive dem, ligesom du føres igennem det
                sprog, der knytter sig til beskrivelsen af statistik.
              </p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-sm h-[300px]"></div>

          <div className="flex flex-row space-x-12">
            <div className=" w-3/5 ">
              <h3 className="h3">Mundtlig kommunikation og sprogbrug</h3>
              <p className="paragraph">
                Du bliver trænet i at præsentere, argumentere samt at udtrykke
                synspunkter og holdninger, så du opnår det bedst mulige resultat
                i den mundtlige prøve. Og i dit arbejds- og hverdagsliv i det
                hele taget…
                <br />
                <br />
                Facet indeholder udover PD3-identiske læse-, skrive- og
                mundtlige opgaver, et væld af forskellige opgaver som bl.a. har
                fokus på:
              </p>
            </div>
            <div className="text-left p-2 font-bold">
              <ul className="space-y-2">
                <li>
                  <Image
                    src={"/images/glyphs/read.png"}
                    alt="book"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Ordkendskab og ordklasser
                </li>
                <li>
                  <Image
                    src={"/images/glyphs/find.png"}
                    alt="quiz"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Fejlretning
                </li>
                <li>
                  <Image
                    src={"/images/glyphs/idea.png"}
                    alt="quiz"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Quizzer der styrker viden om samfundet
                </li>
                <li>
                  <Image
                    src={"/images/glyphs/speak.png"}
                    alt="speech"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Sproghandlinger
                </li>
                <li>
                  <Image
                    src={"/images/glyphs/find.png"}
                    alt="crossword"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Krydsord
                </li>
                <li>
                  <Image
                    src={"/images/glyphs/decision.png"}
                    alt="decision"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Dilemmaer- og diskussionsopgaver
                </li>
                <li>
                  <Image
                    src={"/images/glyphs/book.png"}
                    alt="newspaper"
                    width={25}
                    height={25}
                    className="inline-block mr-2"
                  />
                  Læsning og præsentation af avisartikler
                </li>
              </ul>
              <div className="h-[0.15rem] bg-green mt-4"></div>
            </div>
          </div>

          <div className="flex flex-row space-x-8">
            <div className="flex-1">
              <h3 className="h3">Grammatik</h3>
              <p className="paragraph">
                Sideløbende er der fokus på grammatik, bl.a. med opgaver i brug
                af passiv, modalverber, frasalverber, forbinderord og
                ordstilling samt et væld af lytteøvelser, hvor kursisterne hører
                dansk som det tales blandt venner, kollegaer og
                studiekammerater, DIT dansk, Dansk I Tiden.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="h3">Lytteøvelser</h3>
              <p className="paragraph">
                Til materialet er der endvidere en masse lytteøvelser, hvor du
                hører dansk som det tales blandt venner, studerende og
                kollegaer, dansk i tiden.
              </p>
              <button className="bg-blue text-white rounded-md px-4 py-1 font-bold tracking-tight">
                <Link href={"/audio"}>Se læringsmateriale</Link>
              </button>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
}
