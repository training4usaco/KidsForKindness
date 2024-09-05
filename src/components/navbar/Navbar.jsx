import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

// BEM -> BLock Element Modifier convention

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <p><a href="#mission">Our mission</a></p>
      <p><a href="#members">Team</a></p>
      <p><a href="#services">Services</a></p>
      <p><a href="#volunteer">Get Involved</a></p>
      <p><a href="#blogs">Blog</a></p>
    </>
  )

  return (
    <div className="kfk__navbar">
      <div className="kfk__navbar-links">
        <div className="kfk__navbar-links_title">
          <p><a href="#home">Kids For Kindness</a></p>
        </div>
        <div className="kfk__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="kfk__navbar-donate">
        <button type="button">Donate Now</button>
      </div>
      <div className="kfk__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="kfk__navbar-menu_container scale-up-center">
            <div className="kfk__navbar-menu_container-links">
              <Menu />
              <div className="kfk__navbar-menu_container-links-donate">
                <button type="button">Donate Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
