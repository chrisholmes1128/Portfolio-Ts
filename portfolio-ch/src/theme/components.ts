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
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingLeft: "0px"
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        "&:hover": {
          border: "1px solid #7de38a",
          borderRadius: "0.5rem",
        },
      },
    },
  },
});

export { createComponents };
