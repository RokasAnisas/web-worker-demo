import { style } from "@vanilla-extract/css";

const root = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  flexDirection: "column",
});

const workersGrid = style({
  display: "grid",
  width: "100%",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
});

const stack = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const styles = {
  root,
  stack,
  workersGrid
};
