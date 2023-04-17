import React, { useState, useEffect } from "react";

export const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [optionsShuffled, setOptionsShuffled] = useState(false);

  const shuffleOptions = () => {
    const shuffledArray = [...questions[currentQuestion].options];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setShuffledOptions(shuffledArray);
    setOptionsShuffled(true);
  };

  useEffect(() => {
    if (currentQuestion < questions.length && !optionsShuffled) {
      shuffleOptions();
    }
  }, [currentQuestion, optionsShuffled]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    setOptionsShuffled(false);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setOptionsShuffled(false);
  };

  const renderQuestion = () => {
    const { question, image, audio, video } = questions[currentQuestion];
    return (
      <div style={styles.questionContainer}>
        {/* <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
          style={styles.media}
        /> */}
        {image && (
          <img src={image} alt="Reference Picture" style={styles.media} />
        )}
        {audio && (
          <audio
            controls
            controlslist="nofullscreen nodownload noplaybackrate"
            src={audio}
            style={styles.media}
          >
            Audio element not supported.
          </audio>
        )}
        {video && (
          <video
            controls
            controlslist="nofullscreen nodownload noplaybackrate"
            src={video}
            style={styles.media}
          >
            Video element not supported.
          </video>
        )}
        <h2 style={styles.question}>{question}</h2>
        {shuffledOptions.map((option) => (
          <button
            key={option}
            style={styles.button}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0px 0px 1px 2px #3e8e41")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 4px 4px rgba(0, 0, 0, 0.25)")
            }
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  const renderResult = () => {
    const correctAnswers = answers.filter(
      (answer, index) => answer === questions[index].answer
    );
    return (
      <div style={styles.resultContainer}>
        <h2 style={styles.resultTitle}>Quiz Result</h2>
        <p style={styles.resultText}>
          You got {correctAnswers.length} out of {questions.length} questions
          correct.
        </p>
        <ul style={styles.resultList}>
          {questions.map((question, index) => (
            <li key={question.question} style={styles.resultItem}>
              {question.question}
              <span
                style={{
                  fontWeight: "bold",
                  color: answers[index] === question.answer ? "green" : "red",
                }}
              >
                {` Answer: ${answers[index]}`}
              </span>
              {question.options && (
                <ul>
                  {question.options.map((option) => (
                    <li
                      key={option}
                      style={{
                        fontWeight:
                          option === question.answer ? "bold" : "normal",
                        fontSize: "16px",
                        fontStyle: "italic",
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button style={styles.button} onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {currentQuestion < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    margin: "1rem",
  },
  questionContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "sans-serif",
  },
  question: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "20px",
    marginBottom: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    backgroundColor: "rgb(22 70 87)",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.2s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#3e8e41",
  },
  resultContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "sans-serif",
  },
  resultTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  resultText: {
    fontSize: "18px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  resultList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  resultItem: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  media: {
    width: "100%",
    marginBottom: "20px",
    borderRadius: "10px",
  },
};
