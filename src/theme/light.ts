import type { PaletteOptions, ThemeOptions } from "@mui/material";

const background: PaletteOptions["background"] = {
  paper: "#fff",
  default: "#fff",
};

const text: PaletteOptions["text"] = {
  primary: "#000000de",
  secondary: "#00000099",
  disabled: "#00000061",
};

const divider: PaletteOptions["divider"] = "#0000001f";

const primary: PaletteOptions["primary"] = {
  main: "#1976d2",
  light: "#42a5f5",
  dark: "#1565c0",
  contrastText: "#fff",
};

const secondary: PaletteOptions["secondary"] = {
  main: "#9c27b0",
  light: "#ba68c8",
  dark: "#7b1fa2",
  contrastText: "#fff",
};

const info: PaletteOptions["info"] = {
  main: "#0288d1",
  light: "#03a9f4",
  dark: "#01579b",
  contrastText: "#fff",
};

const warning: PaletteOptions["warning"] = {
  main: "#ed6c02",
  light: "#ff9800",
  dark: "#e65100",
  contrastText: "#fff",
};

const error: PaletteOptions["error"] = {
  main: "#d32f2f",
  light: "#ef5350",
  dark: "#c62828",
  contrastText: "#fff",
};

const success: PaletteOptions["success"] = {
  main: "#2e7d32",
  light: "#4caf50",
  dark: "#1b5e20",
  contrastText: "#fff",
};

const action: PaletteOptions["action"] = {
  active: "#0000008a",
  hover: "#0000000a",
  hoverOpacity: 0.04,
  selected: "#00000014",
  selectedOpacity: 0.08,
  disabled: "#00000042",
  disabledBackground: "#0000001f",
  disabledOpacity: 0.38,
  focus: "#0000001f",
  focusOpacity: 0.12,
  activatedOpacity: 0.12,
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    background,
    primary,
    secondary,
    text,
    info,
    warning,
    error,
    success,
    divider,
    action,
  },
};
