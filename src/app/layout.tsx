import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canterbury College | Introduction to JavaScript",
  description: "Created By Edward Morris, Introduction to JavaScript, Canterbury College, 2024",
  keywords: "JavaScript, Canterbury College, 2024, Coding, Programming, Web Development, Introduction to JavaScript",
  authors: [
    {
      name: "Edward Morris",
    },
  ],
};

function Header() {
  return (
    <>
      <Navigation />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
