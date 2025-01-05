import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import NavigationDropdown from "components/NavigationDropdown/NavigationDropdown";

interface HeaderProps {
  currentTheme: string;
  handleThemeChange: (theme: string) => void;
}

export default function Header({
  currentTheme,
  handleThemeChange,
}: HeaderProps) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <NavigationDropdown />
        <Box
          sx={{ display: "flex", flexDirection: "row-reverse", width: "100%" }}
        >
          <FormControl variant="outlined">
            <InputLabel>Theme</InputLabel>
            <Select
              size="small"
              value={currentTheme}
              onChange={(e) => handleThemeChange(e.target.value as string)}
              label="Theme"
            >
              <MenuItem value="system">System</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
