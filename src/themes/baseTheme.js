import { indigo, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: orange,
  },
  shape: { borderRadius: 16 },
});
