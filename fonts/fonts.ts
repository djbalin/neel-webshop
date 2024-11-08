import { Anton, Kanit, Open_Sans } from "next/font/google";

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "variable",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});
