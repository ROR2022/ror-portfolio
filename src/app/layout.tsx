import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const RorNavbar = dynamic(() => import("@/components/RorNavbar/RorNavbar"), {ssr: false});
const RorFooter = dynamic(() => import("@/components/RorFooter/RorFooter"), {ssr: false});



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RorPortfolio",
  description: "Ramiro Ocampo Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RorNavbar />
        <div style={{minHeight:'85vh'}}>
        {children}
        </div>
        <RorFooter />
      </body>
    </html>
  );
}
