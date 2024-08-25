import { Recruitment } from "@/lib/recruitments/types";

// {******* START API Connection Troubleshooting Steps *******}
// 1. 환경 변수 확인
// .env.local 파일
// NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

// 2. API 기본 URL 설정 확인
// app/_lib/recruitments/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
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
    const errorData = await response.json();
    console.error("API Error:", errorData);
    throw new Error(errorData.errors?.[0] || "Failed to fetch recruitments");
  }
  return response.json();
};
// export const fetchRecruitments = async (): Promise<Recruitment[]> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/recruitments`);

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("API Error:", response.status, errorData);

//       if (
//         response.status === 500 &&
//         errorData.errors &&
//         errorData.errors[0] === "record not found"
//       ) {
//         // 레코드를 찾을 수 없는 경우, 빈 배열 반환
//         console.log("No recruitments found");
//         return [];
//       }

//       throw new Error(
//         `API error: ${response.status} ${
//           errorData.errors?.[0] || "Unknown error"
//         }`
//       );
//     }

//     const data = await response.json();
//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error("Error fetching recruitments:", error);
//     throw error;
//   }
// };

// POST 요청을 사용하여 새로운 채용 정보를 생성, 생성된 채용 정보를 응답으로 받아 반환합니다.
// :새로운 채용 정보를 생성합니다. generateId 함수를 사용하여 유니크 ID를 생성합니다. 새로운 채용 정보를 배열에 추가하고 반환합니다.

// export const createRecruitment = async (
//   data: Omit<Recruitment, "id">
// ): Promise<Recruitment> => {
//   const response = await fetch(`${API_BASE_URL}/recruitments`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create recruitment");
//   }

//   return response.json();
// };

// PUT 요청을 사용하여 기존 채용 정보를 업데이트, 업데이트된 채용 정보를 응답으로 받아 반환합니다.
// :기존 채용 정보를 업데이트합니다. ID를 사용하여 업데이트할 채용 정보를 찾습니다. 채용 정보를 찾지 못하면 에러를 throw합니다.
// export const updateRecruitment = async (
//   data: Recruitment
// ): Promise<Recruitment> => {
//   const response = await fetch(`${API_BASE_URL}/recruitments/${data.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to update recruitment");
//   }

//   return response.json();
// };

// DELETE 요청을 사용하여 특정 ID의 채용 정보를 삭제, 성공적으로 삭제되면 아무 것도 반환하지 않습니다.
// :특정 ID의 채용 정보를 삭제합니다. ID를 사용하여 삭제할 채용 정보를 찾습니다. 채용 정보를 찾지 못하면 에러를 throw합니다.
// export const deleteRecruitment = async (id: string): Promise<void> => {
//   const response = await fetch(`${API_BASE_URL}/recruitments/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to delete recruitment");
//   }
// };
