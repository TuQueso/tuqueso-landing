import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tu Queso · Queso artesanal a tu puerta",
  description:
    "Queso artesanal sin lactosa, sin gluten, hecho a mano en Chile. Despacho a domicilio en la zona oriente de Santiago.",
  openGraph: {
    title: "Tu Queso · Queso artesanal a tu puerta",
    description:
      "Sin lactosa, sin gluten, hecho a mano en Chile. Despacho a domicilio.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
