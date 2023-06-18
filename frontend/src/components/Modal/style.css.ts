import { style } from "@vanilla-extract/css";

export const modalBlock = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  position: "relative",
});

export const modalBox = style({
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "white",
});

export const modalHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "12px",
});

export const modalHeaderTitle = style({
  fontWeight: 800,
  fontSize: "24px",
});

export const dimmer = style({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  top: 0,
  left: 0,
});
