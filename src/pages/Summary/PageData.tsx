import { EducationEntryProps } from "components/EducationList/EducationListEntry/EducationEntry";
import { ExperienceEntryProps } from "components/ExperienceList/ExperienceListEntry/ExperienceListEntry";

export const EducationData: EducationEntryProps[] = [
  {
    title: "Master of Science in Computing",
    university: "University of Zagreb",
    faculty: "Faculty of Electrical Engineering and Computing",
    period: "October 2021 - July 2023",
  },
  {
    title: "Bachelor of Science in Computing",
    university: "University of Zagreb",
    faculty: "Faculty of Electrical Engineering and Computing",
    period: "October 2018 - July 2021",
  },
];

export const ExperienceData: ExperienceEntryProps[] = [
  {
    company: "minus5",
    role: "Backend software engineer",
    period: "December 2022 - Present",
    bullets: [
      "Planned and implemented migration of legacy system to modern cloud-native infrastructure.",
      "Reworked device drivers, leading to a reduction of critical errors by over 50%.",
      "Implemented device hot swapping and debouncing.",
      "Designed and implemented a proactive alerting system for a fleet of remote devices.",
      "Main engineer for screen manager software product.",
      "Designed and implemented custom software packaging system, uses S3 storage.",
      "Developed tool that utilizes remote device fleet to diagnose network issues.",
    ],
  },
];
