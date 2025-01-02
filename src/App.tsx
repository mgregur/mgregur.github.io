import { useState, useEffect } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from 'pages/Home/Home';
import Header from 'components/Header/Header';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const theme = createTheme({
  colorSchemes: {
    dark: false,
  },
});

function App() {
  const [userSelectedTheme, setUserSelectedTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'system';
  });
  const [systemTheme, setSystemTheme] = useState<string>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const theme = createTheme({
    palette: {
      mode: userSelectedTheme === 'system' ? systemTheme as PaletteMode : userSelectedTheme as PaletteMode,
    },
  });

  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const handleThemeChange = (theme: string) => {
    setUserSelectedTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header currentTheme={userSelectedTheme} handleThemeChange={handleThemeChange} />
        <Box sx={{ marginTop: "16px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
