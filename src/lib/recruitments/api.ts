import { Recruitment } from "@/lib/recruitments/types";
import { get } from "@/service/requestService";

export const fetchRecruitments = async (
  params: {
    techStacks?: string[];
    positions?: string[];
    progressMethods?: string;
    search?: string;
  } = {}
) => {
  const searchParams = new URLSearchParams();
  if (params.techStacks && params.techStacks.length > 0) {
    searchParams.append("techStacks", params.techStacks.join(","));
  }
  if (params.positions && params.positions.length > 0) {
    searchParams.append("positions", params.positions.join(","));
  }
  if (params.progressMethods) {
    searchParams.append("progressMethods", params.progressMethods);
  }
  if (params.search) {
    searchParams.append("search", params.search);
  }

  return await get<Recruitment[]>({
    url: `/recruitments/query?${searchParams.toString()}`,
  });
};
