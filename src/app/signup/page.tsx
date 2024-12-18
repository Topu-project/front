"use client";

import { userAtom } from "@/atoms/userAtom";
import topuColors from "@/lib/colors";
import { fetchUserData } from "@/lib/userData/api";
import { UserData } from "@/lib/userData/types";
import { post } from "@/service/requestService";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  FormControl,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface FormData {
  nickname: string;
  positionName: string;
  personalHistoryYear: number;
  techStackNames: string[];
}

interface Tech {
  label: string;
}

const techs: Tech[] = [
  { label: "React" },
  { label: "Vue" },
  { label: "Angular" },
];

// API 호출 함수 정의
const createUser = async (userData: FormData) => {
  try {
    const response = await post<FormData, any>({
      url: "/auth/signup",
      body: userData,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: true,
    });
    console.log("response", response);
    // errorMessage가 있는 경우 reject하여 onError로 전달
    if (response?.errorMessage) {
      return Promise.reject(new Error(response.errorMessage));
    }
    // 응답 본문이 비어있는 경우를 처리
    if (!response || Object.keys(response).length === 0) {
      return { message: "User created successfully" };
    }
    return response;
  } catch (error) {
    console.error("Server error details:", error);
    throw error;
  }
};

export default function SignUp() {
  const setUser = useSetAtom(userAtom);
  const router = useRouter();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error" as "error" | "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const { data: userData, refetch: refetchUserData } = useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: fetchUserData,
    // 초기에는 자동으로 실행되지 않도록 설정
    enabled: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nickname: "",
      positionName: "",
      personalHistoryYear: undefined,
      techStackNames: [],
    },
  });

  // useMutation 훅 사용
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: async (data) => {
      console.log("사용자 생성 성공:", data);
      // useQuery 대신 refetch 사용
      const { data: newUserData } = await refetchUserData();

      if (newUserData) {
        setUser(newUserData);
        router.push("/");
      }
    },
    onError: (error: any) => {
      console.error("사용자 생성 실패:", error);
      // Snackbar로 에러 메시지 표시
      setSnackbar({
        open: true,
        message: error.message || "회원가입 중 오류가 발생했습니다",
        severity: "error",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Submitting data:", data);
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error("Mutation error:", error);
    }
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
          paddingBlock: "30px",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "1000px",
            height: "100%",
            border: `6px solid ${topuColors.pointColor.purpleMain}`,
            borderRadius: "20px",
            p: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={"48px"}>TOPUへようこそ</Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="nickname"
              control={control}
              defaultValue=""
              rules={{ required: "必須項目" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ニックネーム"
                  variant="outlined"
                  error={!!errors.nickname}
                  helperText={errors.nickname?.message}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="positionName"
              control={control}
              defaultValue=""
              rules={{ required: "必須項目" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="職務 "
                  variant="outlined"
                  error={!!errors.positionName}
                  helperText={errors.positionName?.message}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="personalHistoryYear"
              control={control}
              rules={{
                required: "必須項目です",
                min: { value: 0, message: "0以上の数字を入力してください" },
                max: { value: 100, message: "100以下の数字を入力してください" },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="経歴 (年数)"
                  variant="outlined"
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 100 } }}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value === "" ? undefined : Number(e.target.value)
                    )
                  }
                  error={!!errors.personalHistoryYear}
                  helperText={errors.personalHistoryYear?.message}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name="techStackNames"
              control={control}
              defaultValue={[]}
              rules={{ required: "必須項目です" }}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  multiple
                  options={techs}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="技術"
                      variant="outlined"
                      error={!!errors.techStackNames}
                      helperText={errors.techStackNames?.message}
                    />
                  )}
                  onChange={(_, newValue) => {
                    onChange(newValue.map((item) => item.label));
                  }}
                  value={value.map(
                    (label) =>
                      techs.find((tech) => tech.label === label) || { label }
                  )}
                />
              )}
            />
          </FormControl>
          <Button
            type="submit"
            sx={{
              width: "100px",
              fontSize: "20px",
              fontWeight: 600,
              backgroundColor: topuColors.pointColor.purpleMain,
            }}
            variant="contained"
          >
            登録
          </Button>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={handleCloseSnackbar}
              severity={snackbar.severity}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Box>
      </Stack>
    </React.Fragment>
  );
}
