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
  backgroundColor: "#d2d2d2",
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
  backgroundColor: "#0056b3",
  transition: "all 0.3s ease",
});

const loaderText = style({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
  fontSize: "0.75rem",
  zIndex: 2,
  top: "50%",
  color: "#fff",
});

export const styles = {
  root,
  resultGroup,
  loaderBody,
  loader,
  loaderText,
  resultTitle,
  resultValue,
};
