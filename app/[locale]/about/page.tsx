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
    <section className="flex w-3/4 mx-auto pt-36 flex-col items-center justify-center space-y-14 py-10">
      <header className="w-full ">
        <h1 className="text-7xl font-extrabold text-left tracking-[-0.05em]">
          {t("title")}
        </h1>
      </header>
      <article className="personArticle">
        <div className="w-1/2">
          <h2 className="text-4xl mb-8 font-extrabold">{t("person1.title")}</h2>

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
        <figure className="w-1/2">
          <Image
            src={"/images/neel_persons.png"}
            alt={""}
            width={1000}
            height={1000}
          />
        </figure>
      </article>

      <article className="personArticle">
        <figure className="w-1/2">
          <Image
            src={"/images/neel_persons.png"}
            alt={""}
            width={1000}
            height={1000}
          />
        </figure>
        <div className="w-1/2">
          <h2 className="text-4xl mb-8 font-extrabold">{t("person2.title")}</h2>

          <p className="paragraph">{t("person2.p1")}</p>
          <p className="paragraph">
            {t.rich("person2.p2", {
              b: (chunks) => <b>{chunks}</b>,
            })}
          </p>
          <p className="paragraph">{t("person2.p3")}</p>

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
