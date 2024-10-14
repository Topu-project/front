// 사용자 데이터 관련 타입 정의

export interface UserData {
  userId: number;
  email: string;
  nickname: string;
  position: string;
  techStacks: Array<string>;
  affiliation: null;
  isPublicAffiliation: boolean;
  personalHistoryYear: number;
  selfIntroduction: string;
  links: Array<string>;
  firstLogin: boolean;
}

// API 응답의 구조 정의
export interface UserDataResponse {
  data: UserData[];
  error: null | string;
}
