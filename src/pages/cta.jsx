import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="flex flex-col bg-white h-auto">
      <div className="flex flex-1 flex-row pl-[10vw]">
        <div className="flex flex-col w-[25vw]">
          <div className="flex h1 font-medium whitespace-nowrap pt-40 text-color-3">
            <p>Get Involved</p>
          </div>
          <div className="flex h6 pt-8 text-color-3">
            <p>Volunteer</p>
          </div>
          <div className="flex body-1 pt-8 text-color-3 text-left leading-8">
            <p>Volunteer at our local events.  Kids for Kindness has opportunities for students to perform at events, interact with the community, and even host their own events.</p>
          </div>
          <div className="flex h6 pt-8 text-color-3">
            <p>Participate</p>
          </div>
          <div className="flex body-1 pt-8 text-color-3 text-left leading-8">
            <p>Our events are dedicated towards bringing joy to the community, and all proceeds will be donated to various charities.</p>
          </div>
          <div className="flex py-16">
            <motion.button className="body-1 px-32 py-6 bg-black font-text text-white" type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ><a href="https://forms.gle/CyExHQJCvnseDxyK9">Volunteer Now!</a></motion.button>
          </div>
        </div>
        <div className="px-[10vw] pt-44">
          <div className="flex bg-contain bg-no-repeat bg-[url('./assets/clarinet_bg.jpg')]">
            <div className="w-[50rem] h-[35rem]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA
