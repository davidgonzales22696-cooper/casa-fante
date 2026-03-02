import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Fante — Desarrollo infantil desde el vínculo",
  description:
    "Un espacio boutique donde padres e hijos crecen juntos a través del movimiento, la guía psicológica y el acompañamiento continuo. Agenda tu entrevista inicial.",
  openGraph: {
    title: "Casa Fante — Desarrollo infantil desde el vínculo",
    description:
      "Un espacio íntimo y profesional donde el vínculo es la base del desarrollo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
