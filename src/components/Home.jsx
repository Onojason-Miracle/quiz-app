// import React from "react";

// const Home = ({ startQuiz }) => {
//   const handleClick = () => {
//     console.log('na mimie be be this');
//     startQuiz();
//   };
  
//     return (
//       <div className="home">
//         <h1>Welcome to the Quiz App</h1>
//         <button   onClick= {handleClick} className="button">Start Quiz</button>

      

       

//       </div>
//     );
//   };

//   export default Home
  
const Home = ({ startQuiz }) => {
  const handleClick = () => {
    startQuiz();
    console.log('na mimie be be this');
   
  };

  const boundHandleClick = handleClick.bind(this);

  return (
    <div className="home">
      <h1>Welcome to the Quiz App</h1>
      <button onClick={boundHandleClick} className="button">Start Quiz</button>

      

       

      </div>
    );
  };

  export default Home;
