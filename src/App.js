import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Nav/Navbar'
import About from './components/About/About'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <About />
        <h1>Smoke Safe</h1>
      </header>
    </div>
  )
}

export default App
