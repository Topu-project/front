"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecruitments } from "@/lib/recruitments/api";
import { Recruitment } from "@/lib/recruitments/types";

export const RecruitmentList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Recruitment[]>({
    queryKey: ["recruitments"],
    queryFn: fetchRecruitments,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div>
      {data &&
        data.map((recruitment, index) => (
          <div key={index}>
            <h2>{recruitment.subject}</h2>
            <p>Category: {recruitment.recruitmentCategories}</p>
            <p>Tech Stacks: {recruitment.techStacks.join(", ")}</p>
            <p>Positions: {recruitment.recruitmentPositions.join(", ")}</p>
            <p>Deadline: {recruitment.recruitmentDeadline}</p>
          </div>
        ))}
    </div>
  );
};
