import React from "react";

const Question = ({ question, options, selectedOption, handleOptionSelect, submitAnswer }) => {
  console.log(question, options, selectedOption, handleOptionSelect, submitAnswer);

  return (
    <div>
      <h2>{question}</h2>
      <ul>
      {options.map((option, index) => (
  <li key={index}>
    <label>
      <input
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
      <button onClick={submitAnswer}>Next</button>
    </div>
  );
};

export default Question;


