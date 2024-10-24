import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  useEffect(() => {

    const fetchData = async () => {

      await axios.post(import.meta.env.VITE_BACKEND_URL + "/..captcha")

    }

  })

  return (
    <>

    </>
  )
}

export default App
