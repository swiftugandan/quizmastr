import React from "react";
import { SubjectCard } from "@/components/SubjectCard";
import { useRouter } from "next/router";

export function SubjectGrid(props) {
  const router = useRouter();
  const { year } = router.query;

  const gridStyle = {
    display: "grid",
    gridGap: "20px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", // automatically adjust columns based on screen width
    marginBottom: "4rem",
  };

  return (
    <div style={gridStyle}>
      {props.subjects.map((subject) => (
        <SubjectCard
          key={subject.title}
          title={subject.title}
          icon={subject.icon}
          description={subject.description}
          subject={subject.title}
          year={year}
        />
      ))}
    </div>
  );
}
