import { Book } from "@/components/Book";
import BookHeroSection from "@/components/BookHeroSection";
import { setRequestLocale } from "next-intl/server";

export default function BooksPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <section>
      <BookHeroSection locale={locale} />

      <Book />
    </section>
  );
}
