/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from "@mui/material/styles/createPalette";

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APPSYNC_API_KEY: string;
  readonly VITE_APPSYNC_API_URL: string;
  readonly VITE_REGION: string;
  readonly VITE_USER_POOL_ID: string;
  readonly VITE_USER_POOL_WEB_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    navy: Palette["primary"];
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    navy: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
