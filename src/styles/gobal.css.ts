import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("html, body", {
  fontFamily: "sans-serif",
});

globalStyle("button", {
  border: 0,
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "#fff",
  transition: "all 0.3s ease",
  fontSize: "0.875rem",
  fontWeight: "bold",
});

globalStyle("button:hover", {
  backgroundColor: "#0056b3",
  // transform: "scale(1.01)",
});

globalStyle("button:active", {
  backgroundColor: "#003b9e",
  transform: "scale(0.98)",
});

globalStyle("button:disabled", {
  backgroundColor: "#d5d5d5",
  color: "#a5a5a5",
  pointerEvents: "none",
});
