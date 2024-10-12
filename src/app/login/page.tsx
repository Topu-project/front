"use client";

import topuColors from "@/lib/colors";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "../../../public/icon/etc/system/GoogleIcon";
import queryString from "query-string";

export default function Login() {
  const GOOGLE_CLIENT_ID =
    "930251545265-8215c7g6ghgmgrdghknl511p1u75s3vh.apps.googleusercontent.com";

  const handleLogin = () => {
    const params = queryString.stringify({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: `http://localhost:8080/login/oauth2/code/google`,
      response_type: "code",
      scope: ["openid", "email", "profile"].join(" "),
      access_type: "offline",
      prompt: "consent",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  };

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
              onClick={handleLogin}
              // onClick={() => login()}
              // href={`http://localhost:8080/auth/login`}
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
