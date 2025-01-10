import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Container,
  Divider,
} from "@mui/material";
import EducationList from "components/EducationList/EducationList";
import EducationEntry from "components/EducationList/EducationListEntry/EducationEntry";

export default function Summary() {
  return (
    <Container maxWidth="md">
      <Box>
        <Avatar
          alt="Marko Gregurović"
          src="/avatar.jpg"
          sx={{ width: 200, height: 200, margin: "auto", marginBottom: "16px" }}
        />
        {/* <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography> */}
      </Box>

      <Box sx={{ width: "100%", height: "32px" }} />
      <Divider />
      <Box sx={{ width: "100%", height: "16px" }} />

      {/* <Box>
        <Typography variant="h4" gutterBottom>
          Professional Experience
        </Typography>
        <List></List>
      </Box> */}

      <EducationList>
        <EducationEntry
          title="Master of Science in Computing"
          university="University of Zagreb"
          faculty="Faculty of Electrical Engineering and Computing"
          period="October 2021 - July 2023"
        />
        <EducationEntry
          title="Bachelor of Science in Computing"
          university="University of Zagreb"
          faculty="Faculty of Electrical Engineering and Computing"
          period="October 2018 - July 2021"
        />
      </EducationList>
      <Box>
        <Box sx={{ width: "100%", height: "32px" }} />
        <Divider />
        <Box sx={{ width: "100%", height: "16px" }} />
        <Typography variant="h4" component="h2" gutterBottom>
          Work Experience
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              primary="Software Engineer"
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Minus5, 2022 - Present
                  </Typography>
                  <Typography component="span">
                    Description of your role and responsibilities at Minus5.
                  </Typography>
                </>
              }
            />
          </ListItem>
          {/* Add more work experience entries if needed */}
        </List>
      </Box>
    </Container>
  );
}
