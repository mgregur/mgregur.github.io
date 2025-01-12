import React from "react";
import { Divider, Typography } from "@mui/material";

export default function Disclaimer() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Disclaimer
      </Typography>
      <Divider />
      <Typography variant="body1" sx={{ mt: 2, px: 2 }}>
        The opinions and views expressed here are solely my own and are based on
        my personal knowledge, experiences, and interpretations. They do not
        represent the views or positions of any current or past employers,
        organizations, or individuals I am associated with. Please consider
        these insights as personal perspectives, not definitive advice or
        universal truths.
      </Typography>
    </>
  );
}
