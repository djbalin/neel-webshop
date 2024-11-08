import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "da"],

  // Used when no locale matches
  defaultLocale: "da",
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
