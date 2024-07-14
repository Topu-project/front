import * as React from "react";
import { Pagination } from "@mui/material";
import topuColors from "@/lib/colors";

export default function Home() {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "#d9d9d9",
          width: "100%",
          height: "306px",
          marginInline: "auto",
          borderRadius: "36px",
          background: "#d9d9d9",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "42px",
        }}
      >
        {/** heder part */}
        <div>
          <div
            style={{
              font: "24px bold",
              color: topuColors.pointColor.purpleMain,
            }}
          >
            今週の話題
          </div>
        </div>
        <Pagination
          count={10}
          variant="outlined"
          color="secondary"
          sx={{ marginInline: "auto", marginBottom: "30px" }}
        />
      </div>
    </div>
  );
}
