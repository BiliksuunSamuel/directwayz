import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Router } from "./router";
import { AppView } from "./views";

function App() {
  return (
    <ThemeProvider theme={theme()}>
      <AppView>
        <Router />
      </AppView>
    </ThemeProvider>
  );
}

export default App;
