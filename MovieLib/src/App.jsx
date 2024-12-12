import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Navegacao from './Components/Navegacao'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Navegacao />
      <Outlet />
    </div>
  )
}

export default App
