import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Home, Mission, Team, Services, CTA, Blog, Donate } from './pages'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  )
}

export default App
