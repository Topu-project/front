import topuColors from "@/lib/colors";
import { Recruitment } from "@/lib/recruitments/types";
import { Box, Stack } from "@mui/material";
import React from "react";

interface CardProps {
  recruitment: Recruitment;
}
const Card: React.FC<CardProps> = ({ recruitment }) => {
  return (
    <Box
      sx={{
        width: "270px",
        height: "254px",
        borderRadius: "5px",
        border: `1px solid ${topuColors.grey.grey600}`,
        overflow: "hidden",
        p: "20px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {recruitment.recruitment_categories}
        {"募集締日｜~" + recruitment.recruitment_deadline}
        {recruitment.subject}
        {recruitment.tech_stacks}
        {recruitment.id}
        {recruitment.number_of_people}
        {recruitment.progress_period}
      </Stack>
    </Box>
  );
};

export default Card;
