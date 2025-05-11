"use client";

import { useState } from "react";
import CartButton from "./CartButton";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CONSTANTS } from "@/app/constants";
import Image from "next/image";

const DA_LINKS = {
  [CONSTANTS.LINKS.BOOKS.da]: "Bøger",
  [CONSTANTS.LINKS.PREVIEW.da]: "Læseprøve",
  [CONSTANTS.LINKS.AUDIO.da]: "Lydfiler",
  [CONSTANTS.LINKS.LAERERVEJLEDNING.da]: "Lærervejledning",
  [CONSTANTS.LINKS.ABOUT.da]: "Om forfatterne",
  [CONSTANTS.LINKS.CONTACT.da]: "Kontakt",
};

const EN_LINKS = {
  [CONSTANTS.LINKS.BOOKS.en]: "Book",
  [CONSTANTS.LINKS.PREVIEW.en]: "Preview",
  [CONSTANTS.LINKS.AUDIO.en]: "Sound files",
  [CONSTANTS.LINKS.LAERERVEJLEDNING.en]: "Teacher's guide",
  [CONSTANTS.LINKS.ABOUT.en]: "The authors",
  [CONSTANTS.LINKS.CONTACT.en]: "Contact",
};

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isEn = pathname.startsWith("/en");

  const links = isEn ? EN_LINKS : DA_LINKS;

  return (
    <nav className=" z-50  w-full  py-8 relative pb-12 lg:pb-12">
      <div className="flex items-center  justify-between lg:justify-start w-full">
        <Logo isEn={isEn} disableLink={false} />
        <div className="flex items-center lg:w-full  ">
          <div className="hidden lg:block lg:ml-6 w-full ">
            <div className="flex text-sm xl:text-base justify-evenly  w-full  ">
              <HomeButton isEn={isEn} />
              {Object.entries(links).map(([path, message]) => (
                <NavItem
                  key={path}
                  href={path}
                  text={message}
                  pathname={pathname}
                />
              ))}

              <CartButton isEn={isEn} />
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden ml-4 p-2  rounded-md text-black hover:bg-gray-100"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Link href={"/"} locale="da">
            <Image
              src={"/images/flags/dk_flag.svg"}
              alt="Danish flag"
              className={`${!isEn ? "" : "opacity-50"}`}
              width={40}
              height={40}
            />
          </Link>
          <Link href={"/en"} locale="en">
            <Image
              src={"/images/flags/uk_flag.svg"}
              alt="UK Flag"
              className={`${isEn ? "" : "opacity-50"}`}
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`lg:hidden absolute top-[10%] left-0 right-0 bg-white shadow-xl py-4 z-50 border-2 rounded-xl border-gray-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col text-lg sm:text-base space-y-5 px-6 max-w-screen-lg mx-auto">
          {Object.entries(links).map(([path, message]) => (
            <NavItem
              key={path}
              href={path}
              text={message}
              pathname={pathname}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <CartButton isEn={isEn} />
          </div>
        </div>
        {isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-0 right-0 p-2 rounded-md text-black hover:bg-gray-100"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
}

function HomeButton({ isEn }: { isEn: boolean }) {
  return (
    <Link href={isEn ? "/en" : "/"} locale="da">
      <Image
        src={"/images/home.svg"}
        alt="home"
        width={20}
        height={20}
        className="inline-block mr-2"
      />
    </Link>
  );
}

function NavItem({
  href,
  pathname,
  text,
  onClick,
}: {
  href: string;
  pathname: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <Link
      className={`block font-normal transition-colors hover:text-gray-600 ${
        pathname === href ? "underline font-medium" : ""
      }`}
      href={{ pathname: href }}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
