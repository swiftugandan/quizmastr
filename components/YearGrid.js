import React from "react";
import {
  faChalkboardTeacher,
  faBook,
  faGraduationCap,
  faUserGraduate,
  faSchool,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { YearCard } from "./YearCard";

export function YearGrid(props) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // three columns of equal width
    gap: "20px", // 20px gap between grid items
    justifyContent: "center", // center grid items horizontally
    alignItems: "center", // center grid items vertically
    padding: "20px", // add some padding to the grid
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // automatically adjust columns based on screen width
    marginBottom: "4rem",
  };

  const years = [
    {
      title: "Level 1",
      icon: faChalkboardTeacher,
      id: 1,
      description: "Learning the basics of reading, writing, and arithmetic",
    },
    {
      title: "Level 2",
      icon: faBook,
      id: 2,
      description:
        "Building on the basics with more advanced reading, writing, and arithmetic",
    },
    {
      title: "Level 3",
      icon: faGraduationCap,
      id: 3,
      description:
        "Developing further reading and writing skills, as well as introducing science and other subjects",
    },
    {
      title: "Level 4",
      icon: faUserGraduate,
      id: 4,
      description:
        "Learning more complex subjects such as history, geography, and foreign languages",
    },
    {
      title: "Level 5",
      icon: faSchool,
      id: 5,
      description:
        "Preparing for the transition to secondary school with a focus on more independent learning",
    },
    {
      title: "Level 6",
      icon: faGlobe,
      id: 6,
      description:
        "Preparing for secondary school with a focus on more advanced and specialized subjects",
    },
  ];

  return (
    <div style={gridStyle}>
      {years.map((year, index) => (
        <YearCard
          key={index}
          title={year.title}
          icon={year.icon}
          description={year.description}
          year={year.id}
        />
      ))}
    </div>
  );
}
