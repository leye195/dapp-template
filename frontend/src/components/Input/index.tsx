import { ComponentPropsWithRef, forwardRef } from "react";
import { inputStyle } from "./style.css";
import { classnames } from "@/lib/utils";

type Props = ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classnames(props.className ?? "", inputStyle)}
    />
  );
});

export default Input;
