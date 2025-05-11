import Logo from "@/app/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "@/app/constants";
export default async function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto mb-16 xs:pb-10">
        <div className="md:w-3/5">
          <header className="mb-4 md:mb-8">
            <h1 className="header mb-2">Facet</h1>
            <h2 className="text-lg xs:text-2xl font-medium xs:font-normal">
              An Engaging Textbook for Danish Education 3 • Module 5
            </h2>
          </header>
          {/* Mobile book image - only shows on small screens */}
          <div className="flex justify-center mb-8 md:hidden">
            <div className="relative aspect-[3/4] w-2/3 max-w-[300px]">
              <Image
                src="/images/forside.avif"
                alt="Facet lærebog"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <p>
              <em>Facet</em> is the perfect textbook for learners at Danish
              Education 3, Module 5, who aim for a great results at the Danish
              Exam 3 (PD3).
            </p>
            <p>
              Designed to inspire and challenge, <em>Facet</em> brings the
              Danish language to life through varied and motivating tasks that
              strengthen all four language skills. Learners explore the many
              facets of Danish in an active, learner-centered environment with a
              large selection of PD3- style exercises. At the same time, the
              book offers thorough preparation for the Danish Exam 3 through a
              large selection of PD3-style exercises.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 clickable rounded-xl bg-orange  text-white px-8 py-1 text-lg font-medium">
              <Link href={CONSTANTS.LINKS.BOOKS.da}>Read more</Link>
            </button>
          </div>
        </div>
        {/* Desktop book image - only shows on medium screens and up */}
        <div className="hidden md:flex md:w-2/5 px-6 items-center justify-center">
          <div className="relative aspect-[3/4] w-2/3 max-w-none">
            <Image
              src="/images/forside.avif"
              alt="Facet lærebog"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Full-width green section */}
      <div className="full-bleed bg-green px-8 sm:px-8 lg:px-20 mx-auto flex w-full justify-center py-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
          <div className="bg-orange max-w-md rounded-xl text-white p-4 sm:p-6 md:w-2/5 mb-4 md:mb-0">
            <h2 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">
              Preview
            </h2>
            <p className="mb-4 md:mb-8">
              Take a sneak peek inside the book – view the table of contents and
              read the first pages of Chapter 1.
            </p>
            <div className="flex justify-center">
              <Link
                href={CONSTANTS.LINKS.PREVIEW.da}
                className="clickable inline-block rounded-xl bg-blue-900 text-white py-2 md:py-3 px-6 md:px-8 text-base md:text-lg"
              >
                Read a sample here
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex items-center justify-center">
            <Image
              className="max-w-full h-auto object-contain"
              src={"/images/open_2.avif"}
              alt={"Facet book example"}
              priority
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>

      <section className="w-full xl:w-5/6 mx-auto space-y-12 md:space-y-16 pt-20 md:pt-36">
        <header className="space-y-4">
          <h2 className="text-4xl md:text-5xl">About the authors</h2>
          <p className="text-base md:text-lg">
            <em>Facet</em> is written by two experienced and renowned textbook
            authors, Fanny Slotorub and Neel Jersild Moreira, both with a long
            list of publications for DU2 and DU3.
          </p>
        </header>

        <div className="space-y-2">
          <div className="flex-1 flex flex-col md:flex-row align-top space-y-8 md:space-y-0 md:space-x-14 justify-between">
            <article className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-normal text-orange mb-4">
                Fanny Slotorub
              </h3>
              <p className="paragraph">
                Author of numerous popular textbooks in Danish as a second
                language, including <em>Grammatik i brug</em>,{" "}
                <em>At skrive</em>, and the <em>Puls</em> and <em>Fokus</em>
                -series.
              </p>
              <p className="paragraph">
                Employed at the Copenhagen Language Centre for over 20 years,
                teaching all levels of Danish Education 2 and 3. With many years
                of experience as an appointed examiner for the Danish Exams 2
                and 3. Since 2018, Fanny has been working as a pedagogical
                consultant for the Danish Agency for International Recruitment
                and Integration (SIRI).
              </p>
            </article>
            <article className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-normal text-orange mb-4">
                Neel Jersild Moreira
              </h3>
              <p className="paragraph">
                Author of a wide range of popular textbooks in Danish as a
                second language, including the <em>Puls</em> and <em>Fokus</em>
                -series, as well as <em>10 Danskere</em> and the reader{" "}
                <em>Det er dit valg, Ahmed.</em>
              </p>
              <p className="paragraph">
                Neel has taught at the Copenhagen Language Centre for several
                years, covering all levels of DU2 and DU3. Since 2018, Neel has
                been working at CSI Language Centre.
              </p>
              <p className="paragraph">
                Many years of experience as an appointed examiner and as a
                member of the exam committee.
              </p>
            </article>
          </div>
          <div className="flex justify-center md:justify-start mx-auto">
            <Link
              className={`tracking-wider clickable bg-green font-medium sm:text-lg text-white py-1 px-4 sm:px-8`}
              href={CONSTANTS.LINKS.ABOUT.da}
            >
              Read more about the authors
            </Link>
          </div>
        </div>
      </section>
      <hr className="w-full border-t border-gray-300 mt-10 mb-8"></hr>
      {/* <div className="flex max-w-[500px]"> */}
      <div className="px-4 max-w-[400px] sm:max-w-[700px] sm:pb-10 pb-6 mx-auto flex flex-row justify-center items-center md:items-start md:pl-16 text-sm md:pr-12 tracking-tight md:space-y-0 md:space-x-6 space-x-4">
        <div className="hidden sm:flex justify-center min-w-[150px]">
          <Logo height={150} width={150} disableLink={true} />
        </div>

        <p className="text-xs sm:text-sm">
          <b>Forlaget DIT - Dansk i Tiden</b> publishes teaching materials for
          Danish as a second language aimed at Danish Education 2 and 3.
        </p>
        {/* </div> */}
      </div>
    </>
  );
}
