"use client";

import { ComponentProps } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  buttonStyle,
  buttonPadding,
  buttonBorderRadius,
  buttonBackground,
  buttonHoverBackGround,
  buttonWidth,
} from "./style.css";

type Props = {
  padding?: string;
  borderRadius?: string;
  bgColor?: string;
  hoverBgColor?: string;
  disabledBgColor?: string;
  width?: string;
  disabled?: boolean;
} & ComponentProps<"button">;

function Button({
  children,
  type,
  width = "auto",
  borderRadius = "8px",
  padding = "8px",
  bgColor = "transparent",
  hoverBgColor = "transparent",
  disabled = false,
  onClick,
}: Props) {
  return (
    <button
      className={`${buttonStyle()}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={assignInlineVars({
        [buttonPadding]: padding,
        [buttonBorderRadius]: borderRadius,
        [buttonBackground]: bgColor,
        [buttonHoverBackGround]: hoverBgColor,
        [buttonWidth]: width,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
