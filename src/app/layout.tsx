import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Кофейня «Зерно» — свежий кофе в центре города",
  description:
    "Обжариваем зерно сами, варим кофе с любовью. Завтраки, десерты, кофе с собой. Открыты ежедневно с 8:00 до 22:00.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
