import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Divider } from "@mui/material";
import NavbarMenu from "components/Navbar/NavbarMenu/NavbarMenu";
import ThemeSelector, {
  THEME_SELECTOR_WIDTH,
} from "./ThemeSelector/ThemeSelector";

interface NavbarProps {
  currentTheme: string;
  handleThemeChange: (theme: string) => void;
}

export default function Navbar({
  currentTheme,
  handleThemeChange,
}: NavbarProps) {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ boxShadow: "none", width: "100%" }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          <Box
            sx={{
              width: `calc(100% - ${THEME_SELECTOR_WIDTH} - 32px)`,
            }}
          >
            <NavbarMenu />
          </Box>
          <ThemeSelector
            currentTheme={currentTheme}
            handleThemeChange={handleThemeChange}
          />
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}
