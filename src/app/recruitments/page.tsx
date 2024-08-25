"use client";

import RecruitmentList from "@/component/recruitments/RecruitmentList";
import { fetchRecruitments } from "@/lib/recruitments/api";
import { Recruitment } from "@/lib/recruitments/types";
import { useQuery } from "@tanstack/react-query";

const RecruitmentsPage = () => {
  const { data, isLoading, error } = useQuery<Recruitment[]>({
    queryKey: ["recruitments"],
    queryFn: fetchRecruitments,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return <RecruitmentList data={data} error={null} />;
};

export default RecruitmentsPage;
