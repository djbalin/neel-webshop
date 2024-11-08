"use client";

import { useState } from "react";
import Book1 from "./Book1";
import Book2 from "./Book2";

export function Book() {
  // export function Book({ locale }: { locale: string }) {
  const [activeBook, setActiveBook] = useState<"book1" | "book2">("book1");

  return (
    <>
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
        <Book1 />
      ) : (
        // <Book2 locale={locale} />
        <Book2 />
      )}
    </>
  );
}
