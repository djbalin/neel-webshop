import da from "./messages/da.json";

type Messages = typeof da;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
