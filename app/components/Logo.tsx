import Image from "next/image";
import Link from "next/link";
import { CONSTANTS } from "@/app/constants";

export default function Logo({
  isEn = false,
  disableLink,
  height = 125,
  width = 125,
}: {
  isEn?: boolean;
  disableLink: boolean;
  height?: number;
  width?: number;
}) {
  if (disableLink) {
    return (
      <Image
        src={"/images/logo.png"}
        alt="logo"
        className="object-contain"
        width={width}
        height={height}
        priority
      />
    );
  }

  return (
    <Link
      href={isEn ? CONSTANTS.LINKS.HOME.en : CONSTANTS.LINKS.HOME.da}
      className=""
    >
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
