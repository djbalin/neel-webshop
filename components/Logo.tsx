import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-black py-2 px-3">
      <div className=" flex items-center   relative w-[75px] h-[75px]">
        <Image
          src={"/images/logo_jan2025.svg"}
          alt="logo"
          className="object-contain "
          fill
        />
      </div>
    </div>
  );
}
