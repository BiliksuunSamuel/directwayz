import { createTheme } from "@mui/material";
import { PrimaryShades } from "../colors";

export default (mode: "light" | "dark" = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: PrimaryShades[500],
        dark: PrimaryShades[600],
      },
      common: {
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  });
