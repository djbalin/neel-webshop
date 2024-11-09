import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default async function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <section className="flex flex-col space-y-10 items-center px-3 sm:px-10">
      <header className="w-full ">
        <h1 className="text-4xl font-extrabold text-left tracking-[-0.05em]">
          {t("title")}
        </h1>
      </header>

      <article className="personArticle">
        {/* <div className="lg:order-2  bg-red-50 relative place-items-center sm:place-items-start w-full px-5 sm:px-0"> */}
        <div>
          <Image
            src={"/images/neel_persons.png"}
            alt={""}
            // width={300}
            // height={300}
            fill
            // className="object-contain object-top"
            sizes="(max-width: 768px) 20vw, 33vw"
          />
        </div>
        {/* </div> */}
        <div className="lg:order-1">
          <h2 className="text-2xl font-extrabold mb-4">{t("person1.title")}</h2>

          <p className="paragraph">{t("person1.p1")}</p>
          <p className="paragraph">{t("person1.p2")}</p>

          <p className="paragraph">
            {t.rich("person1.p3", {
              b: (chunks) => <b>{chunks}</b>,
            })}
          </p>

          <p className="paragraph">{t("person1.p4")}</p>

          <ul className="paragraph list-disc list-inside">
            <li>{t("person1.li1")}</li>
            <li>{t("person1.li2")}</li>
            <li>{t("person1.li3")}</li>
            <li>{t("person1.li4")}</li>
            <li>{t("person1.li5")}</li>
            <li>{t("person1.li6")}</li>
          </ul>
          <p>{t("person1.p5")}</p>
        </div>
      </article>

      <article className="personArticle">
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold">{t("person2.title")}</h2>

          <div className="relative items-start w-full px-5">
            <Image
              src={"/images/neel_persons.png"}
              alt={""}
              width={300}
              height={300}
              // fill
              // className="object-contain object-top"
              // sizes="(max-width: 768px) 80vw, 33vw"
            />
          </div>

          <p className="paragraph">{t("person2.p1")}</p>
          <p className="paragraph">{t("person2.p2")}</p>

          <p className="paragraph">
            {t.rich("person2.p3", {
              b: (chunks) => <b>{chunks}</b>,
            })}
          </p>

          <p className="paragraph">{t("person2.p4")}</p>

          <ul className="paragraph list-disc list-inside">
            <li>{t("person2.li1")}</li>
            <li>{t("person2.li2")}</li>
            <li>{t("person2.li3")}</li>
            <li>{t("person2.li4")}</li>
            <li>{t("person2.li5")}</li>
          </ul>
          <p>{t("person2.p5")}</p>
        </div>
      </article>
    </section>
  );
}
