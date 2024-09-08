import { style } from "@vanilla-extract/css";

const root = style({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  width: "100%",
  gap: "0.5rem",
  border: "1px dashed #d5d5d5",
});

const resultGroup = style({
  display: "flex",
  gap: "0.25rem",
});

const resultTitle = style({
  fontWeight: "bold",
});

const resultValue = style({});

const loaderBody = style({
  width: "100%",
  backgroundColor: "#e2e2e2",
  height: "20px",
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
});

const loader = style({
  width: "100%",
  height: "20px",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "blue",
  transition: "all 0.3s ease",
});

export const styles = {
  root,
  resultGroup,
  loaderBody,
  loader,
  resultTitle,
  resultValue,
};
