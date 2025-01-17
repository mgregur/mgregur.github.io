import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface ThemeSelectorProps {
  currentTheme: string;
  handleThemeChange: (theme: string) => void;
}

export const THEME_SELECTOR_WIDTH = "100px";

export default function ThemeSelector({
  currentTheme,
  handleThemeChange,
}: ThemeSelectorProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        width: THEME_SELECTOR_WIDTH,
      }}
    >
      <FormControl variant="outlined">
        <InputLabel>Theme</InputLabel>
        <Select
          size="small"
          value={currentTheme}
          onChange={(e) => handleThemeChange(e.target.value as string)}
          label="Theme"
          sx={{ width: THEME_SELECTOR_WIDTH }}
        >
          <MenuItem value="system">System</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
