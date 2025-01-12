import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

export interface ExperienceEntryProps {
  role: string;
  company: string;
  bullets: string[];
  period: string;
}

export default function ExperienceEntry({
  role,
  company,
  bullets,
  period,
}: ExperienceEntryProps) {
  return (
    <ListItem sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ListItemText
          primary={<Typography variant="h6">{role}</Typography>}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" display="block">
                {company}
              </Typography>
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
      </Box>
      <List
        sx={{ listStyleType: "disc", marginLeft: "30px", width: "100%", pl: 2 }}
        dense
        disablePadding
      >
        {bullets.map((bullet, index) => (
          <ListItem sx={{ display: "list-item" }} key={period + index}>
            {bullet}
          </ListItem>
        ))}
      </List>
    </ListItem>
  );
}
