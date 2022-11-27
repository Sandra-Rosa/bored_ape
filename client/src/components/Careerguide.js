import React from 'react'
import { useState } from 'react'
import Navbar2 from './Navbar2.js'
import './quizz.css'
const Careerguide = () => {
  var Questionbank = [
    {
      Question: "With respect to a network interface card, the term 10/100 refers to",
      Answers: [
        { Answer: "Protocol speed", isCorrect: false },
        { Answer: "A fiber speed", isCorrect: false },
        { Answer: "Megabits per second", isCorrect: false },
        { Answer: "Minimum and maximum server speed", isCorrect: true },
      ]
    },
    {
      Question: "When installing PCI NICS you can check the IRQ availability by looking at",
      Answers: [
        { Answer: "Dip switches", isCorrect: true },
        { Answer: "CONFIG.SYS", isCorrect: false },
        { Answer: "Jumper settings", isCorrect: false },
        { Answer: "Motherboard BIOS", isCorrect: false }
      ]
    },
    {
      Question: "Missing slot covers on a computer can cause?",
      Answers: [

        { Answer: " Over heat", isCorrect: true },
        { Answer: "Power surges", isCorrect: false },
        { Answer: "Eml", isCorrect: false },
        { Answer: "Incomplete path for ESD", isCorrect: false },

      ]
    },
    {
      Question: "What could cause a fixed disk error",
      Answers: [

        { Answer: "No cd installed", isCorrect: false },
        { Answer: "Bad ram", isCorrect: false },
        { Answer: "Slow processor", isCorrect: false },
        { Answer: "Incorrect CMOS settings", isCorrect: true },

      ]
    },
    {
      Question: "From what location are the first computer instructions available on boot up?",
      Answers: [

        { Answer: "ROM BIOS", isCorrect: true },
        { Answer: "CPU", isCorrect: false },
        { Answer: "Boot.ini", isCorrect: false },
        { Answer: "CONFIG.SYS", isCorrect: false },

      ]
    },
    {
      Question: "Which of the following is east like the others?",
      Answers: [

        { Answer: "Cube", isCorrect: false },
        { Answer: "Sphere", isCorrect: false },
        { Answer: "Pyramid", isCorrect: false },
        { Answer: "Circle", isCorrect: true },

      ]
    },
    {
      Question: "3,4,6,9,13,__ which comes next?",
      Answers: [

        { Answer: "15", isCorrect: false },
        { Answer: "16", isCorrect: false },
        { Answer: "18", isCorrect: true },
        { Answer: "19", isCorrect: false },

      ]
    },
    {
      Question: "Inner part of a timber log surrounding the pitch is called",
      Answers: [

        { Answer: "Sapwood", isCorrect: false },
        { Answer: "Cambium layer", isCorrect: false },
        { Answer: "Heart wood", isCorrect: true },
        { Answer: "None of these", isCorrect: false },

      ]
    },
    {
      Question: "Chemically marble is known as",
      Answers: [

        { Answer: "Metamorphic rock ", isCorrect: false },
        { Answer: "Argillaceous", isCorrect: false },
        { Answer: "Calcerous rock", isCorrect: true },
        { Answer: "Siliceous rock", isCorrect: false },

      ]
    },
    {
      Question: "Pick up the corect statement regarding low heat cement from the following",
      Answers: [

        { Answer: "It possesse less compressive strength ", isCorrect: true },
        { Answer: "Its initial setting time is about one hour", isCorrect: false },
        { Answer: "Its final setting time is about 10 hours", isCorrect: false },
        { Answer: "All the above", isCorrect: false },

      ]
    },
    {
      Question: "A badly mixed cement concrete results in",
      Answers: [
        { Answer: "Segregation", isCorrect: false },
        { Answer: "Bleeding", isCorrect: false },
        { Answer: "Honey combing", isCorrect: true },
        { Answer: "None of these", isCorrect: false },

      ]
    },
    {
      Question: "The rocks in which argil (or clay) predominates, are called",
      Answers: [

        { Answer: "Silicious rocks", isCorrect: true },
        { Answer: "Argillaceuos rocks", isCorrect: false },
        { Answer: "Calcareous rocks", isCorrect: false },
        { Answer: "Igneous rocks", isCorrect: false },
      ]
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [mathscore, setMathscore] = useState(0)
  // const [bioscore, setBioscore] = useState(0)
  const [result, setResult] = useState('')
  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setMathscore(mathscore + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
      if (mathscore) {
        setResult('Math related field')
      }
    }
  }
  return (
    <div>
      <div >
        <Navbar2 />
      </div>
      <div className='app'>
        {result ? (
          <div className='answertext'>
            You are good for {result}
          </div>
        ) : (
          <>
            <div className="question">
              <div className="quesnum">
                <span>{currentQuestion + 1}</span>/{Questionbank.length}
              </div>
              <div className="questext">
                {Questionbank[currentQuestion].Question}
              </div>
            </div>
            <div className='answer'>
              {Questionbank[currentQuestion].Answers.map((answer) => (
                <button onClick={() => handleAnswerResponse(answer.isCorrect)} className='answertext'>{answer.Answer}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default Careerguide