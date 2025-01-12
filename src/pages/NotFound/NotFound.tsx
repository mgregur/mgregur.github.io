import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        height: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" gutterBottom>
        Page not found.
      </Typography>
      <Button color="inherit" variant="contained" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </Container>
  );
}
