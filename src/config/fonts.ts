import { Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";

export const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fontSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
