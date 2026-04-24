import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Counter = (props) => {
  return (
    <h3>Click Counter: {props.count}</h3>
  )
}

const Button = (props) => {
  return (
    <button className='button' onClick={props.onClick}>{props.pesan}</button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const addCounter = () => {
    setCount(count+1)
  }
  const subCounter = () => {
    setCount(count-1)
  }
  const resetCounter = () => {
    setCount(0)
  }



  return (
    <div>
      <Counter count={count}/>
      <Button pesan='Add' onClick={addCounter}/>
      <Button pesan='Reset' onClick={resetCounter}/>
      <Button pesan='Sub' onClick={subCounter}/>
    </div>
  )
}

export default App
