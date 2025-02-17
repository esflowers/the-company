import type { Metadata } from "next";
import { brand, sans, mono } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profesionalización Virtual",
  description: "Desarrollo de apps móviles y web, estrategias de marketing digital y formación a través de cursos y nuestro blog. Conectamos tecnología, creatividad y aprendizaje, para potenciar tu negocio en el mundo digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${brand.variable} ${sans.variable} ${mono.variable} antialiased scroll-smooth`}>
      <body className='md:h-dvh md:max-h-dvh p-0 text-primary-200 bg-primary-950'>
        {children}
      </body>
    </html>
  );
}