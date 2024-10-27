export interface Recruitment {
  id: number;
  userId: number;
  nickname: string;
  recruitmentCategory: "STUDY" | "PROJECT" | "READING";
  techStacks: string[];
  positions: string[];
  recruitmentDeadline: string;
  subject: string;
  progressMethods: "ONLINE" | "OFFLINE" | "ALL";
  views: number;
  created_at: string;
  updated_at: string;
  numberOfPeople: number;
  progressPeriod: number;
  contract: string;
  content: string;
}

interface RecruitmentResponse {
  count: number;
  data: Recruitment[];
}
