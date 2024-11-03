const nodeLocale = Intl.DateTimeFormat().resolvedOptions().locale.split("-")[0];

export const i18n = {
  defaultLocale: nodeLocale,
  locales: ["en", "da"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
