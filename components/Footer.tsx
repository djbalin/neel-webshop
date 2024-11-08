import { anton } from "@/fonts/fonts";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className={`${anton.className} w-full space-x-6 py-4 place-items-center  bg-orange text-center`}
    >
      <span className="font-lighter  tracking-wide text-xs sm:text-sm">
        Forlaget Ordstrøm | Engadevej 21, 3. th, KBH N | +45 23538100 |
        ordstroem.dk | forlaget@ordstroem.dk | CVR 23436451
      </span>
      <Image
        className="inline "
        src={"/images/logo_white.svg"}
        alt="logo"
        width={30}
        height={30}
      />
    </footer>
  );
}
