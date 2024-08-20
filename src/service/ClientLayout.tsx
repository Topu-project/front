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
        <Footer />
      </ThemeRegistry>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
