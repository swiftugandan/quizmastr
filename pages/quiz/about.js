import React from "react";
import { overlay } from "@/styles/styles";

const AboutUs = () => {
  return (
    <div style={overlay}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.text}>
          Welcome to our quiz app! Our team consists of educators and developers
          who are dedicated to making learning fun and engaging for students. We
          believe that education should be accessible and enjoyable for
          everyone, and that is why we created this quiz app.
        </p>
        <p style={styles.text}>
          It is designed to help students test their knowledge and learn new
          things in a fun and interactive way. With a variety of questions on
          different subjects, our quizzes are perfect for students who want to
          challenge themselves and expand their horizons.
        </p>
        <p style={styles.text}>
          Whether you are looking to improve your general knowledge, prepare for
          a test, or just have fun, our quiz app is the perfect way to do it. So
          why not give it a try and see how much you know?
        </p>
        <p style={styles.text}>
          Thank you for choosing our app, and we hope you enjoy using it as much
          as we enjoyed creating it!
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
    marginTop: "2rem",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "30px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  text: {
    fontSize: "22px",
    lineHeight: "1.5",
    marginBottom: "30px",
    justifyContent: "space-between",
  },
};

export default AboutUs;
