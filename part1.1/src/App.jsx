import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        <Part part={props.parts[0]} exercise={props.exercises[0]}/>
      </p>
      <p>
        <Part part={props.parts[1]} exercise={props.exercises[1]}/>
      </p>
      <p>
        <Part part={props.parts[2]} exercise={props.exercises[2]}/>
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  var total = 0
  props.exercises.forEach(value => {
    total = value + total 
  }) 
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App
