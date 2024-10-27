"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { UserProvider } from "@/providers/UserProvider";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline />
        {children}
      </UserProvider>
    </ThemeProvider>
  );
}
