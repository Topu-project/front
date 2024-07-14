"use client";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { SxProps, Theme } from "@mui/material/styles";
import { ForwardedRef, forwardRef } from "react";

export type ICommonButtonPropsType = LoadingButtonProps & {
  text: string;
  color?: string;
  sx?: SxProps<Theme>;
};

/**
 * CommonButton - 共通画面
 *
 * @description 共通で使用するボタン
 * @param { ICommonButtonPropsType } props - xxxx
 * @param { ForwardedRef<HTMLButtonElement> } ref - ref object
 * @return { JSX.Element } JSX.Element
 */
const CommonButton = forwardRef<HTMLButtonElement, ICommonButtonPropsType>(
  (
    props: ICommonButtonPropsType,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    return (
      <div>
        <LoadingButton variant="contained" {...props} ref={ref}>
          {props.text}
        </LoadingButton>
      </div>
    );
  }
);
CommonButton.displayName = "CommonButton";

export default CommonButton;
