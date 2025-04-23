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
    <section className="flex leading-snug flex-col  space-y-10  pb-10">
      <h1 className="header">{t("title")}</h1>
      <div className="flex w-full justify-between  flex-row space-x-16">
        {/* First Article */}
        <article className="">
          <h2 className="text-2xl font-extrabold mb-4">{t("person1.title")}</h2>
          <p className="paragraph">{t("person1.p1")}</p>
          <p className="paragraph">{t("person1.p2")}</p>
          <p className="paragraph">
            {t.rich("person1.p3", { b: (chunks) => <b>{chunks}</b> })}
          </p>
          <p className="paragraph">{t("person1.p4")}</p>
          <ul className="paragraph list-disc  max-w-lg">
            <li>{t("person1.li1")}</li>
            <li>{t("person1.li2")}</li>
            <li>{t("person1.li3")}</li>
            <li>{t("person1.li4")}</li>
            <li>{t("person1.li5")}</li>
            <li>{t("person1.li6")}</li>
          </ul>
          <p>{t("person1.p5")}</p>
        </article>

        {/* Second Article */}
        <article className="">
          <h2 className="text-2xl font-extrabold mb-4">{t("person2.title")}</h2>
          <p className="paragraph">{t("person2.p1")}</p>
          <p className="paragraph">
            {t.rich("person2.p2", { b: (chunks) => <b>{chunks}</b> })}
          </p>
          <p className="paragraph">
            {t.rich("person2.p3", { b: (chunks) => <b>{chunks}</b> })}
          </p>
          <p className="paragraph">{t("person2.p4")}</p>
          <ul className="paragraph list-disc  max-w-lg">
            <li>{t("person2.li1")}</li>
            <li>{t("person2.li2")}</li>
            <li>{t("person2.li3")}</li>
            <li>{t("person2.li4")}</li>
            <li>{t("person2.li5")}</li>
          </ul>
          <p>{t("person2.p5")}</p>
        </article>
      </div>
    </section>
  );
}
