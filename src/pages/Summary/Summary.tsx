import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";

export default function Summary() {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Avatar
          alt="Marko Gregurović"
          src="/avatar.jpg"
          sx={{ width: 200, height: 200, margin: "auto" }}
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Hi, I&apos;m Marko Gregurović, a passionate software engineer based in
          Zagreb, Croatia.
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Master's Degree in Computer Science"
              secondary="University of Zagreb, 2022"
            />
          </ListItem>
          {/* Add more education entries if needed */}
        </List>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Work Experience
        </Typography>
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
