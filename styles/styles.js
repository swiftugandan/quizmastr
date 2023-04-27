export const overlay = {
  minHeight: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const quizContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: "10rem",
};

export const pageTitle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center",
  marginBottom: "1rem",
  marginTop: "6rem",
  fontFamily: "sans-serif",
  marginLeft: "2rem",
  marginRight: "2rem",
};

export const pageSubTitle = {
  ...pageTitle,
  fontSize: "1.2rem",
  marginBottom: "1rem",
  marginTop: "1rem",
};

export const container = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 1rem",
  marginBottom: "4rem",
};

export const yearsContainer = {
  ...container,
};

export const subjectsContainer = {
  ...container,
  maxWidth: "1350px",
};

export const yearsMediaQueries = {
  "@media screen and (maxWidth: 768px)": {
    maxWidth: "100%",
    padding: "0",
  },
};

export const subjectsMediaQueries = yearsMediaQueries;
