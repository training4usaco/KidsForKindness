import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Home, Mission, Team, Services, CTA, Blog, Donate } from './pages'
import './App.css'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-KMRPP84B'
}
TagManager.initialize(tagManagerArgs)

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
      <Footer />
    </>
  )
}

export default App
