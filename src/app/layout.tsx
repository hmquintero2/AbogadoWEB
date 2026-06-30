import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abg. John Eriquez | Abogado Especialista",
  description:
    "Despacho jurídico especializado en Derecho Civil, Penal, Laboral, Familiar y Empresarial. Más de 15 años de experiencia.",
  keywords: "abogado, despacho jurídico, derecho civil, derecho penal, Ecuador",
  authors: [{ name: "Abg. John Eriquez" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}