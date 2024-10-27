import { useState } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import CommonButton from "@/component/elements/CommonButton";

// Quill.js를 dynamic import하여 서버 사이드 렌더링 문제 방지
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Quill 에디터 스타일 로드
import "react-quill/dist/quill.snow.css";
import { Recruitment } from "@/types/recruitment";
import { put } from "@/service/requestService";

interface BundledEditorProps {
  initialValue: string;
  setContent: (content: boolean) => void;
}

const boxStyle = {
  width: 970,
  height: 1600,
  p: 4,
};

export default function BundledEditor({
  initialValue,
  setContent,
}: BundledEditorProps) {
  const [content, setLocalContent] = useState(initialValue);

  const handleEditorChange = (newContent: string) => {
    setLocalContent(newContent);
  };

  const handleSave = async () => {
    // const recruitmentData = await put<Recruitment>({
    //   url: `recruitments/${slug}`,
    // });
    setContent(true);
  };

  return (
    <Box sx={boxStyle}>
      <ReactQuill value={content} onChange={handleEditorChange} theme="snow" />
      <CommonButton
        text={"登録"}
        sx={{
          backgroundColor: "#4FB1F9",
          color: "white",
          fontSize: "18px",
          minWidth: "80px",
          maxHeight: "42px",
          borderRadius: 40,
          mr: 1,
        }}
        onClick={handleSave}
      />
    </Box>
  );
}
