"use client";

import { CONSTANTS } from "../constants";

export function Book() {
  return (
    <section className="pb-10 full-bleed text-white bg-ditBlue">
      <div className="place-items-center  pt-16 px-8 lg:px-0 lg:w-2/3 max-w-[800px] mx-auto">
        <article className="space-y-8 ">
          <header className="place-items-center space-y-2 sm:space-y-6">
            <h2 className="text-5xl font-normal text-orange">Om bogen</h2>
            <h3 className="text-lg text-center sm:text-left sm:text-3xl font-normal">
              Facet består af 4 kapitler med temaerne:
            </h3>
          </header>
          <div className="flex flex-wrap justify-center space-x-2 gap-y-2 text-white font-medium uppercase text-sm">
            <span className="px-3 py-1 rounded-md bg-green">
              <span className="font-extrabold">1</span> Arbejde og identitet
            </span>
            <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
              <span className="font-extrabold">2</span> Penge og økonomi
            </span>
            <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
              <span className="font-extrabold">3</span> Kultur og livsstil
            </span>
            <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
              <span className="font-extrabold">4</span> kriminalitet og straf
            </span>
          </div>
          <p className="paragraph">
            Hvert kapitel er inddelt i 3 dele:{" "}
            <b>Læseforståelse, Skriftlig fremstilling</b> og{" "}
            <b>Mundtlig kommunikation,</b> så kursisterne tilegner sig de
            færdigheder, der skal til for at bestå Prøve i Dansk 3 med et godt
            resultat.
          </p>
          <p className="paragraph">
            Facet indeholder udover PD3-lignende læse-, skrive- og mundtlige
            opgaver et væld af opgavetyper, der forbereder kursisterne til PD3,
            samt opgaver, der inddrager kursisterne i diskussioner og dilemmaer
            om aktuelle emner.
          </p>
          <div>
            <p className="paragraph">
              Sideløbende er der fokus på <b>grammatik,</b> bl.a. verber,
              adjektiver, substantiver, forbinderord og ordstilling samt{" "}
              <b>lytteforståelse,</b> hvor kursisterne hører dansk, som det
              tales blandt venner, kollegaer og studiekammerater.
            </p>

            <p className="paragraph">
              Bag i bogen findes nyttige opslagssider med bl.a. forbinderord, en
              komplet gennemgang af Prøve i Dansk 3, diverse skemaer til at
              strukturere både mundtlige og skriftlige PD3 opgaver, oversigter
              med relevante udtryk og vendinger til både skriftlig og mundtlig
              brug samt uvurderlige tips og gode råd.
            </p>
            <p className="paragraph">
              Bogen er særdeles velegnet til prøveforberedende hold og lægger op
              til sjove og inspirerende par- og gruppeøvelser, men den kan også
              benyttes til selvstudium.
            </p>
            <p className="paragraph bg-white py-2 px-3 text-black">
              <a
                href={CONSTANTS.LINKS.AUDIO.da}
                className="anchorTag font-bold"
              >
                Lydfiler,
              </a>{" "}
              <a
                href={CONSTANTS.LINKS.LAERERVEJLEDNING.da}
                className="anchorTag font-bold"
              >
                rettenøgle
              </a>{" "}
              og{" "}
              <a
                href={CONSTANTS.LINKS.LAERERVEJLEDNING.da}
                className="anchorTag font-bold"
              >
                lærervejledning
              </a>{" "}
              med kopiark kan frit downloades her på hjemmesiden.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
