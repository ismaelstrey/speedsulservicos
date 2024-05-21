import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpeedSul",
  keywords: "serviços, profissionais autônomos, pintura, pedreiria, carpintaria, eletricidade, pequenos negócios",
  description: "Conectamos clientes a uma variedade de profissionais autônomos especializados em serviços como pintura, pedreiria, carpintaria, eletricidade e muito mais. Encontre os melhores profissionais para suas necessidades de casa ou negócio.",
  robots: "index, follow",
  authors: {
    name: "Ismael Strey Pereira",
    url: "https://strey.com.br"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <script async src="https://apps-ackee.xlwycb.easypanel.host/tracker.js" data-ackee-server="https://apps-ackee.xlwycb.easypanel.host" data-ackee-domain-id="7420864f-16d3-44ac-99d7-582cd4348345"></script>
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
//
