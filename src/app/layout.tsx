import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Exclusive Pay",
  description:
    "Simples pagamentos, conexões reais. Encontre tudo que precisa para processar seus pagamentos digitais com segurança na Exclusive Pay.",
  robots: "index, follow",
  keywords:
    "Pagamentos, Gateway, Payments, Plataforma, Conexões, Processar pagamentos digitais, segurança",
  openGraph: {
    images: ["/preview.png"],
    title: "Exclusive Pay",
    description:
      "Simples pagamentos, conexões reais. Encontre tudo que precisa para processar seus pagamentos digitais com segurança na Exclusive Pay.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
