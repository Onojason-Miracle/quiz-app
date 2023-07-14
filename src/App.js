import React, { useState } from "react";
import quizData from "./components/quizData";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitAnswer = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedOption("");
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="App">
      {!quizCompleted ? (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
          submitAnswer={submitAnswer}
          currentQuestion={currentQuestion}
        />
      ) : (
        <Result
          score={score}
          totalQuestions={quizData.length}
          playAgain={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default App;
