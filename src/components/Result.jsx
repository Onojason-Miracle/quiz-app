import React from "react";

const Result = ({ score, totalQuestions, playAgain }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}/{totalQuestions}</p>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default Result;
