"use client";

import topuColors from "@/lib/colors";
import { post } from "@/service/requestService";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
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
  const response = await post<FormData, any>({
    url: "/auth/signup",
    body: userData,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return response;
};

export default function SignUp() {
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
    onSuccess: (data) => {
      console.log("사용자 생성 성공:", data);
      // 성공 시 추가 작업 (예: 로그인 페이지로 리다이렉트)
    },
    onError: (error) => {
      console.error("사용자 생성 실패:", error);
      // 에러 처리 (예: 에러 메시지 표시)
    },
  });

  const onSubmit = (data: FormData) => {
    // 폼 데이터를 API로 전송
    console.log("data", data);
    mutation.mutate(data);
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
        </Box>
      </Stack>
    </React.Fragment>
  );
}
