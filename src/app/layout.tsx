import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "CPIFP Pirámide",
  description: "Centro Público Integrado de Formación Profesional Pirámide de Huesca. Ciclos Formativos de Formación Profesional de grado medio y superior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header>
          <Image
          src="/cpifp_piramide.jpg"
          alt="CPIFP Pirámide"
          width={159}
          height={60}
          priority
          />
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/centro">El centro</Link>
            <Link href="/oferta-formativa">Oferta formativa</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
