import * as React from "react";
import { Stack } from "@mui/material";

import RecruitmentsPage from "./recruitments/page";

export default function Home() {
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

        <RecruitmentsPage />
      </Stack>
    </>
  );
}
