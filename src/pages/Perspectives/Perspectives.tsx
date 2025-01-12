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

export default function Perspectives() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
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
        <Card elevation={3} sx={{ mx: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Effective Communication in Software Development
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Differing communication styles impact team efficiency. Asking
              “unnecessary” questions and challenging assumptions early can
              prevent costly misunderstandings.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => navigate(PATHS.PER_EFFECTIVE_COMMUNICATION)}
            >
              More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
