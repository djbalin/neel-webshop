import { Book } from "@/app/components/Book";
import BookHeroSection from "@/app/components/BookHeroSection";

export default function BooksPage() {
  return (
    <section>
      <BookHeroSection />

      <Book />
    </section>
  );
}
