"use client";

import topuColors from "@/lib/colors";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "../../../public/icon/etc/system/GoogleIcon";

export default function Login() {
  return (
    <React.Fragment>
      <Stack
        sx={{
          // width: "-webkit-fill-available",
          // height: "-webkit-fill-available",
          minHeight: "-webkit-fill-available",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: "100px",
        }}
      >
        <Box
          sx={{
            width: "580px",
            height: "366px",
            border: `6px solid ${topuColors.pointColor.purpleMain}`,
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "240px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              TOPUへようこそ！
            </Typography>
            <Typography fontSize={"18px"} textAlign={"center"}>
              勉強会やサイドプロジェクトを見つける最も簡単な方法！
              TOPUで一緒にやるチームメンバーを探す
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <Button
              href={`http://localhost:8080/auth/login`}
              size="large"
              variant="contained"
              sx={{
                backgroundColor: topuColors.grey.lightGrey,
                color: topuColors.basic.black,
                // border: `1px solid ${topuColors.pointColor.purpleMain}`,
                fontSize: "12px",
                minWidth: "225px",
                maxHeight: "42.25px",
                borderRadius: 40,
                // ":hover": {
                //   backgroundColor: "rgba(0, 0, 0, 0) !important",
                //   boxShadow: "none !important",
                //   border: `1px solid rgba(155, 39, 176, 0.6) !important`,
                // },
                // "&:active": {
                //   backgroundColor: "rgba(0, 0, 0, 0) !important",
                //   boxShadow: "none !important",
                //   border: `1px solid rgba(155, 39, 176, 0.6) !important`,
                // },
              }}
              startIcon={<GoogleIcon />}
            >
              Googleでログイン
            </Button>
          </Box>
        </Box>
      </Stack>
    </React.Fragment>
  );
}
