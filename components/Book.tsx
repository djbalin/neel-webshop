"use client";

export function Book() {
  return (
    <section className="pb-10">
      <div className="place-items-center  pt-16 w-1/2 mx-auto">
        <article className="space-y-8 ">
          <header className="place-items-center space-y-6">
            <h2 className="text-5xl font-normal text-orange">Om bogen</h2>
            <h3 className="text-3xl font-normal">
              Facet 5 består af 4 kapitler med temaerne:
            </h3>
          </header>
          <div className="flex flex-wrap justify-center space-x-2 gap-y-2 text-white font-medium uppercase text-sm">
            <span className="px-3 py-2 rounded-md bg-greenPale">
              <span className="font-extrabold">1</span> Arbejde og identitet
            </span>
            <span className="px-3 py-2 rounded-md bg-greenPale">
              <span className="font-extrabold">2</span> Penge og økonomi
            </span>
            <span className="px-3 py-2 rounded-md bg-greenPale">
              <span className="font-extrabold">3</span> sundhed og livsstil
            </span>
            <span className="px-3 py-2 rounded-md bg-greenPale">
              <span className="font-extrabold">4</span> kriminalitet og straf
            </span>
          </div>
          <p className="paragraph">
            Hvert kapitel er inddelt i 3 dele:{" "}
            <b>læsning, skrivning og mundtlighed,</b> så kursisterne tilegner
            sig de færdigheder, der skal til for at bestå Prøve i Dansk 3 med et
            succesfuldt og godt resultat.
          </p>
        </article>

        <article className="mt-8 flex flex-row space-x-2  align-top">
          <div className="w-1/2">
            <p className="">
              Facet indeholder udover{" "}
              <b>PD3-identiske læse-, skrive- og mundtlige opgaver,</b> et væld
              af forskellige opgaver som bl.a. har fokus på:
            </p>
          </div>
          <div className=" w-1/2 border-b-4 pl-4  border-greenPale pb-2 font-bold">
            <ul className="list-disc list-inside">
              <li>Ordkenskab og ordklasser</li>
              <li>Fejlretning</li>
              <li>Quizzer der styrker viden om samfundet</li>
              <li>Sproghandlinger</li>
              <li>Krydsord</li>
              <li>Dilemmaer- og diskussionsopgaver</li>
              <li>Læsning og præsentation af avisartikler</li>
            </ul>
          </div>
        </article>
        <div>
          <p className="paragraph mt-8">
            Sideløbende er der fokus på <b>grammatik,</b> bl.a. passiv,
            modalverber, frasalverber, adjektiver, forbinderord og ordstilling
            samt et væld af <b>lytteøvelser,</b> hvor kursisterne hører dansk
            som det tales blandt venner, kollegaer og studiekammerater.
          </p>

          <p className="paragraph">
            Bag i bogen findes en komplet gennemgang af prøven, oversigter over
            relevante sproghandlinger til både mundtlig og skriftlig brug samt
            uvurderlige tips og gode råd.
          </p>
          <p className="paragraph">
            Bogen er særdeles velegnet til prøveforberedende hold da den lægger
            op til sjove og inspirerende par- og gruppeøvelser, men den kan også
            benyttes til selvstudium.
          </p>
          <p className="paragraph">
            <a className="anchorTag">Lydfiler,</a>{" "}
            <a className="anchorTag">rettenøgle</a> og{" "}
            <a className="anchorTag">lærervejledning</a> med kopiark kan frit
            downloades her på hjemmesiden.
          </p>
        </div>
      </div>
    </section>
  );
}
