import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SiteRoutes } from "routes";

export default function NavigationDropdown() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleCloseAndRedirect = (path: string) => {
    setAnchorEl(null);
    navigate(path);
  };

  const location = useLocation();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">{pathnameToLabel(location.pathname)}</Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {SiteRoutes.filter(
          (s) => s.showInNavigation && location.pathname !== s.path
        ).map((siteRoute) => (
          <MenuItem
            key={siteRoute.path + siteRoute.label}
            onClick={() => handleCloseAndRedirect(siteRoute.path)}
          >
            {siteRoute.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function pathnameToLabel(pathname: string): string {
  const route = SiteRoutes.filter((route) => route.showInNavigation).find(
    (route) => route.path === pathname
  );
  return route ? route.label : "Unknown";
}
