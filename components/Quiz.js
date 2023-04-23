import React, {
  useState,
  useReducer,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { shuffle } from "lodash";

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    minWidth: "260px",
    margin: "0.5rem",
  },
  questionContainer: {
    backgroundColor: "#fff",
    padding: "1rem",
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
  questionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    borderBottom: "1px solid #ccc",
    color: "#333",
  },
  progressBar: {
    height: "10px",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3e8e41",
    borderRadius: "5px",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: action.payload };
    case "SET_ANSWER":
      return { ...state, answers: [...state.answers, action.payload] };
    case "SET_TIME_ELAPSED":
      return { ...state, timeElapsed: action.payload };
    case "RESET":
      return { currentQuestion: 0, answers: [], timeElapsed: 0 };
    default:
      return state;
  }
};

const Question = ({ question, handleAnswer, timeElapsed, id, total }) => {
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setShuffledOptions(shuffle([...question.options]));
  }, [question]);

  return (
    <div style={styles.questionContainer}>
      <div style={styles.progressBar}>
        <div
          style={{
            ...styles.progressFill,
            width: `${(id / total) * 100}%`,
          }}
        ></div>
      </div>
      <div style={styles.questionHeader}>
        <div>{`Question ${id} of ${total}`}</div>
        <div>{timeElapsed} seconds</div>
      </div>
      {question.image && (
        <img
          src={question.image}
          alt="Reference Picture"
          style={styles.media}
        />
      )}
      {question.audio && (
        <audio
          controls
          controlslist="nofullscreen nodownload noplaybackrate"
          src={question.audio}
          style={styles.media}
        >
          Audio element not supported.
        </audio>
      )}
      {question.video && (
        <video
          controls
          controlslist="nofullscreen nodownload noplaybackrate"
          src={question.video}
          style={styles.media}
        >
          Video element not supported.
        </video>
      )}
      <h2 style={styles.question}>{question.question}</h2>
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

const Result = ({ questions, answers, handleRestart }) => {
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

export const Quiz = ({ questions }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentQuestion: 0,
    answers: [],
    timeElapsed: 0,
  });

  const { currentQuestion, answers, timeElapsed } = state;

  const timerRef = useRef(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime.current) / 1000);
      dispatch({ type: "SET_TIME_ELAPSED", payload: elapsedTime });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleAnswer = useCallback(
    (answer) => {
      dispatch({ type: "SET_ANSWER", payload: answer });
      dispatch({ type: "SET_CURRENT_QUESTION", payload: currentQuestion + 1 });
    },
    [currentQuestion]
  );

  const handleRestart = useCallback(() => {
    dispatch({ type: "RESET" });
    startTime.current = Date.now();
  }, []);

  return (
    <div style={styles.container}>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
          timeElapsed={timeElapsed}
          id={currentQuestion + 1}
          total={questions.length}
        />
      ) : (
        <Result
          questions={questions}
          answers={answers}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
};
