import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="flex items-center gap-y-10 pt-40 flex-col w-full h-full">
      <h1 className="text-3xl font-bold">Ups, denne side eksisterer ikke</h1>
      <Link
        className="bg-black text-2xl text-white px-6 py-1 rounded-md"
        href="/"
      >
        Til Forsiden
      </Link>
    </div>
  );
}
