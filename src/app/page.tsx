import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import topuColors from "@/lib/colors";
import Card from "@/component/templates/Card";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <>
      <Stack
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Stack
          sx={{
            overflow: "hidden",
            backgroundColor: "#d9d9d9",
            width: "100%",
            height: "306px",
            marginInline: "auto",
            borderRadius: "36px",
            background: "#d9d9d9",
          }}
        />
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "42px",
          }}
        >
          {/** header part */}
          <Stack>
            <Stack
              style={{
                font: "24px bold",
                color: topuColors.pointColor.purpleMain,
              }}
            >
              今週の話題
            </Stack>
          </Stack>
          {/** cards part */}
          <Card />
        </Stack>
        <Pagination
          count={10}
          variant="outlined"
          color="secondary"
          sx={{ marginInline: "auto", marginBottom: "30px" }}
        />
      </Stack>
    </>
  );
}
