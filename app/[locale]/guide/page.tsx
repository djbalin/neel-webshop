import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function GuidePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const t = await getTranslations("Guide");

  return (
    <div className="w-full h-full flex justify-center pt-48">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
    </div>
  );
}
