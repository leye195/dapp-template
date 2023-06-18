"use client";

import { ComponentProps } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  ButtonVarients,
  buttonStyle,
  buttonPadding,
  buttonBorderRadius,
  buttonBackground,
  buttonHoverBackGround,
} from "./style.css";

type Props = {
  padding?: string;
  borderRadius?: string;
  bgColor?: string;
  hoverBgColor?: string;
  disabledBgColor?: string;
} & ButtonVarients &
  ComponentProps<"button">;

function Button({
  children,
  type,
  width,
  borderRadius = "8px",
  padding = "8px",
  bgColor = "transparent",
  hoverBgColor = "transparent",
  onClick,
}: Props) {
  return (
    <button
      className={`${buttonStyle({ width })}`}
      type={type}
      onClick={onClick}
      style={assignInlineVars({
        [buttonPadding]: padding,
        [buttonBorderRadius]: borderRadius,
        [buttonBackground]: bgColor,
        [buttonHoverBackGround]: hoverBgColor,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
