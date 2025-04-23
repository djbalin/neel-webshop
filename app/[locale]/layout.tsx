import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CartContextProvider from "@/contexts/CartContext";
import { mainFont } from "@/fonts/fonts";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(locale: string) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const md: Metadata = {
    title: t("title"),
    description: t("description"),
  };
  return md;
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string; // Assuming locale is a string, adjust if your data type differs
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  await generateMetadata(locale);

  return (
    <html lang={locale}>
      <body
        className={`${mainFont.className} flex flex-col px-20 xl:px-56  antialiased min-h-screen w-full`}
      >
        <NextIntlClientProvider messages={messages}>
          <CartContextProvider>
            <NavBar />
            <main className="flex flex-grow flex-col ">
              {children}

              <Analytics />
            </main>
            <Footer />
          </CartContextProvider>
        </NextIntlClientProvider>
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
