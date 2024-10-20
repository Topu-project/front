"use client";

import React, { useMemo, useState } from "react";
import RecruitmentList from "@/component/recruitments/RecruitmentList";
import { fetchRecruitments } from "@/lib/recruitments/api";
import { Recruitment } from "@/lib/recruitments/types";
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
import { useQuery } from "@tanstack/react-query";
import SelectOne from "@/component/elements/SelectOne";
import topuColors from "@/lib/colors";
import TechMultipleSelectChip from "@/component/recruitments/TechMultipleSelectChip";
import PositionMultipleSelectChip from "@/component/recruitments/PositionMultipleSelectChip";

const ITEMS_PER_PAGE = 20;

export const opts = ["ONLINE", "OFFLINE", "ALL"];

type TabType = "ALL" | "PROJECT" | "STUDY";

const RecruitmentsPage = () => {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>("ALL");
  const [stackName, setStackName] = React.useState<string[]>([]);
  const [positionName, setPositionName] = React.useState<string[]>([]);
  const [progressMethodsName, setProgressMethodsName] =
    React.useState<string>();
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchWords, setSearchWords] = useState<string>("");
  const { data, isLoading, error, refetch } = useQuery<Recruitment[]>({
    queryKey: ["recruitments", stackName],
    queryFn: () =>
      fetchRecruitments({
        techStacks: stackName ? stackName : [],
        positions: positionName ? positionName : [],
        progressMethods: progressMethodsName ? progressMethodsName : "",
        search: searchWords ? searchWords : "",
      }),
    // enabled: stackName.length > 0, // 선택된 기술 스택이 있을 때만 쿼리 실행
  });

  const handleStackChange = (newStacks: string[]) => {
    console.log("newStacks:", newStacks);
    setStackName(newStacks);
  };
  const handlePositionChange = (newPositions: string[]) => {
    console.log("newPositions:", newPositions);
    setPositionName(newPositions);
  };
  const handleProgressMethodChange = (newProgressMethods: string) => {
    console.log("newProgressMethods:", newProgressMethods);
    setProgressMethodsName(newProgressMethods);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    setSearchWords(searchInput);
  };

  React.useEffect(() => {
    refetch();
  }, [stackName, positionName, progressMethodsName, searchWords, refetch]);

  // <=========== Start Cards Filter ===========>
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    if (activeTab === "ALL") return data;
    return data.filter((item) => item.recruitmentCategories === activeTab);
  }, [data, activeTab]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setPage(1); // Reset to first page when changing tabs
  };
  // <=========== End Cards Filter ===========>

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {(error as Error).message}</div>;
  // if (!data || !Array.isArray(data)) return <div>No data available</div>;

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-start",
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
            onClick={() => handleTabChange("ALL")}
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
            onClick={() => handleTabChange("PROJECT")}
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
            onClick={() => handleTabChange("STUDY")}
          >
            勉強会
          </Button>
        </ButtonGroup>
      </Stack>
      {/** select group part */}
      <Stack sx={{ flexGrow: 1, mb: "34px" }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={3}>
            <TechMultipleSelectChip
              label="記述スタック"
              onStackChange={handleStackChange}
            />
          </Grid>
          <Grid item xs={3.5}>
            <PositionMultipleSelectChip
              label="ポジション"
              onPositionChange={handlePositionChange}
            />
          </Grid>
          <Grid item xs={3.5}>
            <SelectOne
              label="進行方式"
              opts={opts}
              onProgressMethodChange={handleProgressMethodChange}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl sx={{ width: "100%" }}>
              <Input
                id="input-with-icon-adornment"
                placeholder="検索"
                size="small"
                value={searchInput}
                onChange={handleInputChange}
                onBlur={handleSearch}
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
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        {isLoading && <div>Loading...</div>}
        {error && <div>An error occurred: {(error as Error).message}</div>}
        {!data || !Array.isArray(data) ? (
          <div>No data available</div>
        ) : (
          <Stack sx={{ width: "100%" }}>
            <RecruitmentList data={paginatedData} error={null} />
          </Stack>
        )}

        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="secondary"
        />
      </Stack>
    </Stack>
  );
};

export default RecruitmentsPage;
