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
        The opinions shared on this site are my personal opinions and thoughts.
        As such they do not in any way reflect the opinions of any of my past or
        current employers, organizations or individuals with whom I have
        associated with. I do not claim these opinions as definitive advice,
        universal truths, facts or factual assertions. I am not responsible for
        any consequences that may arise from the use or interpretation of the
        information shared on this site.
      </Typography>
    </>
  );
}
