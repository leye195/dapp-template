import { ComponentPropsWithRef, forwardRef } from "react";
import { inputStyle } from "./style.css";

type Props = ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input {...props} ref={ref} className={inputStyle} />;
});

export default Input;
