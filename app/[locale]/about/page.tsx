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
    <section className="flex flex-col max-w-5xl mx-auto space-y-10 items-center px-3 sm:px-10 pt-8 pb-10">
      <header className="w-full">
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-left tracking-[-0.05em]">
          {t("title")}
        </h1>
      </header>

      {/* First Article */}
      <article className="personArticle w-full lg:space-x-10">
        <div className="relative h-80 lg:h-auto w-full lg:w-1/2">
          <Image
            src="/images/neel_persons.png"
            alt=""
            fill
            className="object-contain object-top"
            sizes="(max-width: 768px) 20vw, 50vw"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-extrabold mb-4">{t("person1.title")}</h2>
          <p className="paragraph">{t("person1.p1")}</p>
          <p className="paragraph">{t("person1.p2")}</p>
          <p className="paragraph">
            {t.rich("person1.p3", { b: (chunks) => <b>{chunks}</b> })}
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

      {/* Second Article */}
      <article className="personArticle w-full lg:space-x-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-extrabold mb-4">{t("person2.title")}</h2>
          <p className="paragraph">{t("person2.p1")}</p>
          <p className="paragraph">
            {t.rich("person2.p2", { b: (chunks) => <b>{chunks}</b> })}
          </p>
          <p className="paragraph">
            {t.rich("person2.p3", { b: (chunks) => <b>{chunks}</b> })}
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
        <div className="relative h-64 lg:h-auto w-full lg:w-1/2">
          <Image
            src="/images/neel_persons.png"
            alt=""
            fill
            className="object-contain object-top"
            sizes="(max-width: 768px) 20vw, 50vw"
          />
        </div>
      </article>
    </section>
  );
}
