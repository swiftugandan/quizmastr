import Head from "next/head";
import { useState, useEffect } from "react";
import random from "random";

const generateProblem = () => {
  const OPERATIONS = ["+", "-", "×", "÷"];
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 12;
  const operation = random.choice(OPERATIONS);
  let a, b, answer;
  switch (operation) {
    case "+":
      a = random.int(MIN_NUMBER, MAX_NUMBER);
      b = random.int(MIN_NUMBER, MAX_NUMBER - a);
      answer = a + b;
      break;
    case "-":
      b = random.int(MIN_NUMBER, MAX_NUMBER);
      answer = random.int(MIN_NUMBER, MAX_NUMBER);
      a = answer + b;
      break;
    case "×":
      a = random.int(MIN_NUMBER, MAX_NUMBER);
      b = random.int(MIN_NUMBER, MAX_NUMBER);
      answer = a * b;
      break;
    case "÷":
      b = random.int(MIN_NUMBER, MAX_NUMBER);
      answer = random.int(MIN_NUMBER, MAX_NUMBER);
      a = b * answer;
      break;
  }
  return { a, b, operation, answer };
};

const styles = {
  background: {
    backgroundColor: "#F7EFEF",
    fontFamily: "Arial, sans-serif",
  },
  main: {
    padding: "2rem",
    position: "relative",
  },
  title: {
    color: "#3C6E71",
    fontSize: "3rem",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  problem: {
    backgroundColor: "#F2E7D9",
    borderRadius: "1rem",
    padding: "2rem",
  },
  problemText: {
    color: "#3C6E71",
    fontSize: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  problemNumber: {
    color: "#D9B08C",
    fontSize: "3rem",
  },
  problemOperator: {
    color: "#3C6E71",
    fontSize: "3rem",
    margin: "0 1rem",
  },
  answerInput: {
    backgroundColor: "#F2E7D9",
    border: "none",
    borderBottom: "2px solid #3C6E71",
    color: "#3C6E71",
    fontSize: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    width: "100%",
  },
  wrongAnswer: {
    color: "#D93A3A",
    fontSize: "1.5rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  feedback: {
    color: "#3C6E71",
    fontSize: "1.5rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  checkAnswerButton: {
    backgroundColor: "#3C6E71",
    border: "none",
    borderRadius: "1rem",
    color: "#F2E7D9",
    fontSize: "2rem",
    width: "100%",
    padding: "1rem",
  },
  scoreTracker: {
    position: "absolute",
    top: "2rem",
    right: "2rem",
    backgroundColor: "#fff",
    padding: "0 10px 0 10px",
    borderRadius: "10px 0px 10px 10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    zIndex: 999,
  },
  scoreText: {
    color: "#3C6E71",
    fontSize: "1rem",
    textAlign: "center",
    padding: "5px",
  },
};

const ScoreTracker = ({ score }) => {
  return (
    <div style={styles.scoreTracker}>
      {score.total && (
        <p style={styles.scoreText}>
          {score.correct} out of {score.total} correct
        </p>
      )}
    </div>
  );
};

const MathGame = () => {
  const [problem, setProblem] = useState(null);
  const [answer, setAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    setProblem(generateProblem());
  }, []);

  const handleCorrectAnswer = () => {
    setShowFeedback(true);
    setWrongAnswer(false);
    setScore((prevScore) => ({
      correct: prevScore.correct + 1,
      total: prevScore.total + 1,
    }));
    const correctAnswerSound = new Audio("/correct-answer-sound.wav");
    correctAnswerSound.play();
    setTimeout(() => {
      setShowFeedback(false);
      setProblem(generateProblem());
      setWrongAnswer(false);
      setAnswer("");
    }, 2000);
  };

  const handleIncorrectAnswer = () => {
    setWrongAnswer(true);
    setScore((prevScore) => ({
      ...prevScore,
      total: prevScore.total + 1,
    }));
    const wrongAnswerSound = new Audio("/wrong-answer-sound.wav");
    wrongAnswerSound.play();
  };

  const handleCheckAnswer = (e) => {
    e.preventDefault();
    if (parseInt(answer) === problem.answer) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
  };

  return (
    <div style={styles.background}>
      <Head>
        <title>Math Ninja</title>
        <meta name="description" content="A math game for 4 to 10 year olds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Math Ninja</h1>
        <ScoreTracker score={score} />
        {problem && (
          <div style={styles.problem}>
            <p style={styles.problemText}>
              Solve the problem:
              <br />
              <span style={styles.problemNumber}>{problem.a}</span>
              <span style={styles.problemOperator}>{problem.operation}</span>
              <span style={styles.problemNumber}>{problem.b}</span>
              <span style={styles.problemOperator}>=</span>
            </p>
            <form onSubmit={handleCheckAnswer}>
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
                style={styles.answerInput}
              />
              {wrongAnswer && (
                <p style={styles.wrongAnswer}>
                  Incorrect answer, please try again!
                </p>
              )}
              {showFeedback && (
                <p style={styles.feedback}>Great job, you got it right!</p>
              )}
              <button type="submit" style={styles.checkAnswerButton}>
                Check Answer
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

const ModalPage = () => {
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
      <MathGame />
    </div>
  );
};

export default ModalPage;
