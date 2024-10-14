import { Recruitment } from "@/lib/recruitments/types";
import { get } from "@/service/requestService";

export const fetchRecruitments = async () =>
  await get<Recruitment[]>({
    url: `/recruitments/query`,
  });
