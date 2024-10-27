"use client";

import * as React from "react";
import { Stack } from "@mui/material";

import RecruitmentsPage from "./recruitments/page";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  // const queryClient = new QueryClient();

  return (
    <>
      <Stack
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          // gap: "20px",
        }}
      >
        <Stack
          sx={{
            overflow: "hidden",
            backgroundColor: "#d9d9d9",
            width: "100%",
            height: "306px",
            marginInline: "auto",
            borderRadius: "10px",
            background: "#d9d9d9",
          }}
        />
        {/* <QueryClientProvider client={queryClient}> */}
        <RecruitmentsPage />
        {/* </QueryClientProvider> */}
      </Stack>
    </>
  );
}
