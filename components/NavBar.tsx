"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import CartButton from "./CartButton";

export default function NavBar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("NavBar");

  const links = {
    "/": t("menu.home"),
    "/books": t("menu.books"),
    "/audio": t("menu.audio"),
    "/guide": t("menu.guide"),
    "/about": t("menu.about"),
  };

  return (
    <nav className="w-full  top-0 z-10 min-h-14 px-4 sm:px-8 xl:px-20 flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-extrabold text-xl">{t("title")}</span>
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
        {Object.entries(links).map(([path, message]) => (
          <NavItem key={path} href={path} text={message} pathname={pathname} />
        ))}
      </div>

      <Link href="/" locale="da">
        <Image
          src={"/images/flags/dk_flag.svg"}
          alt="Danish flag"
          width={30}
          height={30}
        />
      </Link>
      <Link href="/" locale="en">
        <Image
          src={"/images/flags/uk_flag.svg"}
          alt="UK Flag"
          width={30}
          height={30}
        />
      </Link>
      {/* <button onClick={async () => await setUserLocale("da")}>
        <Image
          src={"/images/flags/dk_flag.svg"}
          alt="Danish Flag"
          width={30}
          height={30}
        />
      </button>
      <button onClick={async () => await setUserLocale("en")}>
        <Image
          src={"/images/flags/uk_flag.svg"}
          alt="UK Flag"
          width={30}
          height={30}
        />
      </button> */}

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
