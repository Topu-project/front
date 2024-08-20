import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/service/ClientLayout";

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
