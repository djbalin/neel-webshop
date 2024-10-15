import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex w-full px-16 flex-grow items-center justify-center space-x-8 bg-brandLightBlue2 rounded-b-[300px] mb-16">
      <div className="max-w-[500px] gap-y-2 flex-col flex-grow justify-center flex">
        <span className="flex flex-row tracking-tight items-baseline gap-x-4">
          <h1 className="text-4xl lg:text-6xl font-bold">Puls 4</h1>
          <h3 className="text-xl font-semibold">fra Ordstrøm</h3>
        </span>
        <span className="text-2xl font-light tracking-tighter">
          Få mere ud af din undervisning med vores nye læremateriale
        </span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et facere
          rerum iusto blanditiis
        </span>
        <Link
          className="bg-brandGreen text-base justify-center flex font-semibold py-1 text-white rounded-md max-w-[200px]"
          href={"/books"}
        >
          Forudbestil Nu
        </Link>
      </div>
      <div className="max-w-[400px] flex-grow items-center justify-center flex">
        <div className="absolute h-[350px] w-[350px] z-0 flex flex-grow bg-brandOrange rounded-t-[400px] rounded-b-[400px]"></div>
        <Image
          className="z-0"
          src={"/images/neel_book.png"}
          alt={""}
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
