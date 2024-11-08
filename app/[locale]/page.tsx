import { Locale } from "@/i18n/config";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getTranslations({ locale: lang, namespace: "HomePage" });

  return (
    <section className="flex flex-col md:flex-row w-full px-4 md:px-8 lg:px-16 py-8 md:py-16 items-center justify-center space-y-8 md:space-y-0 md:space-x-8 bg-brandLightBlue2 rounded-b-[150px] md:rounded-b-[300px] mb-8 md:mb-16">
      <div className="w-full md:max-w-[500px] gap-y-2 flex-col flex-grow justify-center flex text-center md:text-left">
        <span className="flex flex-col md:flex-row tracking-tight items-center md:items-baseline gap-y-2 md:gap-x-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Puls 4</h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            {t("title")}
          </h1>
          <h3 className="text-lg md:text-xl font-semibold">fra Ordstrøm</h3>
        </span>
        <span className="text-xl md:text-2xl font-light tracking-tighter mt-2 md:mt-0">
          Få mere ud af din undervisning med vores nye læremateriale
        </span>
        <span className="mt-2 md:mt-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facere
          rerum iusto blanditiis
        </span>
        <Link
          className="bg-brandGreen text-base justify-center flex font-semibold py-2 px-4 text-white rounded-md max-w-[200px] mx-auto md:mx-0 mt-4 md:mt-2"
          href={"/books"}
        >
          Forudbestil Nu
        </Link>
      </div>
      <div className="w-full md:max-w-[400px] flex-grow items-center justify-center flex relative">
        <div className="absolute h-[250px] w-[250px] md:h-[350px] md:w-[350px] z-0 flex flex-grow bg-brandOrange rounded-t-[300px] rounded-b-[300px] md:rounded-t-[400px] md:rounded-b-[400px]"></div>
        <Image
          className="z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-contain"
          src={"/images/neel_book.png"}
          alt={"Puls 4 book cover"}
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
