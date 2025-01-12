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
    <div className="place-items-center space-y-20 textext-center pt-16 w-1/2 mx-auto">
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
      </article>
    </div>
  );
}
