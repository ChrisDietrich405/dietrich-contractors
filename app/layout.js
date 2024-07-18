"use client";
import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Your Page Title",
  description: "A short description of your page",
  // ... other meta tags
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
