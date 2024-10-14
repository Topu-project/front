"use client";
import { white } from "@/lib/colorConfig";
import topuColors from "@/lib/colors";
import { Typography, Stack } from "@mui/material";
import React, { useEffect } from "react";
import CommonButton from "./elements/CommonButton";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/service/requestService";
import { fetchUserData } from "@/lib/userData/api";
import { UserData } from "@/lib/userData/types";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const {
    data: userData,
    isLoading: isUserDataLoading,
    error: userDataError,
  } = useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: fetchUserData,
  });

  console.log("userData", userData);
  useEffect(() => {
    if (userData && userData.firstLogin === true) {
      router.push("/signup");
    }
  }, [userData]);
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <CommonButton
          text={"TOPU"}
          href="/"
          variant="text"
          sx={{
            fontSize: "40px",
            fontWeight: "800",
            color: topuColors.pointColor.purpleMain,
            lineHeight: 0,
          }}
        />

        <Typography sx={{ color: topuColors.grey.strongGrey }}>
          Project & Study
        </Typography>
      </Stack>

      <Stack sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <CommonButton
          text={"チーム員募集"}
          href="/service"
          size="large"
          variant="contained"
          sx={{
            backgroundColor: topuColors.pointColor.purpleMain,
            color: "white",
            fontSize: "18px",
            minWidth: "225px",
            maxHeight: "42.25px",
            borderRadius: 40,
            ":hover": {
              backgroundColor: "rgba(155, 39, 176, 0.6) !important",
              boxShadow: "none !important",
            },
            "&:active": {
              backgroundColor: "rgba(155, 39, 176, 0.6) !important",
              boxShadow: "none !important",
            },
          }}
        />
        <CommonButton
          text={"ビジネス提案"}
          href="/contact"
          size="large"
          variant="outlined"
          sx={{
            backgroundColor: white,
            color: topuColors.pointColor.purpleMain,
            border: `1px solid ${topuColors.pointColor.purpleMain}`,
            fontSize: "18px",
            minWidth: "225px",
            maxHeight: "42.25px",
            borderRadius: 40,
            ":hover": {
              backgroundColor: "rgba(0, 0, 0, 0) !important",
              boxShadow: "none !important",
              border: `1px solid rgba(155, 39, 176, 0.6) !important`,
            },
            "&:active": {
              backgroundColor: "rgba(0, 0, 0, 0) !important",
              boxShadow: "none !important",
              border: `1px solid rgba(155, 39, 176, 0.6) !important`,
            },
          }}
        />
        <div
          style={{
            width: "1px",
            height: "38px",
            backgroundColor: topuColors.pointColor.purpleMain,
            marginLeft: "10px",
          }}
        />
        {userData ? (
          <Stack>
            <CommonButton
              text={"ログアウト"}
              onClick={async () => {
                await get({
                  url: `/logout`,
                });
              }}
              size="large"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0) !important",
                color: topuColors.grey.strongGrey,
                boxShadow: "none !important",
                fontSize: "18px",
                minWidth: "125px",
                maxHeight: "42.25px",
                marginLeft: "-20px",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0) !important",
                  boxShadow: "none !important",
                  color: "rgba(0, 0, 0, 0.6)",
                },
                "&:active": {
                  backgroundColor: "rgba(0, 0, 0, 0) !important",
                  boxShadow: "none !important",
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
            />
          </Stack>
        ) : (
          <CommonButton
            text={"ログイン"}
            href="/login/"
            size="large"
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0) !important",
              color: topuColors.grey.strongGrey,
              boxShadow: "none !important",
              fontSize: "18px",
              minWidth: "125px",
              maxHeight: "42.25px",
              marginLeft: "-20px",
              ":hover": {
                backgroundColor: "rgba(0, 0, 0, 0) !important",
                boxShadow: "none !important",
                color: "rgba(0, 0, 0, 0.6)",
              },
              "&:active": {
                backgroundColor: "rgba(0, 0, 0, 0) !important",
                boxShadow: "none !important",
                color: "rgba(0, 0, 0, 0.6)",
              },
            }}
          />
        )}
      </Stack>
    </>
  );
}
