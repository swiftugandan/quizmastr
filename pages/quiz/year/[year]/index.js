import React from "react";
import { useRouter } from "next/router";
import {
  faCalculator,
  faBookOpen,
  faMicroscope,
  faPalette,
  faGlobe,
  faDesktop,
  faCogs,
  faLanguage,
  faGlobeAmericas,
  faScroll,
  faMusic,
  faRunning,
  faPray,
} from "@fortawesome/free-solid-svg-icons";

import { SubjectGrid } from "@/components/SubjectGrid";
import {
  subjectsMediaQueries,
  subjectsContainer,
  overlay,
  pageTitle,
} from "@/styles/styles";

const subjects = [
  {
    title: "Literacy",
    description: "Developing reading, writing, and communication skills",
    icon: faBookOpen,
  },
  {
    title: "Mathematics",
    description: "Developing mathematical reasoning and problem-solving skills",
    icon: faCalculator,
  },
  {
    title: "Science",
    description:
      "Exploring the natural world through experimentation and investigation",
    icon: faMicroscope,
  },
  {
    title: "Art and Design",
    description:
      "Developing creativity and artistic skills through various media",
    icon: faPalette,
  },
  {
    title: "Citizenship",
    description:
      "Learning about social responsibility, government, and democracy",
    icon: faGlobe,
  },
  {
    title: "Computing",
    description: "Developing computational thinking and coding skills",
    icon: faDesktop,
  },
  {
    title: "Design and Technology",
    description:
      "Learning about design, engineering, and technology principles",
    icon: faCogs,
  },
  {
    title: "Languages",
    description: "Learning to communicate effectively in another language",
    icon: faLanguage,
  },
  {
    title: "Geography",
    description: "Exploring the physical and cultural features of the Earth",
    icon: faGlobeAmericas,
  },
  {
    title: "History",
    description: "Learning about past events and their impact on society",
    icon: faScroll,
  },
  {
    title: "Music",
    description: "Developing musical skills and appreciation",
    icon: faMusic,
  },
  {
    title: "Physical Education",
    description: "Developing physical fitness and sports skills",
    icon: faRunning,
  },
  {
    title: "Religious Education",
    description: "Learning about different religions and beliefs",
    icon: faPray,
  },
];

const SubjectsPage = () => {
  const router = useRouter();
  const { year } = router.query;

  const responsiveContainer = Object.assign(
    {},
    subjectsContainer,
    subjectsMediaQueries
  );

  return (
    <div style={overlay}>
      <div style={responsiveContainer}>
        <h1 style={pageTitle}>Select a Subject (Level {year})</h1>
        <SubjectGrid subjects={subjects} />
      </div>
    </div>
  );
};

export default SubjectsPage;
