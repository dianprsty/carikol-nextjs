import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CariKOL",
  description:
    "CariKOL bantu influencer membuat rate card profesional hanya dalam hitungan menit. Tinggal Klik Tanpa repot, tanpa ribet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
