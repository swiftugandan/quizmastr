import React from "react";
import { YearGrid } from "@/components/YearGrid";
import {
  overlay,
  yearsContainer,
  yearsMediaQueries,
  pageTitle,
  pageSubTitle,
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
        <h1 style={pageTitle}>Welcome to Quizmastr!</h1>
        <h2 style={pageSubTitle}>Select a level to start</h2>
        <YearGrid />
      </div>
    </div>
  );
};

export default YearsPage;
