import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [response, setResponse] = useState();
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState([]);

  const suffle = (array) => {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  };

  useEffect(() => {
    if (response) {
      let answers = [
        ...response.results[questionNumber].incorrect_answers,
        response.results[questionNumber].correct_answer,
      ];
      setAnswer(suffle(answers));
    }
  }, [questionNumber, response]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (value) {
        setResponse(value);
      });
  }, []);

  if (isGameOver) {
    return (
      <div>
        {response.results.length - 1 === questionNumber && (
          <p>Your Score is : {score}</p>
        )}
      </div>
    );
  }
  if (response) {
    return (
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: response.results[questionNumber].question,
          }}
        ></p>
        <div>
          <p>
            {answer.map((value, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  checked={input === value}
                  onChange={(e) => {
                    setInput(e.target.checked ? value : "");
                  }}
                />{" "}
                <label htmlFor={index}>{value}</label>
              </React.Fragment>
            ))}
          </p>
          <button
            onClick={() => {
              setQuestionNumber((prevValue) => {
                if (response.results.length - 1 > prevValue) {
                  return prevValue + 1;
                }
                setIsGameOver(true);
                return prevValue;
              });
              if (response.results[questionNumber].correct_answer === input) {
                setScore((prev) => prev + 1);
              }
              setInput("");
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default App;
