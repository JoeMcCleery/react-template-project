import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: { main: "#214D4C", contrastText: "#efefef" },
    secondary: { main: "#3CA899", contrastText: "#ffffff" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "outlined" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
    MuiPaper: { defaultProps: { sx: { border: "solid 2px pink" } } },
  },
});
