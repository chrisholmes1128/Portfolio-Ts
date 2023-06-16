import * as React from "react";

import {
  type PaletteMode,
  type Theme,
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { createComponents } from "./components";
import { createPalette } from "./palette";
import { createTypography } from "./typography";

interface IThemeProviderProps {
  children: React.ReactNode;
}

function createTheme(mode: PaletteMode): Theme {
  return createMuiTheme({
    palette: createPalette(mode),
    components: createComponents(mode),
    typography: createTypography(),
  });
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ToggleThemeContext = React.createContext(() => {});

function ThemeProvider({ children }: IThemeProviderProps): JSX.Element {
  const [theme, setTheme] = React.useState(() => createTheme("light"));

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) =>
      createTheme(prev.palette.mode === "light" ? "dark" : "light")
    );
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export { ThemeProvider, ToggleThemeContext };
