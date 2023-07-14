import React, { useState } from "react";
import Home from "./components/Home";
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
    if (selectedOption === quizData[currentQuestion - 1].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  
    setSelectedOption("");
    if (currentQuestion < quizData.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  

  const startQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setQuizCompleted(false);
  };


  return (
    <div className="App">
      {!quizCompleted ? (
        <>
          {currentQuestion === 0 ? (
            <Home startQuiz={startQuiz} />
          ) : null}
          {currentQuestion > 0 && currentQuestion <= quizData.length && (
            <Question
              question={quizData[currentQuestion - 1].question}
              options={quizData[currentQuestion - 1].options}
              selectedOption={selectedOption}
              handleOptionSelect={handleOptionSelect}
              submitAnswer={submitAnswer}
            />
          )}
        </>
      ) : (
        <Result score={score} totalQuestions={quizData.length} playAgain={startQuiz} />
      )}
    </div>
  );
};

export default App;
