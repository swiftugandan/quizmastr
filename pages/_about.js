import React, { useState } from "react";
import { overlay } from "@/styles/styles";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return <></>;
  }

  return (
    <div style={overlay}>
      <div style={styles.container}>
        <button style={styles.closeButton} onClick={toggleVisibility}>
          &times;
        </button>
        <h2 style={styles.heading}>About Quizmastr</h2>
        <p style={styles.text}>
          Welcome to quizmastr! Our team consists of educators and developers
          who are dedicated to making learning fun and engaging for students. We
          believe that education should be accessible and enjoyable for
          everyone, and that is why we created quizmastr.
        </p>
        <p style={styles.text}>
          It is designed to help students test their knowledge and learn new
          things in a fun and interactive way. With a variety of questions on
          different subjects, our quizzes are perfect for students who want to
          challenge themselves and expand their horizons.
        </p>
        <p style={styles.text}>
          Whether you are looking to improve your general knowledge, prepare for
          a test, or just have fun, quizmastr is the perfect way to do it. So
          why not give it a try and see how much you know?
        </p>
        <p style={styles.text}>
          Thank you for choosing quizmastr, and we hope you enjoy using it as
          much as we enjoyed creating it!
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px",
    margin: "1rem",
    backgroundColor: "#f5f5f5",
    marginTop: "6rem",
    marginBottom: "6rem",
    fontFamily: "sans-serif",
    position: "relative",
  },
  heading: {
    fontSize: "30px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  text: {
    fontSize: "20px",
    lineHeight: "1.5",
    marginBottom: "30px",
    textAlign: "justify",
    textJustify: "inter-word",
    color: "#333",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default AboutUs;
