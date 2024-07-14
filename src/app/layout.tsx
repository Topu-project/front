import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOPU",
  description: "Make new TOPU project !!",
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
    <html lang="jp" suppressHydrationWarning>
      <body
        className={inter.className}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <header
          style={{
            textDecoration: "none !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "200px",
            paddingBlock: "40px",
          }}
        >
          <Header />
        </header>
        <div style={{ paddingInline: "200px" }}>{children}</div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
