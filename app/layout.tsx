import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CartContextProvider from "@/contexts/CartContext";
import { mainFont } from "@/fonts/fonts";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
// import { notFound } from "next/navigation";
import "./globals.css";

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export async function generateMetadata() {
  const md: Metadata = {
    title: "Forlaget DIT",
    description: "Forlaget Dansk i Tiden (DIT)",
  };
  return md;
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await generateMetadata();

  return (
    <html lang={"da"}>
      <body
        className={`${mainFont.className} flex flex-col px-20 xl:px-56  antialiased min-h-screen w-full`}
      >
        <CartContextProvider>
          <NavBar />
          <main className="flex flex-grow flex-col ">
            {children}

            <Analytics />
          </main>
          <Footer />
        </CartContextProvider>
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
            <div className="block sm:hidden">xs</div>
            <div className="hidden sm:block md:hidden">sm</div>
            <div className="hidden md:block lg:hidden">md</div>
            <div className="hidden lg:block xl:hidden">lg</div>
            <div className="hidden xl:block 2xl:hidden">xl</div>
            <div className="hidden 2xl:block">2xl</div>
          </div>
        )}
      </body>
    </html>
  );
}
