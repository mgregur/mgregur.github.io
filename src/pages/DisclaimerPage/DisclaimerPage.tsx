import React from "react";
import { Container } from "@mui/material";
import { NAVBAR_OFFSET } from "consts";
import Disclaimer from "components/Disclaimer/Disclaimer";

export default function DisclaimerPage() {
  return (
    <Container maxWidth="md" sx={{ pb: "50vh", pt: NAVBAR_OFFSET }}>
      <Disclaimer />
    </Container>
  );
}
