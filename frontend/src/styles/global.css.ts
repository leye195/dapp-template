import { globalStyle } from "@vanilla-extract/css";

globalStyle("html,body", {
  minHeight: "100dvh",
});

globalStyle("body.hidden", {
  overflow: "hidden",
});
