"use client";
import Book1 from "@/components/Book1";
import Book2 from "@/components/Book2";
import BookHeroSection from "@/components/BookHeroSection";
import { useState } from "react";

export default function BooksPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [activeBook, setActiveBook] = useState<"book1" | "book2">("book1");
  // setRequestLocale(locale);

  return (
    <>
      <BookHeroSection locale={locale} />

      <div className="fixed bottom-20 flex flex-col right-10 ">
        <button
          onClick={() => setActiveBook("book1")}
          className={`px-4 py-2 font-bold rounded ${
            activeBook === "book1" ? "bg-green text-white" : "bg-gray-400"
          }`}
        >
          VERSION 1
        </button>
        <button
          onClick={() => setActiveBook("book2")}
          className={`px-4 mt-2 py-2 font-bold rounded ${
            activeBook === "book2" ? "bg-green text-white" : "bg-gray-400"
          }`}
        >
          VERSION 2
        </button>
      </div>

      {activeBook === "book1" ? (
        <Book1 locale={locale} />
      ) : (
        <Book2 locale={locale} />
      )}
    </>
  );
}
