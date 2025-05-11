"use client";

import { CONSTANTS } from "../constants";

export function Book_EN() {
  return (
    <section className="pb-10 full-bleed text-white bg-ditBlue">
      <div className="place-items-center  pt-16 px-8 lg:px-0 lg:w-2/3 max-w-[800px] mx-auto">
        <article className="space-y-8 ">
          <header className="place-items-center space-y-2 sm:space-y-6">
            <h2 className="text-5xl font-normal text-orange">About the book</h2>
            <h3 className="text-lg text-center sm:text-left sm:text-3xl font-normal">
              <em>Facet</em> consists of 4 chapters with the following themes:
            </h3>
          </header>
          <div className="flex flex-wrap justify-center space-x-2 gap-y-2 text-white font-medium uppercase text-sm">
            <span className="px-3 py-1 rounded-md bg-green">
              <span className="font-extrabold">1</span> Work and Identity
            </span>
            <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
              <span className="font-extrabold">2</span> Money and Economy
            </span>
            <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
              <span className="font-extrabold">3</span> Culture and Lifestyle
            </span>
            <span className="px-3 py-1 tracking-wide  rounded-md bg-green">
              <span className="font-extrabold">4</span> Crime and Punishment
            </span>
          </div>
          <p className="paragraph">
            Each chapter is divided into 3 parts: <b>Reading Comprehension</b>,{" "}
            <b>Writing Composition</b> and <b>Oral Communication</b>, enabling
            students to acquire the skills needed to pass the Danish Exam 3 with
            a successful result.
          </p>
          <p className="paragraph">
            In addition to PD3-style reading, writing, and speaking tasks, Facet
            includes a wide variety of task types that prepare students for PD3.
            The tasks also engage students in discussions and dilemmas on
            current and relevant topics.
          </p>
          <div>
            <p className="paragraph">
              Alongside this, there is a focus on grammar, including verbs,
              adjectives, nouns, conjunctions, and word order, as well as audio
              exercises where students hear Danish as it is spoken among
              friends, colleagues, and classmates.
            </p>

            <p className="paragraph">
              At the back of the book, you’ll find helpful reference pages with
              conjunctions, a complete review of the Danish Exam 3, various
              templates for structuring both oral and written PD3 tasks,
              overviews of relevant expressions for both written and oral use,
              as well as invaluable tips and advice.
            </p>
            <p className="paragraph">
              The book is particularly well-suited for exam preparation courses
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
                answer keys,
              </a>{" "}
              and{" "}
              <a
                href={CONSTANTS.LINKS.LAERERVEJLEDNING.en}
                className="anchorTag font-bold"
              >
                Teacher&apos;s guide
              </a>{" "}
              with worksheets are available to download from this website, free
              of charge.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
