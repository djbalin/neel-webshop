"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CartButton from "./CartButton";

const links = {
  Forside: "/",
  Bøger: "/books",
  Lydfiler: "/audio",
  Lærervejledning: "/guide",
  "Om forlaget": "/about",
};

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full  top-0 z-10 min-h-14 px-4 sm:px-8 xl:px-20 flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-extrabold text-xl">Ordstrøm</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-500 hover:border-gray-500"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full justify-center gap-x-10 flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {Object.entries(links).map(([key, value]) => (
          <NavItem key={key} href={value} text={key} pathname={pathname} />
        ))}
      </div>
      <CartButton />
    </nav>
  );
}

function NavItem({
  href,
  pathname,
  text,
}: {
  href: string;
  pathname: string;
  text: string;
}) {
  return (
    <Link
      className={`block mt-4 lg:inline-block lg:mt-0 mr-4 ${
        pathname === href ? "font-bold" : ""
      }`}
      href={{ pathname: href }}
    >
      {text}
    </Link>
  );
}
