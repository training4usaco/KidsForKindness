import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  function Service(title, text) {

    return (
      <div className="flex flex-col w-1/4">
        <div className="h2 text-color-3 text-center">
          <p>{title}</p>
        </div>
        <div className="body-1 text-color-3 pt-8 text-center leading-8">
          <p>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white h-auto items-center">
      <div className="flex flex-col py-20 items-center">
        <div className="flex h1 text-color-3 pt-20">
          <p>Our Work</p>
        </div>
        <div className="flex flex-1 w-screen justify-evenly px-8 py-16">
          {Service("Performances", "Kids for Kindness hosts routine performances at public venues across the Bay Area, like nursing homes and hospitals. Musicians of all instruments are welcome to join us at these events.")}
          {Service("Concerts", "Kids for Kindness hosts large community fundraising concerts, in addition to routine performances. These event are formal, and provide students opportunities to perform, collaborate, lead, in addition to volunteering.")}
          {Service("Other", "Aside from routine performances and formal concerts, Kids for Kindness occasionally hosts special events, such as public outdoor performances, tutoring, masterclasses, and even talent shows. Volunteer hours will be provided at all of our opportunities!")}
        </div>
      </div>

      <div className="flex flex-row bg-black w-screen mb-40">
        <div className="flex flex-col h-[40rem] px-[10vw] pt-40">
          <div className="h5 text-white">
            <p>Join Us</p>
          </div>
          <div className="h6 pt-4 font-extralight text-white">
            <p>Learn how you can contribute to your community.</p>
          </div>

          <div className="flex pt-16 justify-center">
            <NavLink to="/cta"><motion.button className="body-1 px-32 py-6 bg-color-2 font-text" type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Get Involved</motion.button></NavLink>
          </div>
        </div>
        <div className="flex flex-grow bg-cover overflow-hidden bg-[url('./assets/services_bg.png')]">
          <div className="w-[40rem] h-[40rem] bg-black-gradient"/>
        </div>
      </div>
    </div>
  );
}

export default Services
