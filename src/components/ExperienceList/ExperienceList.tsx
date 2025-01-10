import { Box, Divider, List, Typography } from "@mui/material";
import React from "react";

interface ExperienceListParams {
  children: React.ReactNode;
}

export default function ExperienceList({ children }: ExperienceListParams) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <Divider />
      <List>{children}</List>
    </Box>
  );
}
