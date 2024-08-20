import CommonButton from "@/component/elements/CommonButton";
import { white } from "@/lib/colorConfig";
import topuColors from "@/lib/colors";
import React from "react";

export default function Login() {
  return (
    <React.Fragment>
      <CommonButton
        text={"Googleでログイン"}
        // href="/login"
        size="large"
        variant="outlined"
        sx={{
          backgroundColor: white,
          color: topuColors.pointColor.purpleMain,
          border: `1px solid ${topuColors.pointColor.purpleMain}`,
          fontSize: "18px",
          minWidth: "225px",
          maxHeight: "42.25px",
          borderRadius: 40,
          ":hover": {
            backgroundColor: "rgba(0, 0, 0, 0) !important",
            boxShadow: "none !important",
            border: `1px solid rgba(155, 39, 176, 0.6) !important`,
          },
          "&:active": {
            backgroundColor: "rgba(0, 0, 0, 0) !important",
            boxShadow: "none !important",
            border: `1px solid rgba(155, 39, 176, 0.6) !important`,
          },
        }}
      />
    </React.Fragment>
  );
}
