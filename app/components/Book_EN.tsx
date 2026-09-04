"use client";

import { CONSTANTS } from "../constants";

export function Book_EN() {
  return (
    <>
      <KompletBook />
      <section className="pb-10 full-bleed text-white bg-ditBlue">
        <div className="place-items-center  pt-16 px-8 lg:px-0 lg:w-2/3 max-w-[800px] mx-auto">
          <article className="space-y-8 ">
            <header className="place-items-center space-y-2 sm:space-y-6">
              <h2 className="text-5xl font-normal text-orange">About Facet</h2>
              <h3 className="text-lg text-center sm:text-left sm:text-3xl font-normal">
                <em>Facet</em> consists of 4 chapters with the following themes:
              </h3>
            </header>
            <div className="flex flex-wrap justify-center space-x-2 gap-y-2 text-white font-medium uppercase text-sm">
              <span className="px-3 py-1 rounded-md bg-green">
                <span className="font-extrabold">1</span> Work and identity
              </span>
              <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
                <span className="font-extrabold">2</span> Money and economy
              </span>
              <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
                <span className="font-extrabold">3</span> Culture and lifestyle
              </span>
              <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
                <span className="font-extrabold">4</span> Crime and punishment
              </span>
            </div>
            <p className="paragraph">
              <b>Facet</b> creates active and dynamic teaching in which the many
              facets of the language come into play as learners work with the
              varied task types that cover all four skills thoroughly. At the
              same time, learners are optimally prepared for the Danish Exam 3
              through a wide range of PD3-style exercises.
            </p>
            <p className="paragraph">
              Each chapter is divided into 3 parts:{" "}
              <b>Reading comprehension, Written composition</b> and{" "}
              <b>Oral communication,</b> so that learners acquire the skills
              needed to pass the Danish Exam 3 with a strong result.
            </p>
            <p className="paragraph">
              In addition to PD3-style reading, writing, and speaking tasks,
              Facet includes a wealth of task types that prepare learners for
              PD3, as well as tasks that involve learners in discussions and
              dilemmas about current topics.
            </p>
            <div>
              <p className="paragraph">
                Alongside this, there is a focus on <b>grammar,</b> including
                verbs, adjectives, nouns, conjunctions, and word order, as well
                as <b>listening comprehension,</b> where learners hear Danish as
                it is spoken among friends, colleagues, and classmates.
              </p>

              <p className="paragraph">
                At the back of the book you will find useful reference pages
                with, among other things, conjunctions, a complete review of the
                Danish Exam 3, various templates for structuring both oral and
                written PD3 tasks, overviews of relevant expressions and phrases
                for both written and oral use, as well as invaluable tips and
                advice.
              </p>
              <p className="paragraph">
                The book is particularly well suited to exam preparation classes
                and encourages fun and inspiring pair and group exercises, but it
                can also be used for self-study.
              </p>
              <p className="paragraph bg-white py-2 px-3 text-black">
                <a
                  href={CONSTANTS.LINKS.AUDIO.en}
                  className="anchorTag font-bold"
                >
                  Audio files,
                </a>{" "}
                <a
                  href={CONSTANTS.LINKS.LAERERVEJLEDNING.en}
                  className="anchorTag font-bold"
                >
                  answer key
                </a>{" "}
                and{" "}
                <a
                  href={CONSTANTS.LINKS.LAERERVEJLEDNING.en}
                  className="anchorTag font-bold"
                >
                  teacher&apos;s guide
                </a>{" "}
                with worksheets are available to download from this website, free
                of charge.
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
    "All about work",
    "All about family life",
    "All about housing",
    "All about quality of life",
  ];
  return (
    <section className="pb-10 full-bleed bg-orange text-white">
      <div className="place-items-center pt-16 px-8 lg:px-0 lg:w-2/3 max-w-[800px] mx-auto">
        <article className="space-y-8">
          <header className="place-items-center space-y-2 sm:space-y-6">
            <h2 className="text-5xl font-normal text-ditBlue">About Komplet</h2>
            <h3 className="text-lg text-center sm:text-left sm:text-3xl font-normal">
              Komplet consists of 4 chapters with the following themes:
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
            <b>Komplet</b> is the perfect textbook for learners in Danish
            Education 2, Module 6, who aim to achieve excellent results in the
            Danish Exam 2 (PD2).
          </p>
          <p className="paragraph">
            The book offers thorough preparation for the Danish Exam 2 through a
            wide selection of PD2-style exercises, while helping learners develop
            a solid vocabulary related to topics that frequently occur in the PD2
            exam.
          </p>
          <p className="paragraph">
            Learners work systematically and thoroughly with all parts of the
            exam and acquire the strategies and techniques they need to approach
            the exam with confidence and achieve a strong result.
          </p>
          <p className="paragraph">
            Throughout the book, <b>grammar</b> and{" "}
            <b>listening comprehension</b> are integrated into the topics and
            activities, ensuring that these areas are practised in a meaningful
            context.
          </p>
          <p className="paragraph">
            The reference section at the back of the book contains a range of
            useful resources, including a comprehensive overview of the Prøve i
            Dansk 2, relevant expressions and phrases for written and oral
            communication, model texts, and valuable tips and advice.
          </p>
          <p className="paragraph">
            <b>Komplet</b> is particularly well suited to classes preparing for
            the PD2 exam, but it can also be used for self-study.
          </p>
          <p className="paragraph bg-white py-2 px-3 text-black">
            <a href={CONSTANTS.LINKS.AUDIO.en} className="anchorTag font-bold">
              Audio files,
            </a>{" "}
            <a
              href={CONSTANTS.LINKS.LAERERVEJLEDNING.en}
              className="anchorTag font-bold"
            >
              answer key
            </a>{" "}
            and{" "}
            <a
              href={CONSTANTS.LINKS.LAERERVEJLEDNING.en}
              className="anchorTag font-bold"
            >
              teacher&apos;s guide
            </a>{" "}
            with worksheets are available to download from this website, free of
            charge.
          </p>
        </article>
      </div>
    </section>
  );
}
