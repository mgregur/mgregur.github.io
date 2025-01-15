import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Disclaimer from "components/Disclaimer/Disclaimer";
import { useNavigate } from "react-router";
import { PATHS } from "routes";
import HeaderDivider from "components/HeaderDivider/HeaderDivider";
import { PERSPECTIVES } from "pages/Perspectives/perspectivesData";
import { NAVBAR_OFFSET } from "consts";

export default function Perspectives() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ pb: "50vh", pt: NAVBAR_OFFSET }}>
      <Disclaimer />

      <HeaderDivider />

      <Typography variant="h4" gutterBottom>
        About this section
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ mt: 2, px: 2 }} gutterBottom>
        This section is where I share my personal thoughts and insights on
        various topics in software development.
      </Typography>
      <Typography variant="body1" sx={{ px: 2 }}>
        My goal is to spark curiosity, challenge assumptions, and foster
        discussions. Whether you agree, disagree, or have a different
        perspective, I hope these posts inspire you to think critically and
        share your own ideas.
      </Typography>

      <HeaderDivider />

      <Typography variant="h4" gutterBottom>
        Topics
      </Typography>
      <Divider />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 2,
        }}
      >
        {PERSPECTIVES.map((data, index) => (
          <Card elevation={3} key={index}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.cardTitle}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {data.cardDescription}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="text"
                color="inherit"
                onClick={() => navigate(PATHS.PERSPECTIVES + data.subpath)}
              >
                More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
