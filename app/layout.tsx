import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // 폰트 가져오기
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "Mobile Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${jetbrainsMono.className} bg-slate-950 text-slate-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}