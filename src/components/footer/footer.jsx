import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import icon from '../../assets/instagram_icon.png';

// BEM -> BLock Element Modifier convention

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-no-repeat bg-[url('./assets/section_border_background.png')] bg-[length:100vw_10rem]">
        <div className="h-[10rem]"/>
      </div>
      <div className="relative flex flex-row bg-color-2 min-h-64">
        <div className="relative flex title-1 px-[4vw] py-20">
          <p>Kids For Kindness</p>
        </div>

        <div className="relative flex flex-col px-[8vw] py-20">
            <div className="title-1 text-[28px]">
                <p>Our Socials</p>
            </div>
            <div className="body-1 flex flex-row py-4 cursor-pointer">
                <img src={icon} alt="icon" className="w-6 h-6"/>
                <p className="px-4"><a href="https://www.instagram.com/kidsforkindnessca">Instagram</a></p>
            </div>
        </div>

        <div className="relative flex flex-col px-[8vw] py-20 body-1 grow-[3]">
            <div className="title-1 text-[28px] text-left pb-4">
                <p>About us</p>
            </div>
            <div className="flex flex-row float-right justify-between underline">
                <NavLink to="/mission">Our Mission</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/services">Services</NavLink>
            </div>
            <div className="flex flex-row float-right justify-between underline">
                <NavLink to="/cta">Get Involved</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/donate">Donate</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer