export { GlobalStyle } from "./globalStyle";

// base unit/ body font size used to calculate spacing etc.
const base = 16;

const colors = {
  primary: ["black", "grey"],
  secondary: ["azure", "lightblue"],
  lightgrey: "#b7b3af",
  white: "#fff",
  black: "#222"
};
// this is the default...
const breakpoints = ["40em", "52em", "64em"];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export default {
  breakpoints: breakpoints,
  fontSizes: { 0: 14, 1: 16, 2: 18, 3: 22, 4: 24, 5: 32, 6: 48, 7: 64, xs: 11 },
  lineHeights: [1, 1.2, 1.3, 1.33, 1.6, 1.8],
  colors,
  space: {
    0: 0,
    1: base / 2,
    2: base,
    3: base * 2,
    4: base * 4,
    5: base * 6,
    6: base * 8,
    7: base * 10
  },
  sizes: {
    base,
    container: 72 * base, // adjust this to suit
    articleWidth: "70ch"
  },
  fonts: {
    sans: `"Roboto", system-ui, helvetica, arial, sans-serif`,
    serif: "Georgia, Times, serif",
    mono: "Menlo, monospace"
  },
  radii: [
    "0px",
    `${base / 3}px`,
    `${base / 2}px`,
    `${base}px`,
    `${base * 2}px`,
    "9999px"
  ],
  shadows: {
    small: "0 0 9px rgba(0, 0, 0, .150)",
    medium: "4px 4px 16px rgba(0, 0, 0, .175)",
    large: "4px 4px 24px rgba(0, 0, 0, .125)",
    page: "0px 12.5px 34px rgba(0, 0, 0, .065)"
  },
  // themeable variants example
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary[1],
      "&:hover": {
        backgroundColor: colors.secondary[1],
        color: colors.primary[1]
      }
    },
    secondary: {
      color: colors.primary[1],
      backgroundColor: colors.secondary[1],
      "&:hover": {
        backgroundColor: colors.primary[1],
        color: colors.white
      }
    }
  }
};
