import { useState } from 'react';
import './Qpage.styles.css';
import Questions from '../Question.js';
import { useNavigate } from 'react-router-dom';

function QuizzPage() {

  const navigate = useNavigate();

  const [showResults , setShowResults] = useState(false);
  const[score , setScore] = useState(0);
  const[currentQuestion, setCurrentQuestion]= useState(0);

  const optionClicked = (isCorrect)=>{
      if (isCorrect){
        setScore(score + 1);
      }
      if(currentQuestion + 1 < Questions.length){
        setCurrentQuestion(currentQuestion + 1)
      }
      else{
        setShowResults(true);
      }
  }
  const retake =()=>{
      setScore(0);
      setCurrentQuestion(0);
      setShowResults(false);
  }
  const goToLog =()=>{
    navigate('/');
  }

  return (
    <div className='Qpage'>
      
     
     { showResults ? (
     
     <div className='results'>
     <h1>Your Result</h1>
     <h3>{score} out of {Questions.length} is correct -({(score/Questions.length)*100}% )</h3>
     <button onClick={retake}>Retake</button>
     <button onClick={goToLog}>Close</button>
     </div> ):(
      <div>
      <div>
      <h1>Quizz Time</h1>
      </div>
     <div className="q-con">
        <h2>Question {currentQuestion +1} out of {Questions.length}</h2>
        <h3>{Questions[currentQuestion].text}</h3>
      
      <ul>
       {
        Questions[currentQuestion].options.map((option) =>{
          return(
            <li key={option.id} onClick={()=>{optionClicked(option.isCorrect)}}>{option.text}</li>
          )
        })
       }
      </ul>
      </div>
      </div>
     )}

      
    </div>
  )
}

export default QuizzPage;