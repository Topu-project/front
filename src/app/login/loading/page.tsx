"use client";

import topuColors from "@/lib/colors";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "@/lib/userData/api";
import { UserData } from "@/lib/userData/types";
import { userAtom } from "@/atoms/userAtom";
import { useAtom } from "jotai";

export default function LoginLoading() {
  const [, setUserData] = useAtom(userAtom);
  // const [, login] = useAtom(loginAction);
  // const [, logout] = useAtom(logoutAction);
  // const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  const router = useRouter();
  const {
    data: userData,
    isLoading: isUserDataLoading,
    error: userDataError,
  } = useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: fetchUserData,
  });

  useEffect(() => {
    console.log("LoginLoading userData", userData);
    if (userData && userData.firstLogin === true) {
      router.push("/signup");
    } else if (userData && userData.firstLogin === false) {
      setUserData(userData);
      router.push("/");
    }
  }, [userData]);

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
              loading・・・
            </Typography>
          </Box>
        </Box>
      </Stack>
    </React.Fragment>
  );
}
