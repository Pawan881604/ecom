import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";
import "../components/ui/ui.css";
import Header from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer"; 
// https://www.shoppersstop.com/
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ecom",
  description: "ecom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} light text-foreground bg-background"`}>
        <Header/>
        <NextUIProvider>{children}</NextUIProvider>
        <Footer/>
      </body>
    </html>
  );
}
