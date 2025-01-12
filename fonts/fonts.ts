import { Arimo, Roboto } from "next/font/google";

// export const openSans = Open_Sans({
//   subsets: ["latin"],
//   weight: "variable",
// });

// export const anton = Anton({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const arimo = Arimo({
  subsets: ["latin"],
  weight: "variable",
});

export const mainFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
