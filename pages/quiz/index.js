import React from "react";
import { YearGrid } from "@/components/YearGrid";
import {
  overlay,
  yearsContainer,
  yearsMediaQueries,
  pageTitle,
} from "@/styles/styles";

const YearsPage = () => {
  const responsiveContainer = Object.assign(
    {},
    yearsContainer,
    yearsMediaQueries
  );

  return (
    <div style={overlay}>
      <div style={responsiveContainer}>
        <h1 style={pageTitle}>Select a Level</h1>
        <YearGrid />
      </div>
    </div>
  );
};

export default YearsPage;
