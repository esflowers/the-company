import localFont from "next/font/local";
import { Spline_Sans_Mono } from "next/font/google";

export const brand = localFont({
    src: './ClashDisplay-Variable.ttf',
    variable: "--brand"
});

export const sans = localFont({
    src: './ClashGrotesk-Variable.ttf',
    variable: "--sans"
});

export const mono = Spline_Sans_Mono({
    variable: "--mono",
    subsets: ["latin"]
});