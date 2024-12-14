import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mushtaq's PortFolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 p-0 w-screen min-h-screen overflow-x-hidden retro-text font-vt323 w-screen h-full overflow-y-scroll overflow-x-hidden custom-scrollbar md:overflow-hidden`}>{children}
      
      </body>
    </html>
  );
}
