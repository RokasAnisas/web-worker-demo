import { keyframes, style } from "@vanilla-extract/css";

const root = style({});

const dotKeyframes = keyframes({
  "0%": {
    opacity: 0,
  },
  "50%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

const DURATION = 0.875;
const dot = style({
  opacity: 0,
  animationName: dotKeyframes,
  animationIterationCount: "infinite",
  animationDuration: `${DURATION}s`,
  animationFillMode: "forwards",
  selectors: {
    ["&:nth-child(1)"]: {
    },
    ["&:nth-child(2)"]: {
      animationDelay: `${DURATION / 3}s`,
    },
    ["&:nth-child(3)"]: {
      animationDelay: `${(DURATION / 3) * 2}s`,
    },
  },
});

export const styles = {
  root,
  dot,
};
