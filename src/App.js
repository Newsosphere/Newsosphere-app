import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Home/Home'
import Weather from './Components/Weather/Weather'
import News from './Components/News/News'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="/news" element={<News />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}
