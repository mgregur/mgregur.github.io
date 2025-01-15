import React from "react";
import { List, Drawer, ListItemButton, Button } from "@mui/material";
import { PerspectiveElement } from "pages/Perspective/PerspectiveTypes";
import {
  LARGE_SCREEN_CONTENT_WIDTH,
  NAVBAR_OFFSET,
  VERY_LARGE_SCREEN_CONTENT_WIDTH,
} from "consts";

export interface PerspectiveContentProps {
  isLargeScreen: boolean;
  isVeryLargeScreen: boolean;
  elements: PerspectiveElement[];
}

export default function PerspectiveContent({
  elements,
  isLargeScreen,
  isVeryLargeScreen,
}: PerspectiveContentProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const handleListItemClick = (id: string) => () => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  const counts = { h3: 0, h4: 0 };

  const getEnumeration = (
    index: number,
    type: string,
    counts: { h3: number; h4: number }
  ) => {
    if (type === "h3") {
      return "";
    } else if (type === "h4") {
      counts.h3 += 1;
      counts.h4 = 0;
      return `${counts.h3}.`;
    } else if (type === "h5") {
      counts.h4 += 1;
      return `${counts.h3}.${counts.h4}`;
    }
    return "";
  };

  return (
    <>
      {!isLargeScreen && (
        <Button
          variant="contained"
          color="inherit"
          onClick={toggleDrawer()}
          fullWidth
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            borderRadius: 0,
          }}
        >
          Content
        </Button>
      )}
      <Drawer
        variant={isLargeScreen ? "permanent" : "temporary"}
        elevation={1}
        anchor={isLargeScreen ? "left" : "bottom"}
        open={isLargeScreen || open}
        onClose={toggleDrawer()}
        color="default"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            top: isLargeScreen ? NAVBAR_OFFSET : "auto",
            width: isVeryLargeScreen
              ? VERY_LARGE_SCREEN_CONTENT_WIDTH
              : isLargeScreen
                ? LARGE_SCREEN_CONTENT_WIDTH
                : "100%",
            height: isLargeScreen ? "calc(100vh - 64px)" : "50%",
            maxHeight: isLargeScreen ? "calc(100vh - 64px)" : "none",
          },
        }}
      >
        <List>
          {elements
            .filter((el) => el.type === "header")
            .map((el, index) => {
              const enumeration = getEnumeration(
                index,
                el.headerType as string,
                counts
              );
              return (
                <ListItemButton
                  key={index}
                  onClick={handleListItemClick(el.text || "")}
                  sx={{ pl: el.headerType === "h4" ? 4 : 2 }}
                >
                  {enumeration} {el.text}
                </ListItemButton>
              );
            })}
        </List>
      </Drawer>
    </>
  );
}
