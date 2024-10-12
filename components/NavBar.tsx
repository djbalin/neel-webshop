"use client";
import Link from "next/link";
import CartButton from "./CartButton";

export default function NavBar() {
  return (
    <nav className="w-full sticky bg-orange-50 top-0 z-10 min-h-14 px-20 flex items-center justify-between">
      <div>
        <span className="font-extrabold text-xl">Ordstrøm</span>
      </div>
      <div className="flex items-center gap-12">
        <Link href="/">Forside</Link>
        <Link href="/books">Bøger</Link>
        <Link href="/audio">Lydfiler</Link>
        <Link href="/guide">Lærervejledning</Link>
        <Link href="/about">Om forlaget</Link>
      </div>
      <div>
        <CartButton />
      </div>
    </nav>
  );
}
