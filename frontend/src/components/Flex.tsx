import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  display?: "flex" | "inline-flex";
} & Partial<
  Pick<
    CSSProperties,
    "flexDirection" | "width" | "gap" | "alignItems" | "justifyContent"
  >
> &
  PropsWithChildren;

function Flex({
  children,
  display = "flex",
  flexDirection = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  width = "auto",
  gap = "0px",
}: Props) {
  return (
    <div
      style={{
        display,
        flexDirection,
        alignItems,
        justifyContent,
        width,
        gap,
      }}
    >
      {children}
    </div>
  );
}

export default Flex;
