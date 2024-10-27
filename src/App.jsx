import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import HomePage from './pages/homepage/HomePage'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {

  let location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {

    const fetchData = async () => {

      try {
        let responseUserData = await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/getInforUser", {}, { withCredentials: true })
        let userData = responseUserData.data
        localStorage.setItem("userData", JSON.stringify(userData))
        navigate("/dashBoard")


      } catch (error) {

        try {
          await axios.post(import.meta.env.VITE_BACKEND_URL + "/getNewAccessToken", {}, { withCredentials: true })
          let responseUserData = await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/getInforUser", {}, { withCredentials: true })
          let userData = responseUserData.data
          localStorage.setItem("userData", JSON.stringify(userData))
          navigate("/dashBoard")

        } catch (error) {
          console.log(error);
          localStorage.removeItem("userData")
          navigate("/login")
        }

      }


    }



    fetchData()

  }, [])




  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
