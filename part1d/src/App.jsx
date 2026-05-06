import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Button = (props) => {
  return (
    <button className='button' onClick={props.onClick}>{props.pesan}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.pesan}: {props.value} {props.suffix}</p>
  )
}

const Statistics = (props) => { 
  const feedback = props.feedback
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {
    // Logika ini hanya berjalan JIKA salah satu dari ketiga variabel di bawah berubah
    const total = feedback.good + feedback.neutral + feedback.bad
    const average = ((feedback.good * 1) + (feedback.bad * -1))/total
    const positive = (feedback.good/total) * 100
    setTotal(total)
    setAverage(average)
    setPositive(positive)
  }, [feedback.good, feedback.neutral, feedback.bad]);

  if (total == 0){
    return (
      <div>
      <h3>Statistics</h3>
      <p>No feedback given</p>
    </div>
    )
  } else {
    return (
      <div>
      <h3>Statistics</h3>
      <StatisticLine pesan='Good' value={feedback.good}/>
      <StatisticLine pesan='Neutral' value={feedback.neutral}/>
      <StatisticLine pesan='Bad' value={feedback.bad}/>
      <StatisticLine pesan='All' value={total}/>
      <StatisticLine pesan='Average' value={average}/>
      <StatisticLine pesan='Positive' value={positive} suffix='%'/>
    </div>
    )
  }
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

  const handleNeutralClick = () => {
    const newFeedback ={
      ...feedback,
      neutral: feedback.neutral + 1
    }
    setFeedback(newFeedback)
  }

  const handleBadClick = () => {
    const newFeedback ={
      ...feedback,
      bad: feedback.bad + 1
    }
    setFeedback(newFeedback)
  }

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button pesan='good' onClick={handleGoodClick}/>
      <Button pesan='neutral' onClick={handleNeutralClick}/>
      <Button pesan='bad' onClick={handleBadClick}/>
      <Statistics feedback={feedback}/>
    </div>
  )
}

export default App
