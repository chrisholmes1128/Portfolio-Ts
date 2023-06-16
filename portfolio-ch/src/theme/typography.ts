import { ThemeOptions } from "@mui/material";

type Func = () => NonNullable<ThemeOptions["typography"]>;

const createTypography: Func = () => ({
  fontFamily: [
    "'Circular Book'",
    "Roboto",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "'Segoe UI'",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "'Open Sans'",
    "'Helvetica Neue'",
    "sans-serif",
  ].join(","),
  fontSize: 12,
  h1: {
    fontSize: "2rem",
    letterSpacing: "1.25px",
  },
  h2: {
    fontSize: "1.75rem",
    letterSpacing: "1px",
  },
  h3: {
    fontSize: "1.5rem",
    letterSpacing: "1px",
  },
  h4: {
    fontSize: "1.25rem",
    letterSpacing: "1px",
  },
  h5: {
    fontSize: "1rem",
    letterSpacing: "1px",
  },
  h6: {
    fontSize: "0.75rem",
    letterSpacing: "1px",
  },
  body: {
    fontSize: "0.75rem",
    fontWeight: 400,
    letterSpacing: "1px"
  }
});

export { createTypography };
