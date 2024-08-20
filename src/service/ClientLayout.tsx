"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import queryClient from "../lib/queryClient";
import ThemeRegistry from "@/app/ThemeRegistry";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeRegistry>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // 전체 뷰포트 높이를 최소한으로 설정
          }}
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
          <main
            style={{
              paddingInline: "200px",
              flex: 1, // 남은 공간을 모두 차지하도록 설정
            }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </ThemeRegistry>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
