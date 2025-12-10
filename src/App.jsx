import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import TurnirPage from './pages/turnir/TurnirPage'
import Layout from './components/Layout'
import NotFound from './pages/not-found/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='turnir' element={<TurnirPage />} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App