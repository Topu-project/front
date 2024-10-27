interface Recruitment {
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
}

interface RecruitmentResponse {
  count: number;
  data: Recruitment[];
}
