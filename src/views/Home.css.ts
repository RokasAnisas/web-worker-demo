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

const input = style({
  borderRadius: "0.3rem",
  fontSize: "1.5rem",
  border: "1px solid #d2d2d2"
});

const container = style({
  padding: "1rem",
  backgroundColor: "#e2e2e2",
  borderRadius: "0.5rem",
  gap: "0.5rem",
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column"
})

export const styles = {
  root,
  stack,
  input,
  workersGrid,
  container
};
