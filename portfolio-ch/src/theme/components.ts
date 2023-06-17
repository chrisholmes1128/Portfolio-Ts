import { type PaletteMode } from "@mui/material";
import { type ThemeOptions } from "@mui/material/styles";

type Func = (mode: PaletteMode) => NonNullable<ThemeOptions["components"]>;

const createComponents: Func = () => ({
  MuiIconButton: {
    styleOverrides: {
      root: {
        "&:hover": {
          color: "#7de38a",
          transition: "all 0.3s ease-in-out",
          transform: "scale(1.15)",
        },
      },
    },
  },
});

export { createComponents };
