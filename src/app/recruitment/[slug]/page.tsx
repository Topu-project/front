"use client";
import { getProduct, getProducts } from "@/service/products";
import { ArrowBack } from "@mui/icons-material";
import { Box, Typography, Chip, Avatar, Divider, Grid } from "@mui/material";
import { notFound } from "next/navigation";
import CommonButton from "@/component/elements/CommonButton";
import topuColors from "@/lib/colors";
import React, { useEffect, useState } from "react";
import { get } from "@/service/requestService";
import { Recruitment } from "@/lib/recruitments/types";
import { opts } from "@/app/recruitments/page";

export const recruitmentCategoryMap: { [key: string]: string } = {
  ONLINE: opts[0],
  OFFLINE: opts[1],
  ALL: opts[2],
};

const recruitmentCategoriesMap: { [key: string]: string } = {
  ALL: "プロジェクト・研究",
  PROJECT: "プロジェクト",
  STUDY: "研究",
};

type Props = {
  params: {
    slug: string;
  };
};

interface FetchOptions {
  url: string;
  token?: string;
  headers?: HeadersInit;
}

// "use client" 사용때문에 주석처리
// export function generateMetadata({ params }: Props) {
//   return {
//     title: `이름 : ${params.slug}`,
//   };
// }

// 날짜 형식 변환 함수(YYYY-MM-DD -> YYYY年 MM月 DD日)
const formatDateToJapanese = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getFullYear()}年 ${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}月 ${date.getDate().toString().padStart(2, "0")}日`;
};

export default function RecruitmentPage({ params: { slug } }: Props) {
  const isSelfAccount = true; // TODO: userInfo.isSelfAccount
  const product = getProduct(slug);

  const [recruitmentData, setRecruitmentData] = useState({} as Recruitment);
  if (!product) {
    notFound();
  }

  useEffect(() => {
    const hasSession = document.cookie.includes("SESSION=");
    (async () => {
      const recruitmentFetch = {
        url: "/recruitments/1",
        token: "your_token",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const recruitmentData = await get<Recruitment>({
        url: `recruitments/${slug}`,
      });
      setRecruitmentData(recruitmentData);
    })();
  }, [slug]);

  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      {/* タイトル Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <ArrowBack
          sx={{
            fontSize: "20px",
            mr: 1,
            width: 50,
            height: 50,
            top: 164,
            left: 192,
            cursor: "pointer",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
          }}
          onClick={() => {
            window.history.back();
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 1217,
            height: 23,
            top: 244,
            left: 201,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              flexGrow: 1,
              fontSize: "32px",
              fontFamily: "Inter",
              textSizeAdjust: 32,
              fontWeight: 800,
              textalign: "left",
            }}
          >
            {recruitmentData.subject}
          </Typography>
        </Box>
      </Box>

      {/* プロフィール Area */}
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          p: 3,
        }}
      >
        <Box
          sx={{
            maxWidth: 449,
            top: 20,
            alignSelf: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              padding: "10px",
              height: 40,
              width: 282,
            }}
          >
            <Box
              sx={{
                width: "282px",
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
              }}
            >
              {/* 프로필 섹션 */}
              <Avatar sx={{ width: 40, height: 40 }}>D</Avatar>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "left",
                  gap: 1,
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ width: "106px", height: "18px", textAlign: "center" }}
                >
                  nickname?
                </Typography>

                <Box
                  sx={{
                    width: "1px",
                    height: "13px",
                    backgroundColor: topuColors.pointColor.purpleMain,
                    lineHeight: "26.06px",
                  }}
                />

                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{
                    width: "90px",
                    height: "13px",
                    textAlign: "center",
                  }}
                >
                  등록 게시일?
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ mr: 4, my: 2 }} />

          {/* 정보 섹션 */}
          <Grid container spacing={1}>
            {[
              {
                label: "募集区分",
                value:
                  recruitmentCategoriesMap[
                    recruitmentData.recruitmentCategories
                  ] || recruitmentData.recruitmentCategories,
              },
              {
                label: "連絡方法",
                value:
                  recruitmentCategoryMap[recruitmentData.progressMethods] ||
                  recruitmentData.progressMethods,
              },
              { label: "使用言語", value: recruitmentData.techStacks },
              {
                label: "募集分野",
                value: recruitmentData.positions,
              },
              {
                label: "募集人数",
                value: `${recruitmentData.numberOfPeople}名`,
              },
              {
                label: "予想期間",
                value: `${recruitmentData.progressPeriod}ヶ月`,
              },
              {
                label: "締切日",
                value: formatDateToJapanese(
                  recruitmentData.recruitmentDeadline
                ),
              },
              {
                label: "連絡先",
                value: recruitmentData.contract,
              },
            ].map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: topuColors.pointColor.purpleMain,
                      minWidth: 80,
                      fontWeight: "bold",
                    }}
                  >
                    {item.label}
                  </Typography>
                  {Array.isArray(item.value) ? (
                    <Box sx={{ ml: 2, display: "flex" }}>
                      {item.value.map((lang, langIndex) => (
                        <Chip
                          key={langIndex}
                          label={lang}
                          size="small"
                          sx={{ mr: 0.5 }}
                        />
                      ))}
                    </Box>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{
                        color: topuColors.basic.black,
                        ml: 2,
                        fontWeight: "bold",
                      }}
                    >
                      {item.value}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ mr: 4, my: 2 }} />
        </Box>

        {/* 本文 Area */}
        <Box
          sx={{
            ml: 4,
            maxHeight: "400px",
            overflow: "hidden",
            "&:hover": {
              overflowY: "auto",
            },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
          }}
        >
          <Grid sx={{ flex: "row" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "black",
                  fontFamily: "Inter",
                  fontSize: "32px",
                  fontWeight: 800,
                  lineHeight: "38.73px",
                  textAlign: "left",
                }}
              >
                プロジェクトのご紹介
              </Typography>
              {isSelfAccount && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CommonButton
                    text={"修正"}
                    sx={{
                      backgroundColor: "#4FB1F9",
                      color: "white",
                      fontSize: "18px",
                      minWidth: "80px",
                      maxHeight: "42px",
                      borderRadius: 40,
                      mr: 1,
                    }}
                  />
                  <CommonButton
                    text={"削除"}
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      fontSize: "18px",
                      minWidth: "80px",
                      maxHeight: "42px",
                      borderRadius: 40,
                    }}
                  />
                </Box>
              )}
            </Box>
            <Typography variant="body2" paragraph>
              {recruitmentData.content}
            </Typography>
          </Grid>

          <Divider sx={{ my: 3 }} />
        </Box>
      </Box>
    </>
  );
}

// "use client" 사용때문에 주석처리
// export function generateStaticParams() {
//   // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
//   const products = getProducts();
//   return products.map((product) => ({
//     slug: product,
//   }));
// }
