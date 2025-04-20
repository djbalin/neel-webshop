import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className={`flex justify-center w-full space-x-6 py-4 place-items-center  bg-orange text-center`}
    >
      <span className="font-lighter  tracking-wide text-xs sm:text-sm">
        Forlaget DIT | Engadevej 21, 3. th, KBH N | +45 60550776 |
        forlagetdit.dk | forlaget@dit.dk | CVR 45152383
      </span>
      <div className="bg-black py-1 px-2 items-center text-center justify-center">
        <div className=" flex items-center   relative w-8 h-8 text-center justify-center">
          <Image
            src={"/images/logo_jan2025.svg"}
            alt="logo"
            className="object-contain "
            fill
          />
        </div>
      </div>
    </footer>
  );
}
