import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";

const Team = () => {
  function Member(name, title, bio) {

    return (
      <div className="flex flex-col border-none content-center items-center text-center py-10 px-40 h-[20rem]">
        <div className="h3 text-color-3 text-left">
          <p>{name}</p>
        </div>
        <div className="h4 text-color-5 text-left">
          <p>{title}</p>
        </div>
        <div className="body-1 text-color-3 pt-4 text-center">
          <p>{bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white h-auto">
      <div className="flex flex-col items-center">
        <div className="flex h1 text-color-3 pt-40">
          <p>Meet Our Team</p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          {Member("Alexander Ma", "Founder", "")}
          {Member("Alex Liu", "CTO", "I'm Alex Liu, a senior at Lynbrook High School. I've enjoyed competitive programming since middle school. In my free time, I like to play violin and sleep.")}
          {Member("Maggie Liu", "COO", "")}
        </div> 
        <div className="flex flex-col w-1/2 pt-40">
          {Member("Bryan Ma", "Co-Founder", "")}
          {Member("Aaron Li", "Primary Photographer", "Hi! I am Aaron Li, a junior at Basis Independent Silicon Valley. I am Kids for Kindness’s primary photographer and assistant videographer. Since 2021, I have enjoyed macro and candid photography most, while also shooting sports and event photography. Outside of school, I am also the mechanical lead and designer for my robotics team.")}
          {Member("Helen Wu", "Logistics", "")}
        </div>
      </div>
    </div>
  );
}

export default Team
