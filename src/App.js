import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Home, Mission, Team, Services, CTA, Blog, Donate } from './pages'
import './App.css'
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'G-ETM42TEX59'
}
TagManager.initialize(tagManagerArgs)

const App = () => {
  window.dataLayer.push({
    event: 'pageview'
  });
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
