import React from "react";
import { Box, Divider } from "@mui/material";

export default function HeaderDivider() {
  return (
    <>
      <Box sx={{ width: "100%", height: "16px" }} />
      <Divider />
      <Box sx={{ width: "100%", height: "32px" }} />
    </>
  );
}
