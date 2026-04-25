import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Button = (props) => {
  return (
    <button className='button' onClick={props.onClick}>{props.pesan}</button>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () => {
    const newFeedback ={
      ...feedback,
      good: feedback.good + 1
    }
    setFeedback(newFeedback)
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button pesan='good' onClick={handleGoodClick}/>
      <Button pesan='neutral'/>
      <Button pesan='bad'/>
      <h3>Statistics</h3>
      <p>Good: {feedback.good}</p>
      <p>Neutral: </p>
      <p>Bad: </p>
    </div>
  )
}

export default App
