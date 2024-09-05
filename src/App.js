import React from 'react'

import { Footer, Blog, Possibility, Features, WhatKFK, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="header__container">
        <Navbar />
        <Header />
      </div>
      <WhatKFK />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
