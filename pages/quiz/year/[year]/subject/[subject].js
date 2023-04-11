import React from "react";
import { useRouter } from "next/router";
import Ajv from "ajv";
import { Quiz } from "@/components/Quiz";
import { overlay, pageTitle, newQuizButton } from "@/styles/styles";

const QuizPage = ({ questions }) => {
  const router = useRouter();
  const { year, subject } = router.query;

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={overlay}>
      <div>
        <h1 style={pageTitle}>
          {subject} Quiz (Level {year})
        </h1>
        <Quiz questions={questions} />
        <button
          style={newQuizButton}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0px 0px 1px 2px rgba(245, 166, 35, 0.75)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0px 4px 4px rgba(0, 0, 0, 0.25)")
          }
          onClick={handleReload}
        >
          New Quiz
        </button>
      </div>
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

const querySchema = {
  type: "object",
  properties: {
    subject: {
      type: "string",
      enum: [
        "literacy",
        "mathematics",
        "science",
        "art and design",
        "citizenship",
        "computing",
        "design and technology",
        "languages",
        "geography",
        "history",
        "music",
        "physical education",
        "religious education",
      ],
    },
    year: {
      type: "integer",
      minimum: 1,
      maximum: 6,
    },
    num: {
      type: "integer",
      minimum: 0,
      maximum: 10,
    },
  },
  required: [],
};

const ajv = new Ajv();
const validate = ajv.compile(querySchema);

export async function getServerSideProps(context) {
  console.log(context.query);
  const { subject = "mathematics", year = "3", num = "5" } = context.query;

  const data = {
    subject: subject.toLowerCase(),
    year: parseInt(year),
    numberOfQuestions: parseInt(num),
  };

  const valid = validate(data);

  if (!valid) {
    console.error(validate.errors);
    throw new Error("Invalid query parameters");
  }

  const sharedSecret = process.env.SHARED_SECRET;
  const url = `https://us-east-1.aws.data.mongodb-api.com/app/data-mgwtr/endpoint/getQuizQuestions?secret=${sharedSecret}`;

  const questions = await getQuizQuestions(url, data);

  return { props: { questions } };
}

export default QuizPage;
