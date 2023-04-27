import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundImage: "url('/background.png')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  content: {
    flex: 1,
  },
};

export const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
