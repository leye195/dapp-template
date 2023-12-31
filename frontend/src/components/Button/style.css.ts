import { createVar } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export type ButtonVarients = RecipeVariants<typeof buttonStyle>;

// local var

export const buttonWidth = createVar();

export const buttonPadding = createVar();

export const buttonBorderRadius = createVar();

export const buttonBackground = createVar();

export const buttonHoverBackGround = createVar();

// base style
export const buttonStyle = recipe({
  base: {
    width: buttonWidth,
    background: buttonBackground,
    padding: buttonPadding,
    borderRadius: buttonBorderRadius,
    cursor: "pointer",
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    ":hover": {
      background: buttonHoverBackGround,
    },
  },
});
