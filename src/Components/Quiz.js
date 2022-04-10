import React from 'react'
import questions from '../Assets/QuizQuestions'
import './Quiz.css'
import { useState } from 'react';
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswered,setIsAnswered]=useState(false);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);
    const handleOnSelection= async(Option)=>{
      if(!isAnswered){
      const delay = ms => new Promise(res => setTimeout(res, ms));
     

      setIsAnswered(true)

      if(Option.isTrue){
        setIsAnsweredCorrectly(true)
      }
      
      if(currentQuestion+1<questions.length){
        let tmp=currentQuestion+1;

        await delay(2500);
        //wait 5 sec before next quesiton

        setCurrentQuestion(tmp)

        setIsAnswered(false)
      }
    }
    }

   
    const handleOnSelectionTryAgain=async()=>{
      setIsAnswered(false)
      setIsAnsweredCorrectly(false)
      setCurrentQuestion(0);
    }
  return (
    <div className='Quiz-app'>

      <div className='Quiz-Question'>{questions[currentQuestion].Question} 
      
      {isAnswered&&isAnsweredCorrectly&&
      <div className='Quiz-QuestionExplain-correct'>
        Your Answer is Correct!
        </div>}
        {isAnswered&&!isAnsweredCorrectly&&
        <div className='Quiz-QuestionExplain-wrong'>
        Your Answer is wrong. Correct Answer is {questions[currentQuestion].Options[questions[currentQuestion].Answer].Answer}
        </div>}
        
        </div>

     
      <div className='Quiz-Options'>

        <button className='Quiz-buttons'  onClick={()=>handleOnSelection(questions[currentQuestion].Options[0])}>
          {questions[currentQuestion].Options[0].Answer}</button>

        <button className='Quiz-buttons' onClick={()=>handleOnSelection(questions[currentQuestion].Options[1])}>
          {questions[currentQuestion].Options[1].Answer}</button>

        <button className='Quiz-buttons' onClick={()=>handleOnSelection(questions[currentQuestion].Options[2])}>
          {questions[currentQuestion].Options[2].Answer}</button>

        <button className='Quiz-buttons' onClick={()=>handleOnSelection(questions[currentQuestion].Options[3])}>
          {questions[currentQuestion].Options[3].Answer}</button>
          <div>
          {/* {(currentQuestion+1<questions.length)  &&<button className='Next-button' onClick={()=>handleOnSelectionNext()}>Next</button>} */}
          {(currentQuestion+1===questions.length) &&<button className='Next-button' onClick={()=>handleOnSelectionTryAgain()}>Try again!</button>}
          </div>
      </div>
          
    </div>
  )
}
