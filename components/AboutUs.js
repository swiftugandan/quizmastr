import React from "react";

const styles = {
  heading: {
    color: "#333",
    fontSize: "1.875rem",
    marginBottom: "1.25rem",
    textAlign: "center",
  },
  text: {
    fontSize: "1.25rem",
    color: "#333",
    lineHeight: "1.5",
    marginBottom: "1.875rem",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  textContainer: {
    maxHeight: "calc(100vh - 20rem)",
    padding: "0rem 2.5rem 0rem",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    top: "0.625rem",
    right: "0.625rem",
    background: "transparent",
    border: "none",
    fontSize: "1.25rem",
    cursor: "pointer",
    color: "#333",
  },
  container: {
    borderRadius: "0.625rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "37.5rem",
    margin: "1rem",
    padding: "2.5rem 0rem 2.5rem",
    backgroundColor: "#f5f5f5",
    marginTop: "6rem",
    marginBottom: "6rem",
    fontFamily: "sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  modalStyle: {
    position: "fixed",
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
};

const AboutUs = ({ isVisible, toggleVisibility }) => {
  return isVisible ? (
    <div style={styles.modalStyle}>
      <div style={styles.container}>
        <button style={styles.closeButton} onClick={toggleVisibility}>
          &times;
        </button>
        <h2 style={styles.heading}>About Quizmastr</h2>
        <div style={styles.textContainer}>
          <p style={styles.text}>
            Welcome to quizmastr! Our team consists of educators and developers
            who are dedicated to making learning fun and engaging for students.
            We believe that education should be accessible and enjoyable for
            everyone, and that is why we created quizmastr.
          </p>
          <p style={styles.text}>
            It is designed to help students test their knowledge and learn new
            things in a fun and interactive way. With a variety of questions on
            different subjects, our quizzes are perfect for students who want to
            challenge themselves and expand their horizons.
          </p>
          <p style={styles.text}>
            Whether you are looking to improve your general knowledge, prepare
            for a test, or just have fun, quizmastr is the perfect way to do it.
            So why not give it a try and see how much you know?
          </p>
          <p style={styles.text}>
            Thank you for choosing quizmastr, and we hope you enjoy using it as
            much as we enjoyed creating it!
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default AboutUs;
