"use client";

import { CONSTANTS } from "../constants";

export function Book() {
  return (
    <>
      <KompletBook />
    <section className="pb-10 full-bleed text-white bg-ditBlue">
      <div className="place-items-center  pt-16 px-8 lg:px-0 lg:w-2/3 max-w-[800px] mx-auto">
        <article className="space-y-8 ">
          <header className="place-items-center space-y-2 sm:space-y-6">
            <h2 className="text-5xl font-normal text-orange">Om Facet</h2>
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
            <b>Facet</b> skaber en aktiv og dynamisk undervisning, hvor sprogets
            mange facetter kommer i spil, når kursisterne skal arbejde med de
            varierede opgavetyper, der kommer godt rundt om alle fire
            færdigheder. Samtidig forberedes kursisterne optimalt til Prøve i
            Dansk 3 med en lang række PD3-lignende opgaver.
          </p>
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
    </>
  );
}

function KompletBook() {
  const temaer = [
    "Rundt om arbejde",
    "Rundt om familieliv",
    "Rundt om bolig",
    "Rundt om livskvalitet",
  ];
  return (
    <section className="pb-10 full-bleed bg-orange text-white">
      <div className="place-items-center pt-16 px-8 lg:px-0 lg:w-2/3 max-w-[800px] mx-auto">
        <article className="space-y-8">
          <header className="place-items-center space-y-2 sm:space-y-6">
            <h2 className="text-5xl font-normal text-ditBlue">Om Komplet</h2>
            <h3 className="text-lg text-center sm:text-left sm:text-3xl font-normal">
              Komplet består af 4 kapitler med temaerne:
            </h3>
          </header>
          <div className="flex flex-wrap justify-center space-x-2 gap-y-2 font-medium uppercase text-sm">
            {temaer.map((tema, i) => (
              <span
                key={tema}
                className="px-3 py-1 tracking-wide rounded-md bg-ditBlue text-white"
              >
                <span className="font-extrabold">{i + 1}</span> {tema}
              </span>
            ))}
          </div>
          <p className="paragraph">
            <b>Komplet</b> er et overskueligt og komplet undervisningsmateriale,
            som indeholder alt det, der skal til for at forberede kursisterne
            optimalt til PD2.
          </p>
          <p className="paragraph">
            Arbejdet med emnerne, som kursisterne kommer rundt om på en grundig
            og relevant måde, er med til at give kursisterne en større viden om
            det danske samfund samtidig med, at de opbygger et solidt ordforråd
            inden for hyppigt forekommende emner til PD2.
          </p>
          <p className="paragraph">
            Hvert kapitel er inddelt i 3 dele: <b>Læsning, Skrivning</b> og{" "}
            <b>Mundtlig kommunikation.</b> Her arbejder kursisterne grundigt og
            systematisk med alle prøvens dele og med opgaver af samme type som
            dem, der findes i PD2, så de tilegner sig strategier og teknikker,
            der gør dem i stand til at bestå prøven med et godt resultat.
          </p>
          <p className="paragraph">
            Sideløbende er der i alle bogens dele fokus på <b>grammatik</b> og{" "}
            <b>lytteforståelse,</b> som en altid integreret del af de emner, der
            arbejdes med.
          </p>
          <p className="paragraph">
            <b>Komplet</b> skaber en aktiv og dynamisk undervisning, når
            kursisterne skal arbejde med de mange varierede opgavetyper, og de
            får rig mulighed for selv at komme på banen og bruge sproget aktivt i
            interaktion med andre.
          </p>
          <p className="paragraph">
            Bag i bogen findes nyttige opslagssider med bl.a. forbinderord, en
            komplet gennemgang af Prøve i Dansk 2, relevante udtryk og vendinger
            til både skriftlig og mundtlig brug, modeltekster samt uvurderlige
            tips og gode råd.
          </p>
          <p className="paragraph">
            Bogen er særdeles velegnet til prøveforberedende hold, men kan også
            benyttes af selvstuderende.
          </p>
          <p className="paragraph bg-white py-2 px-3 text-black">
            <a href={CONSTANTS.LINKS.AUDIO.da} className="anchorTag font-bold">
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
        </article>
      </div>
    </section>
  );
}
