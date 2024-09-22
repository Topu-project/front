import { getProduct, getProducts } from "@/service/products";
import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Typography,
  Chip,
  Avatar,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import { notFound } from "next/navigation";
import CommonButton from "@/component/elements/CommonButton";
import topuColors from "@/lib/colors";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `이름 : ${params.slug}`,
  };
}

export default function RecruitmentPage({ params: { slug } }: Props) {
  console.log("PantsPage params: ", slug);
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
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
              color: "#000000",
              fontFamily: "Inter",
              textSizeAdjust: 32,
              fontWeight: 800,
              lineHeight: 38.73,
              textalign: "left",
            }}
          >
            AIエデュケーションサービスチーム員募集AIエデュケーションサービスチーム員募集
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "282px",
            height: "40px",
            top: "307px",
            left: "211px",
          }}
        >
          <Avatar sx={{ width: 24, height: 24, mr: 1 }}>D</Avatar>
          <Typography variant="caption">dev_Lee 2024.06.18</Typography>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={1} sx={{ mb: 2 }}>
            {[
              { label: "募集職種", value: "プロジェクト" },
              { label: "募集人数", value: "1名" },
              { label: "単価/月", value: "LINE" },
              { label: "開発環境", value: "iOS、アンドロイド" },
              { label: "勤務方式", value: "オン・オフライン" },
              { label: "開始日", value: "2024.07.31" },
              { label: "予定期間", value: "2ヶ月" },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="caption"
                    color="primary"
                    sx={{ minWidth: 70 }}
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ minWidth: 70 }}
                >
                  使用言語
                </Typography>
                <Box>
                  <Chip label="中" size="small" sx={{ mr: 0.5 }} />
                  <Chip label="英" size="small" sx={{ mr: 0.5 }} />
                  <Chip label="韓" size="small" />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3 }} />
        </Box>
      </Box>
      <Box sx={{ maxWidth: 800, margin: "auto", p: 3 }}>
        <Typography variant="h6" gutterBottom>
          プロジェクトのご紹介
        </Typography>
        <Typography variant="body2" paragraph>
          1億から2億人の若者向けにフルリモート/アフターコロナを意識したコンテンツシェアリング(SNS統合)、を開発
        </Typography>

        <Typography variant="body2" paragraph>
          ＜複雑なシステムを単純に、かつ女性視点で、一緒につくる。＞
          アイデアを一緒に考え、"Minimum the power of two"
          とフィジカル力をそのまま「ハッピーになれるソリューション」を開発していきます。
          システム設計の側面から、サッと形にし変更に、もっと楽しく、世界中の皆と学び合ってプログラマを成長させていく。
          「ハッチポッチ」なミッションソリューション」も同時に開発し、課題設定まで共同で行います。
        </Typography>

        <Typography variant="body2" paragraph>
          ■マッチするユーザーイメージ：アプリを実際に作りこむことが好きな方：
          システム設計の全てのフローにかかわりたい方（ハッチポッチ）
          ：オブジェクト指向設計の基礎知識と、自身のアイディアでテクノロジーをイメージでき、マネージャーのガイディング・経験をベースにそれを具現化できる方
          - リーダーやマネージャー経験の方（その成功と失敗を共有したい） -
          海外でプログラマの経験がある方 -
          自己資金調達などによる独立開発者として経験のある方、パートタイムや作業時間柔軟性のある方
          -
          コンテンツクリエーションに関わるのが好きな方、インフルエンサーを目指したい方、3Dなど新分野の開発から収益化までチャレンジしてみたい方
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ■開発タイプ
        </Typography>
        <Typography variant="body2" paragraph>
          サイクロプロジェクト/ディスカバリー・プラットフォーム (MVP)
          '中国帯状部回帰中継点'
          https://github.com/nanto/html5/blob/master/15.hatchobori.html
        </Typography>

        <Typography variant="body2" paragraph>
          「テッチポッチ」は車輪を何度も作り出すことなく全世界する必要があるいっときに、ノードとエッジを一緒制作して
          制御するプロジェクトです。プロジェクト進行中にシナリオとハードウェアに載せる最適なロジックを共同設計していきフロントエンド
          や回路・開発更新を同じSNS（エンジニアリングネットワーク）を構築を推進します。
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ■チームビジョン
        </Typography>
        <Typography variant="body2" paragraph>
          日常生活にやすく寄り添えるプロダクトを驚異で解明し開発します。
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ■ポジションについて
        </Typography>
        <Typography variant="body2" paragraph>
          性別、アレルゲンとして区別せずともなく、チームとソリューションを考案する人材興味としてフロントエンド経験のある
          職種メンバーを募集しております。
          同時にインプレッションはシルバー世代のポテンシャルを対象に、チームで議論できながらも自由な試行を共有する革新のあるポジション
          です。
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ＜仕事概要について＞
        </Typography>
        <Typography variant="body2" paragraph>
          入社直後はエンジニアサブリーダーとしてプロジェクト参画し入り、段階を踏みながらエンジニア・PM(サービスマネージャー)を担当
          頂いていただきます。
          マネージャー業務だけでなく、座開発と30時間作業を両立していただきます。
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ■主な業務内容
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>開発メンバーのマネジメント／キャリア支援</li>
            <li>
              React & Flutter (GitFlow)
              などを利用したプログラマのサードパーティスクリプト系のプラグイン作成開発
            </li>
            <li>スケジュールグルーブに一緒に"LGU+"によるアジャイル開発</li>
            <li>
              1000万DLのLGU+によるアジャイル実践プロセスの実践、クラウドサービスルオンチまでのライトアップレータ実践開発
            </li>
            <li>
              プロジェクトに応じてサービス統合モーメントの実践、ブランドガイドラインの構築
            </li>
            <li>
              プロジェクト実施において複雑なタスクを束ね込んでいきながら段階見積もりできるような開発推進を実施
            </li>
          </ul>
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ■歓迎スキル/Skill
        </Typography>
        <Typography variant="body2" paragraph>
          コミュニケーションの経験を一番に重要です。
          技術を担えて理解を共有できますが、要素後方までゆたるユーザーベースの思想的交換が出来る方です。システムチーム開発
          経験をお持ちの方、チーム議論で議論的解決をする方であれば尚、簡単チーム以上経験が必須というわけではございません。
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ＜アプライ条件＞
        </Typography>
        <Typography variant="body2" paragraph>
          就業経験を含め、経歴はアプライの時点で確認していっております。面接は技量のなかにあるメソッドスタイルを中心にとなることがご
          ざいます。
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            flexWrap: "nowrap",
          }}
        >
          <Grid>
            <Typography variant="subtitle1" gutterBottom>
              コメント
            </Typography>
            <Typography
              sx={{
                //styleName: NOTO SANS/20 bold;
                fontFamily: "Noto Sans JP",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "28.96px",
                textAlign: "left",
              }}
            >
              0
            </Typography>
          </Grid>
          <Grid>
            <VisibilitySharpIcon />
            <Typography>54</Typography>
            <CheckCircleOutlineSharpIcon />
            <Typography>2</Typography>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
          <Avatar sx={{ mr: 2, width: 32, height: 32 }}>D</Avatar>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="コメントを入力"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CommonButton
            text={"コメント投稿"}
            sx={{
              variant: "contained",
              backgroundColor: topuColors.pointColor.lightBlue,
              color: "white",
              fontSize: "18px",
              minWidth: "225px",
              maxHeight: "42.25px",
              borderRadius: 40,
            }}
          ></CommonButton>
        </Box>
      </Box>
    </>
  );
}

export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = getProducts();
  return products.map((product) => ({
    slug: product,
  }));
}
