// 채용 정보 관련 타입 정의

// 개별 채용 정보의 구조 정의
export interface Recruitment {
  id?: string;
  recruitmentCategories: string;
  techStacks: string[];
  recruitmentPositions: string[];
  recruitmentDeadline: string;
  subject: string;
}

// API 응답의 구조 정의
export interface RecruitmentResponse {
  data: Recruitment[];
  error: null | string;
}
