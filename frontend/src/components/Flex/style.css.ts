import { createVar } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export type FlexVarients = RecipeVariants<typeof flexStyle>;

export const flexGap = createVar();

export const flexWidth = createVar();

export const flexStyle = recipe({
  base: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "inherit",
    width: flexWidth,
    gap: flexGap,
  },
  variants: {
    display: {
      flex: { display: "flex" },
      inlineFlex: { display: "inline-flex" },
    },
    direction: {
      col: { flexDirection: "column" },
      row: { flexDirection: "row" },
      colReverse: { flexDirection: "column-reverse" },
      rowReverse: { flexDirection: "row-reverse" },
    },
    alignItems: {
      flexStart: { alignItems: "flex-start" },
      flexEnd: { alignItems: "flex-end" },
      base: { alignItems: "baseline" },
      center: { alignItems: "center" },
    },
    justifyContent: {
      flexStart: { justifyContent: "flex-start" },
      flexEnd: { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      spaceBetween: { justifyContent: "space-between" },
      spaceAround: { justifyContent: "space-around" },
      spaceEvenly: { justifyContent: "space-evenly" },
    },
  },
});
