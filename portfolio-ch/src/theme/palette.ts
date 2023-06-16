import { type PaletteOptions, type PaletteMode } from "@mui/material";
import { lighten, darken } from "@mui/material/styles";

const createPalette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  background: {
    default: mode === "dark" ? "#d5dff2" : "#3d4c6b",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
  neutral: {
    main: "#fafbfc",
    light: lighten("#fafbfc", 0.25),
    dark: darken("#fafbfc", 0.25),
  },
  navy: {
    main: "#354052",
    light: lighten("#354052", 0.25),
    dark: darken("#354052", 0.25),
  },
  primary: {
    main: "#51bd5f",
    light: lighten("#7de38a", 0.1),
    dark: darken("#428f4c", 0.1),
  },
  secondary: {
    main: "#9062bf",
    light: lighten("#6f4f8f", 0.1),
    dark: darken("#47325c", 0.1),
  },
  error: {
    main: "#db504a",
    light: darken("#db504a", 0.1),
    dark: darken("#db504a", 0.1),
  },
  warning: {
    main: "#ff9800",
    light: lighten("#ff9800", 0.1),
    dark: darken("#ff9800", 0.1),
  },
  info: {
    main: "#44b9b9",
    light: lighten("#44b9b9", 0.1),
    dark: darken("#44b9b9", 0.1),
  },
  success: {
    main: "#93d37c",
    light: lighten("#93d37c", 0.1),
    dark: darken("#93d37c", 0.1),
  },
});

export { createPalette };
