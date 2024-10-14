"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <nav className="w-full sticky top-0 z-10 min-h-14 px-8 xl:px-20 flex items-center justify-between">
      <div>
        <span className="font-extrabold text-xl">Ordstrøm</span>
      </div>
      <div className="flex items-center gap-12">
        {Object.entries(links).map(([key, value]) => {
          return (
            <NavItem key={key} href={value} text={key} pathname={pathname} />
          );
        })}
      </div>
      <div>
        <CartButton />
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
      className={`${pathname === href && "font-bold"}`}
      href={{ pathname: href }}
    >
      {text}
    </Link>
  );
}
