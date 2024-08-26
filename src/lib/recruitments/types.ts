// 채용 정보 관련 타입 정의

// 개별 채용 정보의 구조 정의
// export interface Recruitment {
//   id: string;
//   recruitmentCategories: string;
//   techStacks: string[];
//   recruitmentPositions: string[];
//   recruitmentDeadline: string;
//   subject: string;
// }

export interface Recruitment {
  id: string;
  created_at: string;
  updated_at: string;
  recruitment_categories: "STUDY" | "PROJECT" | "READING";
  progress_methods: "ONLINE" | "OFFLINE" | "ALL";
  tech_stacks: string[];
  positions: string;
  number_of_people: number;
  progress_period: number;
  recruitment_deadline: string;
  contract: string;
  subject: string;
  content: string;
}

// API 응답의 구조 정의
export interface RecruitmentResponse {
  data: Recruitment[];
  error: null | string;
}
