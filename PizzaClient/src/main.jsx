import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme();

import Pizza from "./Pizza";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Pizza className="Pizza"></Pizza>
    </ThemeProvider>
  </StrictMode>
);
