import { Book } from "@/components/Book";
import BookHeroSection from "@/components/BookHeroSection";

export default function BooksPage() {
  return (
    <section>
      <BookHeroSection />

      <Book />
    </section>
  );
}
