import React from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CourseTable, { CourseEntry } from "../CourseTable/CourseTable";

export interface EducationEntryProps {
  title: string;
  university: string;
  faculty: string;
  period: string;
  courses: CourseEntry[];
}

export default function EducationEntry({
  title,
  university,
  faculty,
  period,
  courses,
}: EducationEntryProps) {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <ListItemText
          primary={<Typography variant="h6">{title}</Typography>}
          secondary={
            <>
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
            </>
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
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Relevant courses
        </AccordionSummary>
        <AccordionDetails>
          <CourseTable courses={courses} />
        </AccordionDetails>
      </Accordion>
    </ListItem>
  );
}
