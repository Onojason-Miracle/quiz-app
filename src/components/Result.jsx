import React from "react";

const Result = ({ score, totalQuestions, playAgain }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score}/{totalQuestions}
      </p>
      <p className="ptag">
        <button onClick={playAgain} className="btn">
          Play Again
        </button>
      </p>
    </div>
  );
};

export default Result;
