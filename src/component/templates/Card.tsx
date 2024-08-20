import { RecruitmentList } from "@/component/recruitments/RecruitmentList";
import topuColors from "@/lib/colors";
import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function Card() {
  return (
    <Box
      sx={{
        width: "270px",
        height: "254px",
        borderRadius: "5px",
        border: `1px solid ${topuColors.grey.grey600}`,
      }}
    >
      <Stack
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          //   gap: "20px",
          p: "20px",
        }}
      >
        <RecruitmentList />
      </Stack>
    </Box>
  );
}
