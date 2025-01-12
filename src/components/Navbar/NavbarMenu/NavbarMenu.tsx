import React, { useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SiteRoutes, unpackRoutes } from "routes";
import useWindowDimensions from "hooks/useWindowDimensions/useWindowDimensions";

const SHORT_LABEL_BREAKPOINT = 400;

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
  const windowDimensions = useWindowDimensions();

  const useShortLabels = useMemo(
    () => windowDimensions.width <= SHORT_LABEL_BREAKPOINT,
    [windowDimensions]
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minWidth: useShortLabels ? "180px" : "300px",
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
      <Typography variant="h6">
        {pathnameToLabel(location.pathname, useShortLabels)}
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

function pathnameToLabel(pathname: string, useShortLabels: boolean): string {
  const route = unpackRoutes(SiteRoutes).find(
    (route) => route.path === pathname
  );

  if (!route) {
    return "Not Found";
  }

  if (useShortLabels) {
    return route.shortLabel ? route.shortLabel : route.label;
  }
  return route.label;
}
