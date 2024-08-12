import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { languages } from "../il8n/settings";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bacheloree",
  description: "Bacheloree Web App",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}