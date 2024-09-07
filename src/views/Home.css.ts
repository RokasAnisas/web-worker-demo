import { style } from "@vanilla-extract/css";

const root = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexDirection: "column",
});

const loaderBody = style({
  width: "200px",
  backgroundColor: "#e2e2e2",
  height: "20px",
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
});

const loader = style({
  width: "200px",
  height: "20px",
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "blue",
  transition: "all 0.3s ease",
});

export const styles = {
  root,
  loaderBody,
  loader
};
