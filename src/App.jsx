import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './component/navbar'

export default function App() {
  return(
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg"></div>
      <Navbar/>
        <Routes>
          <Route
            path='/'
            element={
              <Home/>
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites/>
            }
          />
          <Route
            path='/details'
            element={
              <Details/>
            }
          />
        </Routes>
    </div>
  )
}
