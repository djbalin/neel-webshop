import { anton } from "@/fonts/fonts";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className={`${anton.className} flex justify-center w-full mt-32 space-x-6 py-4 place-items-center  bg-orange text-center`}
    >
      <span className="font-lighter  tracking-wide text-xs sm:text-sm">
        Forlaget Ordstrøm | Engadevej 21, 3. th, KBH N | +45 23538100 |
        ordstroem.dk | forlaget@ordstroem.dk | CVR 23436451
      </span>
      <div className=" flex items-center  relative w-[45px] h-[45px]">
        <Image
          src={"/images/logo_white.svg"}
          alt="logo"
          className="inline object-contain"
          fill
        />
      </div>
    </footer>
  );
}
