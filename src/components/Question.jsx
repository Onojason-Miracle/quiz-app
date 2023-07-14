import React from "react";

const Question = ({
  question,
  options,
  selectedOption,
  handleOptionSelect,
  submitAnswer,
  currentQuestion,
}) => {
  return (
    <div className="qstn">
      <div className="questions">
        <h2>Hey! welcome to my simple quiz app</h2>
        <h4>Lets See how well you know HTML and CSS!</h4>
      </div>

      <div className="quiz">
        <h2>
          Question {currentQuestion + 1}: {question}
        </h2>
        <ul className="ul">
          {options.map((option, index) => (
            <li key={option} className="li">
              <label>
                <input
                  className="input"
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionSelect}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <p className="pbtn">
          <button onClick={submitAnswer} className="button">
            Next
          </button>
        </p>
      </div>
    </div>
  );
};

export default Question;
