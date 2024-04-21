import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Store",
  description: "This is an ecommerce store app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} flex flex-col items-center h-screen bg-primary mx-auto `}>
        <main className="w-screen bg-primary ">
          <div className="max-w-[1400px] w-full mx-auto">
          

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
