import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "components/Header/Header";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { SiteRoutes } from "routes";

function App() {
  const [userSelectedTheme, setUserSelectedTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "system";
  });
  const [systemTheme, setSystemTheme] = useState<string>(() => {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const activeTheme = useMemo(() => {
    return userSelectedTheme === "system"
      ? (systemTheme as PaletteMode)
      : (userSelectedTheme as PaletteMode);
  }, [userSelectedTheme, systemTheme]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: activeTheme,
        },
      }),
    [activeTheme]
  );

  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleThemeChange = (theme: string) => {
    setUserSelectedTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    document.body.className = activeTheme;
  }, [activeTheme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          currentTheme={userSelectedTheme}
          handleThemeChange={handleThemeChange}
        />
        <Box
          sx={{
            paddingTop: "16px",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Routes>
            {SiteRoutes.map((siteRoute) => (
              <Route
                key={siteRoute.path}
                path={siteRoute.path}
                element={siteRoute.siteElement}
              />
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
