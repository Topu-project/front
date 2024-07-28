import topuColors from "@/lib/colors";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Stack>
      <Box
        sx={{
          width: "100vw",
          height: "100px",
          backgroundColor: topuColors.grey.middlegGrey,
          // position: "fixed",
          bottom: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "200px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // gap: "6px",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "800",
                color: topuColors.basic.black,
              }}
            >
              TOPU
            </Typography>
          </Link>
          <Typography
            sx={{ fontSize: "10px", color: topuColors.grey.strongGrey }}
          >
            Contact team.hola.official@gmail.com Copyright Hola. All rights
            reserved
          </Typography>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: "35px" }}>
          <Link
            href="/"
            sx={{
              color: "white",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            TEXT
          </Link>
          <Link
            href="/"
            sx={{
              color: "white",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            TEXT
          </Link>
          <Link
            href="/"
            sx={{
              color: "white",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            TEXT
          </Link>
          <Link
            href="/"
            sx={{
              color: "white",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            TEXT
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
