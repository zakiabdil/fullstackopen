import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/zakiabdil/fullstackopen'>zakiabdil</a>
    </div>
  )
}

function App(props) {
  const now = new Date()
  const a = 10
  const b = 20
  const parents = [{name: 'Udin', age: 30}, {name: 'Siti', age: 28}]

  return (
    <>
      <div>
        <p className='read-the-docs'>Hello world</p>
        <p>Today is {now.toString()}</p>
        <p>BTW, {a} + {b} is {a + b}</p>
        <p>{props.pesan} </p>
        <p>I have a Dad, his name is {parents[0].name}, he is {parents[0].age} years old</p>
        <p>I have a Mom, her name is {parents[1].name}, she is {parents[1].age} years old</p>
      </div>
      <h1>Greetings</h1>
      <Footer />
    </>
  )
}

export default App
