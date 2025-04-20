import Image from "next/image";

export default function Logo() {
  return (
    <div className="">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        className="object-contain"
        width={150}
        height={150}
      />
    </div>
  );
}
