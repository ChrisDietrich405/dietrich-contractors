"use client";

import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserProvider } from "./context/UserContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

// export const metadata = {
//   title: "Dietrich Contractors",
//   description: "Dietrich Contractors delivers quality and great customer service for many of your home needs",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
