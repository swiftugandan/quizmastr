import React from "react";
import { SubjectCard } from "@/components/SubjectCard";
import { useRouter } from "next/router";

export function SubjectGrid(props) {
  const router = useRouter();
  const { year } = router.query;

  const gridStyle = {
    display: "grid",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
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
