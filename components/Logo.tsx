import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "@/app/constants";
export default function Logo({
  height = 150,
  width = 150,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <Link href={CONSTANTS.LINKS.HOME} className="">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        className="object-contain"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
