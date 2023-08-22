import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
