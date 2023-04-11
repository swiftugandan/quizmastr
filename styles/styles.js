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
};

export const pageTitle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#fff",
  textAlign: "center",
  marginBottom: "1rem",
  marginTop: "6rem",
  fontFamily: "sans-serif",
  marginLeft: "2rem",
  marginRight: "2rem",
};

export const newQuizButton = {
  display: "block",
  width: "90%",
  padding: "20px",
  marginBottom: "4rem",
  borderRadius: "5px",
  backgroundColor: "rgb(0 0 0)",
  color: "#fff",
  fontSize: "30px",
  cursor: "pointer",
  border: "1px solid #fff",
};

export const container = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
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
