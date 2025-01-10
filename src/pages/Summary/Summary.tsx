import React from "react";
import { Box, Avatar, Container, Divider } from "@mui/material";
import EducationList from "components/EducationList/EducationList";
import EducationEntry from "components/EducationList/EducationListEntry/EducationEntry";
import ExperienceList from "components/ExperienceList/ExperienceList";
import ExperienceEntry from "components/ExperienceList/ExperienceListEntry/ExperienceListEntry";
import { EducationData, ExperienceData } from "./PageData";

function HeaderDivider() {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%", height: "32px" }} />
      <Divider />
      <Box sx={{ width: "100%", height: "16px" }} />
    </React.Fragment>
  );
}

export default function Summary() {
  return (
    <Container maxWidth="md">
      <Box>
        <Avatar
          alt="Marko Gregurović"
          src="/avatar.jpg"
          sx={{ width: 200, height: 200, margin: "auto", marginBottom: "16px" }}
        />
      </Box>

      <HeaderDivider />

      <ExperienceList>
        {ExperienceData.map((expData, index) => (
          <ExperienceEntry key={index + "-experience"} {...expData} />
        ))}
      </ExperienceList>

      <HeaderDivider />

      <EducationList>
        {EducationData.map((ed, index) => (
          <EducationEntry key={index + "-education"} {...ed} />
        ))}
      </EducationList>
    </Container>
  );
}
