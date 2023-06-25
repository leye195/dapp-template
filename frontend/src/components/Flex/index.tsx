"use client";

import { PropsWithChildren } from "react";
import { FlexVarients, flexGap, flexStyle, flexWidth } from "./style.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type Props = {
  gap?: string;
  width?: string;
} & PropsWithChildren &
  FlexVarients;

function Flex({
  children,
  display,
  direction,
  alignItems,
  justifyContent,
  width = "auto",
  gap = "0px",
}: Props) {
  return (
    <div
      className={`${flexStyle({
        display,
        direction,
        alignItems,
        justifyContent,
      })}`}
      style={assignInlineVars({
        [flexGap]: gap,
        [flexWidth]: width,
      })}
    >
      {children}
    </div>
  );
}

export default Flex;
