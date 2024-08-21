import { Recruitment, RecruitmentResponse } from "./types";

// 클라이언트 측에서 서버 API를 호출하는 데 사용

// 모든 함수는 동일한 base URL과 인증 헤더를 사용합니다.
// 각 함수는 비동기적으로 동작하며, 네트워크 요청 실패 시 에러를 throw합니다.
// createRecruitment와 updateRecruitment는 요청 본문에 데이터를 포함합니다.
// 모든 함수는 API 응답이 성공적이지 않을 경우(response.ok가 false일 경우) 에러를 throw합니다.
// 비동기 함수로 구현되어 있어 실제 데이터베이스 작업으로 쉽게 대체할 수 있습니다.
// API 통신 로직을 한 곳에서 관리할 수 있어 유지보수가 용이하며, 필요한 경우 쉽게 수정할 수 있습니다. 또한, 이 함수들은 서버 사이드에서 실행되므로 API_SECRET_KEY와 같은 민감한 정보를 안전하게 사용할 수 있습니다.

// 주의사항:
// 이 예시에서는 메모리 내 배열을 사용하고 있지만, 실제 애플리케이션에서는 데이터베이스를 사용해야 합니다.
// 에러 처리를 위해 try-catch 블록을 사용하는 것이 좋습니다.
// 실제 구현에서는 데이터 유효성 검사가 필요합니다.
// generateId 함수는 간단한 예시일 뿐이며, 실제로는 더 강력한 ID 생성 방법을 사용해야 합니다.
// 각 함수는 외부 API와 통신하므로, API_BASE_URL과 API_SECRET_KEY 환경 변수가 올바르게 설정되어 있어야 합니다.

// {******* START API Connection Troubleshooting Steps *******}
// 1. 환경 변수 확인
// .env.local 파일
// NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

// 2. API 기본 URL 설정 확인
// app/_lib/recruitments/api.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

// 3. API 라우트 구현 확인 (만약 Next.js API 라우트를 사용하는 경우) : Next.js API 라우트를 사용하는 경우, /api/recruitments 엔드포인트가 올바르게 구현되어 있는지 확인하세요. 예시 코드는 간단한 GET 요청 핸들러를 보여줍니다.
// pages/api/recruitments.ts 또는 app/api/recruitments/route.ts

// 4. 에러 처리 개선 : useQuery 훅에 retry 옵션을 추가하여 실패 시 자동으로 재시도하도록 합니다. onError 콜백을 사용하여 에러를 콘솔에 로깅합니다.
// app/_components/recruitments/RecruitmentList.tsx
// {******* END API Connection Troubleshooting Steps *******}

// 채용 정보를 가져오는 API 호출 함수 fetchRecruitments를 정의
// :모든 채용 정보를 반환합니다. 실제 구현에서는 데이터베이스 쿼리를 수행해야 합니다.
export const fetchRecruitments = async (): Promise<Recruitment[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recruitments`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recruitments");
  }
  return response.json();
};
// export const fetchRecruitments = async (): Promise<RecruitmentResponse> => {
//   console.log("Fetching from:", `${API_BASE_URL}/recruitments`); // 디버깅용 로그
//   const response = await fetch(`${API_BASE_URL}/recruitments`, {
//     headers: {
//       "Content-Type": "application/json",
//       // Authorization 헤더는 필요한 경우에만 추가
//     },
//   });

//   if (!response.ok) {
//     console.error("API response error:", response.status, response.statusText); // 디버깅용 로그
//     throw new Error(`API error: ${response.status} ${response.statusText}`);
//   }

//   return response.json();
// };

// POST 요청을 사용하여 새로운 채용 정보를 생성, 생성된 채용 정보를 응답으로 받아 반환합니다.
// :새로운 채용 정보를 생성합니다. generateId 함수를 사용하여 유니크 ID를 생성합니다. 새로운 채용 정보를 배열에 추가하고 반환합니다.
export const createRecruitment = async (
  data: Omit<Recruitment, "id">
): Promise<Recruitment> => {
  const response = await fetch(`${API_BASE_URL}/recruitments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create recruitment");
  }

  return response.json();
};

// PUT 요청을 사용하여 기존 채용 정보를 업데이트, 업데이트된 채용 정보를 응답으로 받아 반환합니다.
// :기존 채용 정보를 업데이트합니다. ID를 사용하여 업데이트할 채용 정보를 찾습니다. 채용 정보를 찾지 못하면 에러를 throw합니다.
export const updateRecruitment = async (
  data: Recruitment
): Promise<Recruitment> => {
  const response = await fetch(`${API_BASE_URL}/recruitments/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update recruitment");
  }

  return response.json();
};

// DELETE 요청을 사용하여 특정 ID의 채용 정보를 삭제, 성공적으로 삭제되면 아무 것도 반환하지 않습니다.
// :특정 ID의 채용 정보를 삭제합니다. ID를 사용하여 삭제할 채용 정보를 찾습니다. 채용 정보를 찾지 못하면 에러를 throw합니다.
export const deleteRecruitment = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/recruitments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete recruitment");
  }
};
