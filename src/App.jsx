import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Weather from './Components/Weather/Weather'
import News from './Components/News/News'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  console.log(process.env)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="/news" element={<News alanKey={process.env.REACT_APP_ALAN_NEWS} />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}
