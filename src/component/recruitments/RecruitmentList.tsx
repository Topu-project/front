"use client";

import React from "react";
import { RecruitmentResponse } from "@/lib/recruitments/types";
import Card from "./Card";
import { Stack } from "@mui/material";

const RecruitmentList = ({ data }: RecruitmentResponse) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {data &&
        data.map((recruitment, index) => (
          <Card recruitment={recruitment} key={index} />
        ))}
    </Stack>
  );
};

export default RecruitmentList;
