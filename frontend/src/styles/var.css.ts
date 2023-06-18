import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

const root = createGlobalTheme("#root", {});

const colors = createThemeContract({
  white: "#ffffff",
  white15: "#262626",
  white30: "#4c4c4c",
  white50: "#808080",
  white75: "#bfbfbf",
  gray100: "#808080",
  gray200: "#3f3f3f",
  gray300: "#343434",
  gray400: "#292929",
  gray500: "#222222",
  gray600: "#1d1d1d",
  gray700: "#181818",
  gray800: "#111111",
  gray900: "#0a0a0a",
  dgray700: "#2F3037",
  black: "#000000",
  pri100: "#E8713F",
  pri200: "#A24F2C",
  pri300: "#8D4527",
  red100: "#EF3F5C",
  red500: "#F6515F",
  blue200: "#74D1FC",
  blue400: "#42B7FA",
  green: "#46CE7E",
  green2: "#17EC6F",
  purple: "#AE88F6",
  yellow: "#FFE094",
  yellow100: "#F4AF11",
});

export const vars = { ...root, colors };
