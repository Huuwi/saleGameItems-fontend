import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Login from './components/login/Login'
import Register from './components/register/Register'
import HomePage from './components/homepage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
