/* eslint-disable react/no-unescaped-entities */
export default async function About() {
  return (
    <section className="flex leading-snug flex-col space-y-10 pb-10">
      <h1 className="header">About the authors</h1>
      <div className="flex w-full flex-col space-y-12">
        {/* First Article */}
        <article>
          <h2 className="text-2xl font-extrabold mb-4">Fanny Slotorub</h2>
          <p className="paragraph">
            MA in Danish Language and Literature and trained as a teacher of
            Danish as a second language.
          </p>
          <p className="paragraph">
            Employed at the Copenhagen Language Centre for more than 20 years,
            teaching all levels of Danish Education 2 and 3. Many years of
            experience as an appointed examiner for the Danish Exam 3.
          </p>
          <p className="paragraph">
            Author of a wide range of popular textbooks in Danish as a second
            language, including <em>Grammatik i brug</em>, <em>At skrive</em>,
            and the <em>Puls</em> and <em>Fokus</em>-series (Praxis).
          </p>
          <p className="paragraph">
            Since 2018, employed as a pedagogical consultant for the Danish
            Agency for International Recruitment and Integration (SIRI) with the
            following areas of responsibility:
          </p>
          <ul className="paragraph list-disc ulIndent max-w-full space-y-1">
            <li>Development and revision of SIRI's assessment materials</li>
            <li>Appointed as task author for the Danish Exam 2</li>
            <li>Appointed examiner for the Danish Exam 2</li>
            <li>Subject consultant for the Danish Exam 2</li>
            <li>
              Task author and responsible for the development of all new oral
              and written module test tasks for Danish Education 2 and 3
            </li>
            <li>
              Development of materials for a digital assessor training site for
              module test assessment in both DU2 and DU3
            </li>
          </ul>
          <p>
            Learn more about Fanny on{" "}
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
            MA in Danish Language and Literature and trained as a teacher of
            Danish as a second language.
          </p>
          <p className="paragraph">
            Author of a wide range of popular textbooks in Danish as a second
            language, including the <em>Puls</em> and <em>Fokus</em> series
            (Praxis) as well as <em>10 Danskere</em> and the easy reader novel{" "}
            <em>Det er dit valg, Ahmed</em> (Gyldendal).
          </p>
          <p className="paragraph">
            Employed at the Copenhagen Language Centre for several years,
            teaching all levels of Danish Education 2 and 3. Since 2018,
            employed at CSI Language Centre / Jobcenter Copenhagen.
          </p>
          <p className="paragraph">Neel has also held the following roles:</p>
          <ul className="paragraph list-disc ulIndent max-w-full space-y-1">
            <li>Appointed as task author for the Danish Exam 2</li>
            <li>Member of the task commission for the Danish Exam 2</li>
            <li>Appointed examiner for the Danish Exam 2</li>
            <li>
              Task author for new oral and written module test tasks for Danish
              Education 2 and 3
            </li>
            <li>
              Developing two books for learning Danish through work placements,
              a development project for CSI / Jobcenter Copenhagen, supported by
              SIRI
            </li>
          </ul>
          <p>
            Learn more about Neel on{" "}
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
