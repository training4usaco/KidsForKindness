import React from 'react';
import './header.css';
import bg from '../../assets/violin_bg.png'

const Header = () => {
  return (
    <div className="kfk__header section__padding" id="home">
      <div className="kfk__header-content">
        <h1 className="gradient__text">Music should sing, for everyone.</h1>
        <p>Fundraisers, concerts, social media coverage, we make music sing for all.</p>
        <div className="kfk__header-volunteer">
          <button type="button">Get Involved</button>
        </div>
      </div>
      <div className="kfk__header-bg">
        <img src={bg} alt="bg"/>
      </div>
    </div>
  )
}

export default Header
