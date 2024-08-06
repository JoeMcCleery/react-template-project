import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { LoginForm } from "./views/LoginForm";
import { WelcomePage } from "./views/WelcomePage";
import { MainProvider } from "./store/mainStore";
import { Footer } from "./components/Footer";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { baseTheme } from "./themes/baseTheme";
import { BitcoinRates } from "./views/BitcoinRates";

const App = () => {
  //RETURN
  return (
    <MainProvider>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"100vh"}
        >
          <Navbar />

          <Routes>
            <Route
              index
              element={<LoginForm />}
            />

            <Route
              path="home"
              element={<WelcomePage />}
            />

            <Route
              path="bitcoin-rates"
              element={<BitcoinRates />}
            />

            <Route
              path="*"
              element={<div>Hey this path doesnt exist yet...</div>}
            />
          </Routes>

          <Footer />
        </Box>
      </ThemeProvider>
    </MainProvider>
  );
};

export default App;
