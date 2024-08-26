import * as React from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import topuColors from "@/lib/colors";
import MultipleSelectChip from "@/component/elements/MultipleSelectChip";
import MultipleSelect from "@/component/elements/MultipleSelect";
import SelectOne from "@/component/elements/SelectOne";
import CommonButton from "@/component/elements/CommonButton";
import { white } from "@/lib/colorConfig";
import RecruitmentsPage from "./recruitments/page";

export default function Home() {
  const optsPosition = [
    "全体",
    "フロントエンド",
    "バッグエンド",
    "デザイナー",
    "IOS",
    "アンドロイド",
    "dev ops",
    "PM",
    "企画",
    "マーケータ",
  ];
  const opts = ["オンライン", "オフライン", "オン・オフライン"];
  return (
    <>
      <Stack
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          // gap: "20px",
        }}
      >
        <Stack
          sx={{
            overflow: "hidden",
            backgroundColor: "#d9d9d9",
            width: "100%",
            height: "306px",
            marginInline: "auto",
            borderRadius: "10px",
            background: "#d9d9d9",
          }}
        />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            // marginTop: "42px",
          }}
        >
          {/** All tap part */}
          <Stack>
            <ButtonGroup
              variant="text"
              aria-label="Basic button group"
              color="secondary"
              sx={{ height: "20px", mt: "46px", mb: "38px" }}
            >
              <Button
                sx={{
                  width: "100px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: topuColors.pointColor.purpleMain,
                }}
              >
                All
              </Button>
              <Button
                sx={{
                  width: "140px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: topuColors.grey.strongGrey,
                }}
              >
                プロジェクト
              </Button>
              <Button
                sx={{
                  width: "140px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: topuColors.grey.strongGrey,
                }}
              >
                勉強会
              </Button>
            </ButtonGroup>
          </Stack>
          {/** select group part */}
          <Stack sx={{ flexGrow: 1, mb: "34px" }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={3}>
                <MultipleSelectChip label="記述スタック" />
              </Grid>
              <Grid item xs={3}>
                <MultipleSelect label="ポジション" opts={optsPosition} />
              </Grid>
              <Grid item xs={3}>
                <SelectOne label="進行方式" opts={opts} />
              </Grid>
              {/* <Grid item xs={2}>
                <CommonButton
                  text={"👀 お気に入りを見る"}
                  href=""
                  variant="outlined"
                  sx={{
                    backgroundColor: white,
                    color: topuColors.pointColor.purpleMain,
                    border: `1px solid ${topuColors.pointColor.purpleMain}`,
                    fontSize: "14px",
                    lineHeight: "16px",
                    width: "100%",
                    height: "39px",
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
              </Grid>
              <Grid item xs={2}>
                <CommonButton
                  text={"👀 募集中のみ見る"}
                  href=""
                  variant="outlined"
                  sx={{
                    backgroundColor: white,
                    color: topuColors.pointColor.purpleMain,
                    border: `1px solid ${topuColors.pointColor.purpleMain}`,
                    fontSize: "14px",
                    lineHeight: "16px",
                    width: "100%",
                    height: "39px",
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
              </Grid> */}
              <Grid item xs={3}>
                <FormControl sx={{ width: "100%" }}>
                  <Input
                    id="input-with-icon-adornment"
                    placeholder="検索"
                    size="small"
                    sx={{
                      height: "39px",
                      backgroundColor: topuColors.grey.lightGrey,
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
          {/** cards part */}
          <RecruitmentsPage />
          {/** pagenation */}
        </Stack>
        <Pagination
          count={10}
          variant="outlined"
          color="secondary"
          sx={{ marginInline: "auto", marginBottom: "30px" }}
        />
      </Stack>
    </>
  );
}
