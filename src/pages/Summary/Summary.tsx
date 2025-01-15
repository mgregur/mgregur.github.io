import React from "react";
import { Box, Avatar, Container, Typography } from "@mui/material";
import EducationList from "components/EducationList/EducationList";
import EducationEntry from "components/EducationList/EducationListEntry/EducationEntry";
import ExperienceList from "components/ExperienceList/ExperienceList";
import ExperienceEntry from "components/ExperienceList/ExperienceListEntry/ExperienceListEntry";
import { SummaryEducationData, SummaryExperienceData } from "./PageData";
import HeaderDivider from "components/HeaderDivider/HeaderDivider";
import { NAVBAR_OFFSET } from "consts";

export default function Summary() {
  return (
    <Container maxWidth="md" sx={{ pb: "50vh", pt: NAVBAR_OFFSET }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt="Marko Gregurović"
          src="/avatar.jpg"
          sx={{ width: 200, height: 200, margin: "auto", marginBottom: 2 }}
        />
        <Typography textAlign="center" variant="h3">
          Software Engineer
        </Typography>
        <Typography textAlign="center" variant="h5">
          Marko Gregurović
        </Typography>
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
