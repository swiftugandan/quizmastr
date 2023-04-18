import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { overlay, quizContainer, pageTitle } from "@/styles/styles";
import { useRouter } from "next/router";

const QuestionCreator = () => {
  const router = useRouter();
  const { year, subject } = router.query;
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [answer, setAnswer] = useState("");
  const [media, setMedia] = useState("");

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      question,
      options: options.filter((option) => option.trim() !== ""),
      answer,
      subject: subject.toLowerCase(),
      year,
      media,
    };

    console.log("New question:", newQuestion);

    // TODO: Submit new question to backend
  };

  return (
    <div style={overlay}>
      <div style={quizContainer}>
        <h1 style={pageTitle}>
          Add a level {year} {subject} question
        </h1>
        <div style={styles.container}>
          <form onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label htmlFor="question" style={styles.label}>
                Question:
              </label>
              <textarea
                type="text"
                id="question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label htmlFor="image" style={styles.label}>
                Image Link (Optional):
              </label>
              <input
                type="text"
                id="media"
                value={media}
                onChange={(event) => setMedia(event.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label htmlFor="audio" style={styles.label}>
                Audio Link (Optional):
              </label>
              <input
                type="text"
                id="media"
                value={media}
                onChange={(event) => setMedia(event.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label htmlFor="video" style={styles.label}>
                Video Link (Optional):
              </label>
              <input
                type="text"
                id="media"
                value={media}
                onChange={(event) => setMedia(event.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.field}>
              <label htmlFor="answer" style={styles.label}>
                Answer:
              </label>
              <input
                type="text"
                id="answer"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.fieldSet}>
              {options.map((option, index) => (
                <div key={index} style={styles.field}>
                  <label htmlFor={`option-${index}`} style={styles.label}>
                    Choice {index + 1}:
                  </label>
                  {options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                      style={styles.removeButton}
                    >
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        style={{ color: "red", fontSize: "1.5rem" }}
                      />
                    </button>
                  )}
                  <input
                    type="text"
                    id={`option-${index}`}
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(index, event.target.value)
                    }
                    required
                    style={styles.input}
                  />
                </div>
              ))}
            </div>
            <div style={styles.field}>
              <button
                type="button"
                onClick={handleAddOption}
                style={styles.addButton}
              >
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  style={{ color: "purple", fontSize: "1.5rem" }}
                />
              </button>
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    paddingTop: "4rem",
    backgroundColor: "#f5f5f5",
    marginTop: "2rem",
    fontFamily: "sans-serif",
    borderRadius: "10px",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
    marginBottom: "6rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
  fieldSet: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    padding: "1rem",
    borderRadius: "10px",
    border: "1px solid purple",
  },
  field: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    width: "100%",
  },
  input: {
    fontSize: "1.5rem",
    padding: "1rem",
    borderRadius: "5px",
    border: "1px solid purple",
    width: "75%",
    backgroundColor: "white",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#333",
    paddingRight: "0.5rem",
    width: "100px",
  },
  button: {
    fontSize: "1.2rem",
    backgroundColor: "purple",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "1rem",
  },
  addButton: {
    backgroundColor: "#fff",
    border: "1px solid purple",
    borderRadius: "50%",
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1rem",
    cursor: "pointer",
  },
  removeButton: {
    border: "none",
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1rem",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
};

export default QuestionCreator;
