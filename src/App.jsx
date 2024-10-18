import React from "react"
import { Route, Routes } from "react-router-dom"
import { Cursos, Home } from "./Pages"
import '../src/App.css'
import Curses from "./Pages/Cursos/Curses"

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/cursos/producto/:curse_nombre' element={<Curses/>}/>
      </Routes>
    </>
  )
}

export default App