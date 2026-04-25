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

function App() {
  const [count, setCount] = useState(0)

  



  return (
    <div>
      <h3>Give Feedback</h3>
      <h3>Statistics</h3>
    </div>
  )
}

export default App
