import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Leonardo Tsuji - Desenvolvedor Full Stack",
  description:
    "Portfólio pessoal de Leonardo Tsuji, desenvolvedor Full Stack com experiência em React, Node.js, TypeScript e outras tecnologias modernas.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Leonardo Tsuji" }],
  creator: "Leonardo Tsuji",
  openGraph: {
    title: "Leonardo Tsuji - Desenvolvedor Full Stack",
    description:
      "Portfólio pessoal de Leonardo Tsuji, desenvolvedor Full Stack",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Tsuji - Desenvolvedor Full Stack",
    description:
      "Portfólio pessoal de Leonardo Tsuji, desenvolvedor Full Stack",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
