import React from 'react';
import './header.css';
import { motion } from "framer-motion"
import bg from '../../assets/violin_bg.png'

const Header = () => {
  return (
    <div className="kfk__header" id="home">
      <div className="kfk__header-content">
        <h1 className="gradient__text">Music should sing, for everyone.</h1>
        <p>Fundraisers, concerts, social media coverage, we make music sing for all.</p>
        <div className="kfk__header-volunteer">
          <motion.button type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >Get Involved</motion.button>
        </div>
      </div>
      <div className="kfk__header-bg">
        <img src={bg} alt="bg"/>
      </div>
    </div>
  )
}

export default Header
