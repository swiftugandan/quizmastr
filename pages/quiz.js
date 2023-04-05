import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
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
    const { question } = questions[currentQuestion];
    return (
      <div style={styles.questionContainer}>
        <h2 style={styles.question}>{question}</h2>
        {shuffledOptions.map((option) => (
          <button
            key={option}
            style={styles.button}
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
              {question.question} -
              <span
                style={{
                  fontWeight: "bold",
                  color: answers[index] === question.answer ? "green" : "red",
                }}
              >
                {answers[index]}
              </span>
              {question.options && (
                <ul>
                  {question.options.map((option) => (
                    <li
                      key={option}
                      style={{
                        fontWeight:
                          option === question.answer ? "bold" : "normal",
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
    margin: "0 auto",
  },
  questionContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    fontFamily: "sans-serif",
  },
  question: {
    fontSize: "40px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.2s ease-in-out",
  },
  "button:hover": {
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
};

const ModalPage = ({ questions }) => {
  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={overlay}>
      <Quiz questions={questions} />
    </div>
  );
};

async function getQuizQuestions(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=60"
  );

  // Not used in the backend at the moment
  const data = {
    subject: "mathematics",
    year: "3",
    numberOfQuestions: "5",
  };

  const sharedSecret = process.env.SHARED_SECRET;
  const url = `https://us-east-1.aws.data.mongodb-api.com/app/data-mgwtr/endpoint/getQuizQuestions?secret=${sharedSecret}`;

  const questions = await getQuizQuestions(url, data);

  return { props: { questions } };
}

export default ModalPage;