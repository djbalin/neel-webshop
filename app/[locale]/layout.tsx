import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CartContextProvider from "@/contexts/CartContext";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { openSans } from "../../fonts/fonts";
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(locale: string) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export const metadata: Metadata = {
  title: "Forlaget DIT",
  description: "Forlaget Dansk I Tiden (DIT)",
};

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
    <html>
      <body
        className={`${openSans.className} flex flex-col antialiased min-h-screen w-full`}
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
      </body>
    </html>
  );
}
