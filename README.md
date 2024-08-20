This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<============================================= 한국어 ============================================>

# TOPU 프로젝트

## 프로젝트 개요

[여기에 프로젝트에 대한 간단한 설명을 추가하세요]

## 폴더 구조

```
src/
├── app/                   # Next.js App Router 구조
│   ├── api/               # API 라우트
│   ├── recruitments/      # 채용 정보 페이지
│   ├── contact/           # 연락처 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 가능한 React 컴포넌트
│   ├── elements/          # 기본 UI 요소
│   ├── templates/         # 페이지 템플릿
│   └── recruitments/      # 채용 정보 관련 컴포넌트
├── lib/                   # 유틸리티 및 설정
│   └── recruitments/      # 채용 정보 관련 유틸리티
├── service/               # 비즈니스 로직 및 서비스
├── styles/                # 전역 스타일
└── types/                 # 전역 타입 정의
```

### 주요 폴더 설명

- `app/`: Next.js의 App Router를 사용하는 메인 애플리케이션 디렉토리입니다. 페이지 및 API 라우트가 포함됩니다.
- `components/`: 재사용 가능한 React 컴포넌트들이 위치합니다. UI 요소, 템플릿, 기능별 컴포넌트로 구분됩니다.
- `lib/`: 유틸리티 함수, 설정 파일, API 클라이언트 등이 포함됩니다.
- `service/`: 비즈니스 로직이나 외부 서비스와의 통신을 담당하는 코드가 위치합니다.
- `styles/`: 전역 스타일 및 스타일 관련 파일들이 위치합니다.
- `types/`: 전역적으로 사용되는 TypeScript 타입 정의 파일들이 위치합니다.

### 프로젝트 폴더 구조 상세 설명

## src/

프로젝트의 소스 코드가 위치하는 최상위 디렉토리입니다.

### app/

Next.js의 App Router를 사용하는 메인 애플리케이션 디렉토리입니다.

- `layout.tsx`: 전체 애플리케이션의 레이아웃을 정의합니다.
- `page.tsx`: 루트 경로('/')의 페이지 컴포넌트입니다.

#### api/

서버 사이드 API 라우트를 포함합니다.

- `recruitments/route.ts`: 채용 정보 관련 API 엔드포인트를 정의합니다.

#### recruitments/

채용 정보 관련 페이지 컴포넌트들이 위치합니다.

- `layout.tsx`: 채용 정보 페이지의 레이아웃을 정의합니다.
- `page.tsx`: 채용 정보 목록 페이지 컴포넌트입니다.

#### contact/

연락처 페이지 관련 컴포넌트가 위치합니다.

- `page.tsx`: 연락처 페이지 컴포넌트입니다.

### components/

재사용 가능한 React 컴포넌트들이 위치합니다.

#### elements/

작은 단위의 UI 컴포넌트들이 포함됩니다.

- `CommonButton.tsx`: 공통으로 사용되는 버튼 컴포넌트
- `MultipleSelect.tsx`: 다중 선택 컴포넌트
- `MultipleSelectChip.tsx`: 칩 형태의 다중 선택 컴포넌트
- `SelectOne.tsx`: 단일 선택 컴포넌트

#### templates/

페이지 레이아웃이나 큰 단위의 UI 섹션을 구성하는 컴포넌트들이 포함됩니다.

- `Card.tsx`: 카드 형태의 UI 컴포넌트
- `Footer.tsx`: 페이지 하단 푸터 컴포넌트
- `Header.tsx`: 페이지 상단 헤더 컴포넌트
- `PopularCard.tsx`: 인기 항목을 표시하는 카드 컴포넌트

#### recruitments/

채용 정보 관련 특정 컴포넌트들이 위치합니다.

- `RecruitmentList.tsx`: 채용 정보 목록을 표시하는 컴포넌트

### lib/

유틸리티 함수, 설정 파일, API 클라이언트 등이 포함됩니다.

- `colorConfig.ts`: 색상 설정
- `colors.tsx`: 색상 관련 유틸리티 또는 상수
- `config.ts`: 전역 설정
- `queryClient.ts`: React Query 클라이언트 설정
- `theme.tsx`: 테마 관련 설정

#### recruitments/

채용 정보 관련 유틸리티 함수와 타입 정의가 위치합니다.

- `api.ts`: 채용 정보 API 호출 함수
- `types.ts`: 채용 정보 관련 타입 정의

### service/

비즈니스 로직이나 외부 서비스와의 통신을 담당하는 코드가 위치합니다.

- `ClientLayout.tsx`: 클라이언트 사이드 레이아웃 관련 로직
- `products.ts`: 제품 관련 서비스 로직

### styles/

전역 스타일 및 스타일 관련 파일들이 위치합니다.

- `globals.css`: 전역적으로 적용되는 CSS 스타일

### types/

전역적으로 사용되는 TypeScript 타입 정의 파일들이 위치합니다.

- `recruitment.ts`: 채용 정보 관련 타입 정의 (lib/recruitments/types.ts로 이동 고려)

## 설치 및 실행

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 기여 방법

[기여 가이드라인을 추가하세요]

## 라이선스

[라이선스 정보를 추가하세요]
