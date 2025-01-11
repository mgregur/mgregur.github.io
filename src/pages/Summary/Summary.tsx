import React from "react";
import { Box, Avatar, Container, Divider, Typography } from "@mui/material";
import EducationList from "components/EducationList/EducationList";
import EducationEntry from "components/EducationList/EducationListEntry/EducationEntry";
import ExperienceList from "components/ExperienceList/ExperienceList";
import ExperienceEntry from "components/ExperienceList/ExperienceListEntry/ExperienceListEntry";
import { SummaryEducationData, SummaryExperienceData } from "./PageData";

function HeaderDivider() {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%", height: "16px" }} />
      <Divider />
      <Box sx={{ width: "100%", height: "32px" }} />
    </React.Fragment>
  );
}

export default function Summary() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt="Marko Gregurović"
          src="/avatar.jpg"
          sx={{ width: 200, height: 200, margin: "auto", marginBottom: "16px" }}
        />
        <Typography variant="h3">Software Engineer</Typography>
        <Typography variant="h5">Marko Gregurović</Typography>
      </Box>

      <HeaderDivider />

      <ExperienceList>
        {SummaryExperienceData.map((expData, index) => (
          <ExperienceEntry key={index + "-experience"} {...expData} />
        ))}
      </ExperienceList>

      <HeaderDivider />

      <EducationList>
        {SummaryEducationData.map((ed, index) => (
          <EducationEntry key={index + "-education"} {...ed} />
        ))}
      </EducationList>
    </Container>
  );
}
