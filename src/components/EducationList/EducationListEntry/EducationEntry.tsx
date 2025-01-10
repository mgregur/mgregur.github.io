import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

interface EducationEntryProps {
  title: string;
  university?: string;
  faculty?: string;
  period?: string;
}

export default function EducationEntry({
  title,
  university,
  faculty,
  period,
}: EducationEntryProps) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <ListItemText
        primary={<Typography variant="h6">{title}</Typography>}
        secondary={
          <React.Fragment>
            {university && (
              <Typography component="span" variant="body2" display="block">
                {university}
              </Typography>
            )}
            {faculty && (
              <Typography component="span" variant="body2" display="block">
                {faculty}
              </Typography>
            )}
          </React.Fragment>
        }
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemText
          primary={
            <Typography
              sx={{ color: "text.secondary" }}
              component={"span"}
              variant="body2"
            >
              {period}
            </Typography>
          }
        />
      </Box>
    </ListItem>
  );
}
