import { Box, Divider, List, Typography } from "@mui/material";
import React from "react";

interface EducationListProps {
  children: React.ReactNode;
}

export default function EducationList({ children }: EducationListProps) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Divider />
      <List>{children}</List>
    </Box>
  );
}
