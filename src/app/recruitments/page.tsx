"use client";

import React, { useState } from "react";
import RecruitmentList from "@/component/recruitments/RecruitmentList";
import { fetchRecruitments } from "@/lib/recruitments/api";
import { Recruitment } from "@/lib/recruitments/types";
import { Pagination, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 20;

const RecruitmentsPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery<Recruitment[]>({
    queryKey: ["recruitments"],
    queryFn: fetchRecruitments,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <RecruitmentList data={paginatedData} error={null} />
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        color="secondary"
      />
    </Stack>
  );
};

export default RecruitmentsPage;
