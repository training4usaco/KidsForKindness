import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import './navbar.css';

// BEM -> BLock Element Modifier convention

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <div className={"flex" + (toggleMenu ? " flex-col" : " flex-row")}>
      <NavLink className="nav-link" to="/mission">Our Mission</NavLink>
      <NavLink className="nav-link" to="/team">Team</NavLink>
      <NavLink className="nav-link" to="/services">Services</NavLink>
      <NavLink className="nav-link" to="/cta">Get Involved</NavLink>
      <NavLink className="nav-link" to="/blog">Blog</NavLink>
    </div>
  )

  return (
    <div className="kfk__navbar">
      <div className="kfk__navbar-links">
        <div className="kfk__navbar-links_title">
          <NavLink className="nav-link-title" to="/">Kids For Kindness</NavLink>
        </div>
        <div className="kfk__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="kfk__navbar-donate">
        <NavLink to="/donate"><motion.button type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >Donate Now</motion.button></NavLink>
      </div>
      <div className="kfk__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={29} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={29} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="kfk__navbar-menu_container scale-up-center">
            <div className="kfk__navbar-menu_container-links flex flex-col justify-end">
              <Menu />
              <div className="kfk__navbar-menu_container-links-donate">
                <NavLink to="/donate"><motion.button type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >Donate Now</motion.button></NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar