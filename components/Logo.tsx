import Image from "next/image";

export default function Logo({
  height = 150,
  width = 150,
}: {
  height?: number;
  width?: number;
}) {
  return (
    <div className="">
      <Image
        src={"/images/logo.png"}
        alt="logo"
        className="object-contain"
        width={width}
        height={height}
        priority
      />
    </div>
  );
}
