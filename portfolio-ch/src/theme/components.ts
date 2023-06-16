import { type PaletteMode } from "@mui/material";
import { type ThemeOptions } from "@mui/material/styles";

type Func = (mode: PaletteMode) => NonNullable<ThemeOptions["components"]>;

const createComponents: Func = () => ({
  MuiAutocomplete: {
    styleOverrides: {
      tag: {
        margin: 0,
      },
    },
  },
  MuiSpeedDialIcon: {
    styleOverrides: {
      icon: {
        width: 24,
        height: 24,
      },
    },
  },
});

export { createComponents };
