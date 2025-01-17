import React from "react";
import { PerspectiveElement } from "./PerspectiveTypes";
import {
  Container,
  Divider,
  List,
  ListItem,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Disclaimer from "components/Disclaimer/Disclaimer";
import HeaderDivider from "components/HeaderDivider/HeaderDivider";
import PerspectiveContent from "components/PerspectiveComponents/PerspectiveContent/PerspectiveContent";
import {
  LARGE_SCREEN_CONTENT_WIDTH,
  NAVBAR_OFFSET,
  VERY_LARGE_SCREEN_CONTENT_WIDTH,
} from "consts";

interface PerspectiveProps {
  elements: PerspectiveElement[];
}

export default function Perspective({ elements }: PerspectiveProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isVeryLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <PerspectiveContent
        elements={elements}
        isLargeScreen={isLargeScreen}
        isVeryLargeScreen={isVeryLargeScreen}
      />
      <Box
        sx={{
          display: "flex",
          width: isVeryLargeScreen
            ? `calc(100% - ${VERY_LARGE_SCREEN_CONTENT_WIDTH})`
            : isLargeScreen
              ? `calc(100% - ${LARGE_SCREEN_CONTENT_WIDTH})`
              : "100%",
          justifyContent: "center",
          ml: isVeryLargeScreen
            ? VERY_LARGE_SCREEN_CONTENT_WIDTH
            : isLargeScreen
              ? LARGE_SCREEN_CONTENT_WIDTH
              : "auto",
        }}
      >
        <Container maxWidth="md" sx={{ pb: "50vh", pt: NAVBAR_OFFSET }}>
          <Disclaimer />
          {elements.map((element, index) => (
            <div key={index}>{renderElement(element)}</div>
          ))}
        </Container>
      </Box>
    </>
  );
}

function renderElement(element: PerspectiveElement) {
  switch (element.type) {
    case "header":
      return renderHeader(element);
    case "header-divider":
      return renderHeaderDivider();
    case "content":
      return renderContent(element);
    case "content-gutter":
      return renderContentGutter(element);
    case "bullet-list":
      return renderBulletList(element);
    case "content-with-bullet-list":
      return renderContentWithBulletList(element);
    default:
      return <Typography>Unknown element</Typography>;
  }
}

function renderHeader(element: PerspectiveElement) {
  const HeaderTag = element.headerType || "h3";
  return (
    <>
      <Typography id={element.text} variant={HeaderTag} gutterBottom>
        {element.text}
      </Typography>
      <Divider />
    </>
  );
}

function renderHeaderDivider() {
  return <HeaderDivider />;
}

function renderContent(element: PerspectiveElement) {
  return (
    <Typography variant="body1" sx={{ mt: 2, px: 2 }}>
      {element.text}
    </Typography>
  );
}

function renderContentGutter(element: PerspectiveElement) {
  return (
    <Typography variant="body1" sx={{ mt: 2, px: 2 }} gutterBottom>
      {element.text}
    </Typography>
  );
}

function renderBulletList(element: PerspectiveElement) {
  return (
    <List sx={{ display: "list-item" }}>
      {element.bullets?.map((bullet, index) => (
        <ListItem sx={{ display: "list-item" }} key={index}>
          {bullet}
        </ListItem>
      ))}
    </List>
  );
}

function renderContentWithBulletList(element: PerspectiveElement) {
  return (
    <>
      <Typography variant="body1" sx={{ mt: 2, px: 2 }}>
        {element.text}
      </Typography>
      <ul>
        {element.bullets?.map((bullet, index) => <li key={index}>{bullet}</li>)}
      </ul>
    </>
  );
}
