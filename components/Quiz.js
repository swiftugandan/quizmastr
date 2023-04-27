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
    backgroundColor: "#e6f7ff",
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
    fontSize: "1.5em",
    marginBottom: "1.25rem",
    textAlign: "center",
    color: "#2e64b5",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "1.25rem",
    marginBottom: "0.625rem",
    marginTop: "0.625rem",
    borderRadius: "5px",
    backgroundColor: "rgb(22 70 87)",
    color: "#fff",
    fontSize: "1.125em",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.2s ease-in-out",
  },
  resultContainer: {
    backgroundColor: "#fff",
    padding: "1.25rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    fontFamily: "sans-serif",
  },
  resultTitle: {
    fontSize: "1.5em",
    marginBottom: "1.25rem",
    textAlign: "center",
    color: "#2e64b5",
  },
  resultText: {
    fontSize: "1.125em",
    marginBottom: "1.25rem",
    textAlign: "center",
    color: "#2e64b5",
  },
  resultList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  resultItem: {
    fontSize: "1.125em",
    marginBottom: "0.625rem",
    color: "#2e64b5",
    marginBottom: "1.25rem",
  },
  media: {
    width: "100%",
    marginBottom: "1.25rem",
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
    marginBottom: "1.25rem",
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
    default:
      return state;
  }
};

const useShuffledOptions = (question) => {
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setShuffledOptions(shuffle([...question.options]));
  }, [question]);

  return shuffledOptions;
};

const Question = ({ question, handleAnswer }) => {
  const shuffledOptions = useShuffledOptions(question);

  return (
    <>
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
    </>
  );
};

const Result = ({ questions, answers }) => {
  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].answer
  );

  const quizEnded = answers.length === questions.length;

  return (
    <>
      <h2 style={styles.resultTitle}>Quiz Result</h2>
      {quizEnded ? (
        <>
          <p style={styles.resultText}>
            You got {correctAnswers.length} out of {questions.length} questions
            correct.
          </p>
          <ul style={styles.resultList}>
            {questions.map((question, index) => (
              <li key={question.question} style={styles.resultItem}>
                {`${question.question}`}
                {question.options && (
                  <ul>
                    {question.options.map((option) => (
                      <li
                        key={option}
                        style={{
                          fontWeight:
                            option === answers[index] ? "bold" : "normal",
                          color:
                            option === question.answer
                              ? "green"
                              : option === answers[index]
                              ? "red"
                              : "black",
                          fontSize: "16px",
                          fontStyle: "italic",
                          marginBottom: "0.25rem",
                          marginLeft: "1.5rem",
                        }}
                      >
                        {answers[index] === option
                          ? `${option} (Your Answer)`
                          : option === question.answer
                          ? `${option} (Correct Answer)`
                          : option}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p style={{ ...styles.resultText, margin: "2rem" }}>
          You have run out of time, please try another quiz!
        </p>
      )}
    </>
  );
};

const ProgressBar = ({ timeElapsed, totalTime }) => {
  const progress = ((totalTime - timeElapsed) / totalTime) * 100;

  return (
    <div style={styles.progressBar}>
      <div style={{ ...styles.progressFill, width: `${progress}%` }}></div>
    </div>
  );
};

const QuizHeader = ({
  currentQuestion,
  totalQuestions,
  timeElapsed,
  totalTime,
}) => {
  return (
    <>
      <ProgressBar timeElapsed={timeElapsed} totalTime={totalTime} />
      <div style={styles.questionHeader}>
        <div>{`Question ${currentQuestion + 1} of ${totalQuestions}`}</div>
        <div style={{ marginLeft: "20%" }}>
          {totalTime - timeElapsed} seconds left
        </div>
      </div>
    </>
  );
};

const useQuizTimer = (totalTime, currentQuestion) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const startTime = useRef(Date.now());
  const timerRef = useRef(null);

  useEffect(() => {
    if (currentQuestion === 0) {
      setTimeElapsed(0);
      startTime.current = Date.now();
    }
    timerRef.current = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime.current) / 1000);
      setTimeElapsed(elapsedTime);
      if (elapsedTime >= totalTime) {
        clearInterval(timerRef.current);
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [currentQuestion, totalTime]);

  return timeElapsed;
};

export const Quiz = ({ questions, totalTime = 60 }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentQuestion: 0,
    answers: [],
    timeElapsed: 0,
  });

  const { currentQuestion, answers } = state;
  const totalQuestions = questions.length;

  // Use the custom hook for timer logic
  const timeElapsed = useQuizTimer(totalTime, currentQuestion);

  const handleAnswer = useCallback(
    (answer) => {
      dispatch({ type: "SET_ANSWER", payload: answer });
      dispatch({
        type: "SET_CURRENT_QUESTION",
        payload: currentQuestion + 1,
      });
    },
    [currentQuestion]
  );

  return (
    <div style={styles.container}>
      <div style={styles.questionContainer}>
        {currentQuestion < totalQuestions && timeElapsed < totalTime ? (
          <>
            <QuizHeader
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
              timeElapsed={timeElapsed}
              totalTime={totalTime}
            />
            <Question
              question={questions[currentQuestion]}
              handleAnswer={handleAnswer}
            />
          </>
        ) : (
          <>
            <Result questions={questions} answers={answers} />
          </>
        )}
      </div>
    </div>
  );
};
