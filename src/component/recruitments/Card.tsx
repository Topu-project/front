import topuColors from "@/lib/colors";
import { Recruitment } from "@/lib/recruitments/types";
import { useRouter } from "next/navigation";
import {
  Bookmarks,
  Javascript,
  Person,
  PolicyTwoTone,
} from "@mui/icons-material";
import { Box, ButtonBase, Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface CardProps {
  recruitment: Recruitment;
}
const Card: React.FC<CardProps> = ({ recruitment }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/recruitment/${recruitment.id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "270px",
        height: "254px",
        borderRadius: "5px",
        border: `1px solid ${topuColors.grey.grey600}`,
        overflow: "hidden",
        p: "20px",
        pb: 0,
        cursor: "pointer",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
      }}
      onClick={handleCardClick}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: `0.5px solid ${topuColors.grey.middlegGrey}`,
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "column" }}>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                // width: "60px",
                height: "17px",
                backgroundColor: "#CDE8FC",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "1.7",
                paddingInline: "4px",
              }}
            >
              {recruitment.recruitmentCategories}
            </Typography>
            <Divider orientation="vertical" sx={{ height: "17px" }} />
            <Typography
              sx={{
                // width: "60px",
                height: "17px",
                backgroundColor: "#CDEFD0",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "1.7",
                paddingInline: "4px",
              }}
            >
              {recruitment.progressMethods}
            </Typography>
            <Divider orientation="vertical" sx={{ height: "17px" }} />
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "1.7",
                color: "#FFD600",
              }}
            >
              {"NEW"}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              mb: "2px",
              mt: "4px",
              ml: "4px",
            }}
          >
            {"募集締日｜~" +
              recruitment.recruitmentDeadline
                .replaceAll("-", "/")
                .substring(0, 10) +
              "まで"}
          </Typography>
        </Stack>
        <ButtonBase
          focusRipple
          sx={{ width: "20px", height: "20px", color: "#FFD600" }}
          onClick={(e) => {
            e.stopPropagation(); // 상위 Box의 onClick 이벤트 버블링을 막음
            console.log("saved!");
          }}
        >
          <Bookmarks />
        </ButtonBase>
      </Stack>
      <Typography
        sx={{
          width: "230px",
          lineHeight: 1.4,
          overflow: "hidden",
          whiteSpace: "normal",
          textOverflow: "ellipsis",
          textAlign: "left",
          wordBreak: "break-all",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          fontWeight: "800",
          marginBlock: "20px",
        }}
      >
        {recruitment.subject}
      </Typography>
      <Typography sx={{ fontSize: "12px", fontWeight: "800" }}>
        {"•" + recruitment.techStacks.join(", ")}
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: "2px",
          fontSize: "12px",
        }}
      >
        <Javascript />
        <PolicyTwoTone fontSize="small" />
        <Javascript />
        <PolicyTwoTone fontSize="small" />
        <Javascript />
        <PolicyTwoTone fontSize="small" />
        <PolicyTwoTone fontSize="small" />
        <PolicyTwoTone fontSize="small" />
      </Stack>
      <Divider sx={{ borderColor: topuColors.grey.middlegGrey }} />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "2px",
          fontSize: "12px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: " flex-end",
            marginBlock: "10px",
            fontSize: "12px",
          }}
        >
          <Person fontSize="small" />
          {recruitment.contract}
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "12px",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>
            {recruitment.numberOfPeople}
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {recruitment.progressPeriod}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
