/* eslint-disable react/no-unescaped-entities */
export default async function About() {
  return (
    <section className="flex leading-snug flex-col space-y-10 pb-10">
      <h1 className="header">Om forfatterne</h1>
      <div className="flex w-full flex-col space-y-12">
        {/* First Article */}
        <article>
          <h2 className="text-2xl font-extrabold mb-4">Fanny Slotorub</h2>
          <p className="paragraph">
            Cand.mag. og uddannet som underviser i dansk som andetsprog.
          </p>
          <p className="paragraph">
            Ansat på Københavns Sprogcenter i mere end 20 år med undervisning på
            alle niveauer på Danskuddannelse 2 og 3. Beskikket censor ved Prøve
            i Dansk 3.
          </p>
          <p className="paragraph">
            Forfatter til en lang række populære lærebøger inden for dansk som
            andetsprog, herunder <b>Grammatik i brug</b>, <b>At skrive</b> samt{" "}
            <b>Puls-</b> og <b>Fokusserien</b> (Forlaget Praxis).
          </p>
          <p className="paragraph">
            Ansat som pædagogisk konsulent for Styrelsen for International
            Rekruttering og Integration (SIRI) siden 2018 med flg.
            arbejdsområder:
          </p>
          <ul className="paragraph list-disc ulIndent max-w-full space-y-1">
            <li>Udvikling og revision af SIRI's visitationsmateriale</li>
            <li>Beskikket som opgaveforfatter ved Prøve i Dansk 2</li>
            <li>Beskikket censor ved Prøve i Dansk 2</li>
            <li>Fagkonsulent ved Prøve i Dansk 2</li>
            <li>
              Opgaveforfatter og ansvarlig for udvikling af alle nye mundtlige
              og skriftlige modultestopgaver til Danskuddannelse 2 og 3.
            </li>
            <li>
              Udvikling af materiale til digital bedømmertræningssite til
              modultestbedømmelse
            </li>
          </ul>
          <p>
            Læs mere om Fanny på{" "}
            <a
              className="anchorTag"
              href="https://www.linkedin.com/in/fanny-slotorub-16b30a131/"
            >
              LinkedIn
            </a>
            .
          </p>
        </article>

        {/* Second Article */}
        <article>
          <h2 className="text-2xl font-extrabold mb-4">Neel Jersild Moreira</h2>
          <p className="paragraph">
            Cand.mag. og uddannet som underviser i dansk som andetsprog.
          </p>
          <p className="paragraph">
            Forfatter til en lang række populære lærebøger inden for dansk som
            andetsprog, nemlig <b>Puls- og Fokusserien</b> (Forlaget Praxis)
            samt <b>10 Danskere</b> og frilæsningsbogen{" "}
            <b>Det er dit valg, Ahmed</b> (Forlaget Gyldendal).
          </p>
          <p className="paragraph">
            Ansat på Københavns Sprogcenter i en længere årrække med
            undervisning på alle niveauer på DU2 og DU3. Siden 2018 ansat på CSI
            Sprogcenter / Jobcenter København.
          </p>
          <p className="paragraph">Har endvidere varetaget flg. opgaver:</p>
          <ul className="paragraph list-disc ulIndent max-w-full space-y-1">
            <li>Beskikket som opgaveforfatter ved Prøve i Dansk 2</li>
            <li>Medlem af opgavekommissionen Prøve i Dansk 2</li>
            <li>Beskikket censor ved Prøve i Dansk 2</li>
            <li>
              Opgaveforfatter til nye mundtlige og skriftlige modultestopgaver
              til Danskuddannelse 2 og 3.
            </li>
            <li>
              Udarbejdelse af to praktikbøger for CSI / Jobcenter København, et
              udviklingsprojekt som blev støttet af SIRI.
            </li>
          </ul>
          <p>
            Læs mere om Neel på{" "}
            <a
              className="anchorTag"
              href="https://www.linkedin.com/in/neel-jersild-moreira-a56b58131/?originalSubdomain=dk"
            >
              LinkedIn
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
