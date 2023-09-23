import { type PaletteMode } from "@mui/material";
import { darken, type ThemeOptions } from "@mui/material/styles";

type Func = (mode: PaletteMode) => NonNullable<ThemeOptions["components"]>;

const createComponents: Func = () => ({
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: "#fff",
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
        paddingLeft: "0px",
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        border: `1px solid ${darken("#26324a", 0.25)}`,
        borderRadius: "0.5rem",
        "&:hover": {
          border: "1px solid #7de38a",
          borderRadius: "0.5rem",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "0.5rem",
        backgroundColor: `${darken("#26324a", 0.25)}`,
        margin: 1,
        overflow: "hidden",
        minWidth: "13rem",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: "grey",
        "&:hover": {
          borderColor: "red",
        },
      },
      notchedOutline: {
        borderColor: "grey",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: "grey",
      },
    },
  },
});

export { createComponents };
