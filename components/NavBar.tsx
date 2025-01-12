"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import CartButton from "./CartButton";
import Logo from "./Logo";

export default function NavBar() {
  const pathname = usePathname();

  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("NavBar");

  const links = {
    "/": t("menu.home"),
    "/books": t("menu.books"),
    "/audio": t("menu.audioFiles"),
    "/materials": t("menu.materials"),
    "/answers": t("menu.answers"),
    "/about": t("menu.about"),
    "/contact": t("menu.contact"),
  };

  return (
    <nav
      className={` lg:space-x-4 xl:space-x-10 tracking-wider z-10 min-h-14  mx-auto  flex items-center  flex-wrap pt-10 pb-4`}
    >
      <Logo />

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
        className={`w-full  z-10  justify-center lg:gap-x-6 xl:gap-x-8 flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {Object.entries(links).map(([path, message]) => (
          <NavItem key={path} href={path} text={message} pathname={pathname} />
        ))}
        <CartButton />
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <Link href={pathname} locale="da">
          <Image
            src={"/images/flags/dk_flag.svg"}
            alt="Danish flag"
            className={`${locale === "da" ? "" : "opacity-50"}`}
            width={40}
            height={40}
          />
        </Link>
        <Link href={pathname} locale="en">
          <Image
            src={"/images/flags/uk_flag.svg"}
            alt="UK Flag"
            className={`${locale === "en" ? "" : "opacity-50"}`}
            width={40}
            height={40}
          />
        </Link>
      </div>
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
      className={`block mt-4  lg:inline-block lg:mt-0 mr-4 ${
        pathname === href ? "underline" : ""
      }`}
      href={{ pathname: href }}
    >
      {text}
    </Link>
  );
}
