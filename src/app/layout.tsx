import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Toy",
  description: "Make new toy project !!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <header className={styles.header}>
          <Link href="/">
            <h1>Holala</h1>
          </Link>

          <nav className={styles.nav}>
            <Link href="/service">service</Link>
            <Link href="/contact">contact</Link>
            <Link href="/about">about</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
