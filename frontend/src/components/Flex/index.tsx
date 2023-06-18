import { PropsWithChildren } from "react";
import { FlexVarients, flexStyle } from "./style.css";

type Props = PropsWithChildren & FlexVarients;

function Flex({
  children,
  display,
  direction,
  alignItems,
  justifyContent,
  width,
}: Props) {
  return (
    <div
      className={`${flexStyle({
        display,
        direction,
        alignItems,
        justifyContent,
        width,
      })}`}
    >
      {children}
    </div>
  );
}

export default Flex;
