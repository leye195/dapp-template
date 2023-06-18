import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export type FlexVarients = RecipeVariants<typeof flexStyle>;

export const flexStyle = recipe({
  base: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "auto",
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
      center: { alignContent: "center" },
    },
    justifyContent: {
      flexStart: { justifyContent: "flex-start" },
      flexEnd: { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      spaceBetween: { justifyContent: "space-between" },
      spaceAround: { justifyContent: "space-around" },
      spaceEvenly: { justifyContent: "space-evenly" },
    },
    width: {
      auto: { width: "auto" },
      full: { width: "100%" },
    },
  },
});
