import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/lib/theme";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeRegistry from "./ThemeRegistry";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="jp" className={notoSansJP.className} suppressHydrationWarning>
      <body style={{ display: "flex", flexDirection: "column" }}>
        <ThemeRegistry>
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
          <div style={{ padding: "200px" }}>{children}</div>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
