import React, { useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SiteRoutes, unpackRoutes } from "routes";

export default function NavbarMenu() {
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

  const unpackedRoutes = useMemo(() => unpackRoutes(SiteRoutes), []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {pathnameToLabel(location.pathname)}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {unpackedRoutes
          .filter((s) => s.showInNavigation)
          .map((siteRoute) => (
            <MenuItem
              key={siteRoute.path + siteRoute.label}
              onClick={() => handleCloseAndRedirect(siteRoute.path)}
              selected={location.pathname === siteRoute.path}
              sx={{ ml: `${(siteRoute.depth || 0) * 24}px` }}
            >
              {siteRoute.label}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}

function pathnameToLabel(pathname: string): string {
  const route = unpackRoutes(SiteRoutes).find(
    (route) => route.path === pathname
  );

  if (!route) {
    return "Not Found";
  }

  return route.label;
}
