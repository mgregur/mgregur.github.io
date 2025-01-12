import { EducationEntryProps } from "components/EducationList/EducationListEntry/EducationEntry";
import { ExperienceEntryProps } from "components/ExperienceList/ExperienceListEntry/ExperienceListEntry";

export const SummaryEducationData: EducationEntryProps[] = [
  {
    title: "Master of Science in Computing",
    university: "University of Zagreb",
    faculty: "Faculty of Electrical Engineering and Computing",
    period: "October 2021 - July 2023",
    courses: [
      {
        name: "Advanced Algorithms and Data Structures",
      },
      {
        name: "Advanced Databases",
      },
      {
        name: "Advanced Operating Systems",
      },
      {
        name: "Advanced Web Development",
      },
      {
        name: "Concurrent Programming",
      },
      {
        name: "Database Systems",
      },
      {
        name: "Distributed Big Data Processing",
      },
      {
        name: "Distributed Ledgers and Cryptocurrencies",
      },
      {
        name: "Distributed Systems",
      },
      {
        name: "Information Systems",
      },
      {
        name: "Operating Systems and Applications Security",
      },
      {
        name: "Social networks",
      },
    ],
  },
  {
    title: "Bachelor of Science in Computing",
    university: "University of Zagreb",
    faculty: "Faculty of Electrical Engineering and Computing",
    period: "October 2018 - July 2021",
    courses: [
      {
        name: "Algorithms and data structures",
      },
      {
        name: "Computer Security",
      },
      {
        name: "Databases",
      },
      {
        name: "Design Patterns",
      },
      {
        name: "Development of Software Applications",
      },
      {
        name: "Development of software support for web and mobile devices",
      },
      {
        name: "Introduction to Artificial Intelligence",
      },
      {
        name: "Introduction to Theoretical Computer Science",
      },
      {
        name: "Object-oriented programming",
      },
      {
        name: "Operating Systems",
      },
      {
        name: "Programming Language Translation",
      },
      {
        name: "Scripting Languages",
      },
      {
        name: "Selected Topics in Software Development",
      },
      {
        name: "Software engineering",
      },
      {
        name: "Theory of information",
      },
    ],
  },
];

export const SummaryExperienceData: ExperienceEntryProps[] = [
  {
    company: "minus5 d.o.o.",
    role: "Backend software engineer",
    period: "December 2022 - Present",
    bullets: [
      "Planned and implemented migration of legacy system to modern cloud-native infrastructure.",
      "Designed and implemented custom software packaging system, uses S3 storage.",
      "Developed tool that utilizes remote device fleet to diagnose network issues.",
      "Main engineer for screen manager software product.",
      "Reworked device drivers, leading to a reduction of critical errors by over 50%.",
      "Implemented device hot swapping and debouncing.",
      "Designed and implemented a proactive alerting system for a fleet of remote devices.",
    ],
  },
  {
    company: "CROZ d.o.o.",
    role: "Software engineer",
    period: "July 2021 - December 2022",
    bullets: [
      "Developed a Kubernetes operator for controlling Harbor docker registry from an OpenShift cluster.",
      "Wrote Go CLI for generating GitLab CI/CD configuration in a monorepo.",
      "Contributed as a member of an agile team focused on the development and maintenance of enterprise Java+React banking systems.",
    ],
  },
];
