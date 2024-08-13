import * as React from "react";
import { Button, ButtonGroup, Grid, Pagination, Stack } from "@mui/material";
import topuColors from "@/lib/colors";
import Card from "@/component/templates/Card";
import MultipleSelectChip from "@/component/elements/MultipleSelectChip";
import MultipleSelect from "@/component/elements/MultipleSelect";
import SelectOne from "@/component/elements/SelectOne";

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
          style={{
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
              sx={{ height: "20px", mt: "38px", mb: "46px" }}
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
          <Stack sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <MultipleSelectChip label="記述スタック" />
              </Grid>
              <Grid item xs={4}>
                <MultipleSelect label="ポジション" opts={optsPosition} />
              </Grid>
              <Grid item xs={4}>
                <SelectOne label="進行方式" opts={opts} />
              </Grid>
            </Grid>
          </Stack>
          {/** cards part */}
          <Card />
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
