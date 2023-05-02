import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import AboutUs from "./AboutUs";

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundImage: "url('/background.webp')",
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
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={styles.container}>
      <Header toggleVisibility={toggleVisibility} />
      <AboutUs isVisible={isVisible} toggleVisibility={toggleVisibility} />
      <div style={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
