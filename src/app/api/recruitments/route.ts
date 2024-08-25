import { NextApiRequest, NextApiResponse } from "next";
import { fetchRecruitments } from "@/lib/recruitments/api";
import { NextResponse } from "next/server";
import { Recruitment } from "@/lib/recruitments/types";

// 서버 사이드 API 라우트: /api/recruitments 엔드포인트를 처리하는 API 라우트

// ************ 이 API 라우트 시스템의 장점은 다음과 같습니다:
// 서버리스 함수처럼 동작하여 별도의 서버 설정 없이 API를 생성할 수 있습니다.
// 프론트엔드와 백엔드 로직을 같은 프로젝트 내에서 관리할 수 있습니다.
// 자동 코드 분할과 최적화를 제공합니다.
// 이 GET() 함수는 직접적으로 개발자가 호출하는 것이 아니라, Next.js 프레임워크에 의해 자동으로 관리되고 실행됩니다. 개발자는 단지 함수를 정의하고, 적절한 위치에 배치하면 됩니다.

// ************ GET 요청을 처리하여 채용 정보를 반환, fetchRecruitments 함수를 호출하여 데이터를 가져옵니다.
// GET() 함수는 Next.js의 API 라우트 시스템에서 자동으로 호출됩니다.
// 1.자동 라우팅: Next.js는 app/api 디렉토리 내의 파일들을 자동으로 API 엔드포인트로 인식합니다. 이 경우, /api/recruitments 경로로 들어오는 HTTP GET 요청을 자동으로 이 GET() 함수로 라우팅합니다.
// 2.HTTP 메소드 매핑: 파일 내에서 정의된 GET() 함수는 HTTP GET 요청을 처리합니다. 다른 HTTP 메소드(POST, PUT, DELETE 등)에 대해서도 같은 방식으로 함수를 정의할 수 있습니다.
// 3.요청 처리: 클라이언트가 /api/recruitments로 GET 요청을 보내면, Next.js는 자동으로 이 GET() 함수를 실행합니다. 함수 내에서 fetchRecruitments()를 호출하여 데이터를 가져오고, 그 결과를 JSON 형태로 반환합니다.
// 4.에러 처리: try-catch 블록을 사용하여 에러를 잡아내고, 에러 발생 시 500 상태 코드와 함께 에러 메시지를 반환합니다.
// 5.응답 반환: NextResponse.json()을 사용하여 JSON 형식의 응답을 생성합니다.
// export async function GET() {
//   // 여기에서 실제 데이터를 가져오는 로직을 구현합니다.
//   const recruitments: Recruitment[] = await fetchRecruitments();
//   console.log("recruitments", recruitments);
//   return NextResponse.json(recruitments);
// }
// export async function GET() {
//   // 여기에서 실제 데이터를 가져오는 로직을 구현합니다.
//   const recruitments = [
//     { id: 1, title: "Software Engineer" },
//     { id: 2, title: "Product Manager" },
//   ];

//   return NextResponse.json(recruitments);
// }
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       // 여기서 실제 데이터를 가져오는 로직을 구현
//       const recruitments = [{ id: 1, title: "Software Engineer" }];
//       res.status(200).json({ data: recruitments });
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch recruitments" });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json();
//     const newRecruitment = await createRecruitment(data);
//     return NextResponse.json(newRecruitment, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to create recruitment" },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request: NextRequest) {
//   try {
//     const data = await request.json();
//     const updatedRecruitment = await updateRecruitment(data);
//     return NextResponse.json(updatedRecruitment);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to update recruitment" },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request: NextRequest) {
//   try {
//     const { id } = await request.json();
//     await deleteRecruitment(id);
//     return NextResponse.json({ message: "Recruitment deleted successfully" });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to delete recruitment" },
//       { status: 500 }
//     );
//   }
// }
