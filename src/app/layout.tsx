import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import textColors from "@/lib/colors";
import { white } from "@/lib/colorConfig";

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
        <header
          style={{
            textDecoration: "none !important",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingInline: "50px",
            paddingBlock: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h1 style={{ color: textColors.pointColor.purpleMain }}>
                MY-TOY
              </h1>
            </Link>
            <caption style={{ color: textColors.grey.strongGrey }}>
              Project & Study
            </caption>
          </div>

          <nav style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <Button
              href="/service"
              size="large"
              variant="contained"
              sx={{
                backgroundColor: textColors.pointColor.purpleMain,
                color: "white",
                fontSize: "18px",
                minWidth: "225px",
                maxHeight: "42.25px",
                borderRadius: 40,
              }}
            >
              チーム員募集
            </Button>
            <Button
              href="/contact"
              size="large"
              variant="outlined"
              sx={{
                backgroundColor: white,
                color: textColors.pointColor.purpleMain,
                border: `1px solid ${textColors.pointColor.purpleMain}`,
                fontSize: "18px",
                minWidth: "225px",
                maxHeight: "42.25px",
                borderRadius: 40,
              }}
            >
              ビジネス提案
            </Button>
            <div
              style={{
                width: "1px",
                height: "38px",
                backgroundColor: textColors.pointColor.purpleMain,
                marginLeft: "10px",
              }}
            />
            <Button
              href="/login"
              size="large"
              sx={{
                color: textColors.grey.strongGrey,
                fontSize: "18px",
                minWidth: "125px",
                maxHeight: "42.25px",
                marginLeft: "-20px",
              }}
            >
              ログイン
            </Button>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
