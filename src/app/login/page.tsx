"use client";

import topuColors from "@/lib/colors";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoogleIcon from "../../../public/icon/etc/system/GoogleIcon";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

interface UserData {
  userId: number;
  email: string;
  nickname: string;
  position: string;
  affiliation: string;
  isPublicAffiliation: boolean;
  personalHistoryYear: number;
  selfIntroduction: string;
  links: Array<any>;
}
interface LoginFailData {
  errorMessage: string;
  validationErrors: Array<any>;
}

// Get user by id
const getUserById = async (): Promise<UserData> => {
  console.log("사용자 데이터 가져오는 중...");
  const response = await fetch("http://localhost:8080/auth/2", {
    method: "GET",
    credentials: "include",
  });
  console.log("응답:", response);
  if (!response.ok) {
    throw new Error(`사용자 데이터 가져오기 실패: ${response.status}`);
  }
  return response.json();
};
// Get user by id - fail
const getUserByIdFail = async (): Promise<LoginFailData> => {
  console.log("Get user by id - fail 데이터 가져오는 중...");
  const response = await fetch("http://localhost:8080/auth/99", {
    method: "GET",
    credentials: "include",
  });
  console.log("응답:", response);
  if (!response.ok) {
    throw new Error(
      `Get user by id - fail 데이터 가져오기 실패: ${response.status}`
    );
  }
  return response.json();
};

export default function Login() {
  const router = useRouter();
  const [sessionError, setSessionError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const params = useParams<{ userId: string | "2" }>();

  // useQuery를 사용하여 사용자 데이터 가져오기
  const { refetch: refetchUserData, data: userData } = useQuery<
    UserData,
    Error
  >({
    queryKey: ["userData"],
    queryFn: getUserById,
    enabled: false, // 컴포넌트 마운트 시 자동으로 실행되지 않도록 설정
    retry: false, // 실패 시 재시도하지 않음
  });

  // Get user by id - fail 데이터 가져오기
  const { refetch: refetchLoginFail } = useQuery<LoginFailData, Error>({
    queryKey: ["loginFailData"],
    queryFn: getUserByIdFail,
    enabled: false,
    retry: false,
  });

  useEffect(() => {
    const checkSessionAndFetchUser = async () => {
      const hasSession = document.cookie.includes("SESSION=");
      if (!hasSession) {
        setSessionError("No session found. Please log in again.");
        const failData = await refetchLoginFail();
        if (failData.data) {
          alert(`Login failed: ${failData.data.errorMessage}`);
        }
        return;
      }
      setSessionError(null);
      const result = await refetchUserData();
      if (result.data) {
        router.push("/"); // Redirect to main screen on success
      } else if (result.error) {
        if (result.error.message.includes("404")) {
          router.push("/auth/signup"); // Redirect to signup if user not found
        } else {
          alert(`Login error: ${result.error.message}`);
        }
      }
    };

    checkSessionAndFetchUser();
  }, [refetchUserData, refetchLoginFail, router]);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/auth/login";
  };

  if (sessionError) {
    return <div>{sessionError}</div>;
  }

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
              onClick={handleGoogleLogin}
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
