import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";

const Team = () => {
  function Member(name, title, bio) {

    return (
      <div className="flex flex-col">
        <div className="h3 text-color-3 text-left">
          <p>{name}</p>
        </div>
        <div className="h4 text-color-5 text-left">
          <p>{title}</p>
        </div>
        <div className="body-1 text-color-3 pt-4 text-left">
          <p>{bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white h-auto items-center">
      <div className="flex h1 text-color-3 pt-40">
        <p>Meet Our Team</p>
      </div>
      <div className="flex flex-1 w-screen justify-evenly px-8 py-20 pb-40">
        {Member("Alexander Ma", "Founder", "N/A")}
        {Member("Bryan Ma", "Co-Founder", "N/A")}
      </div>
    </div>
  );
}

export default Team
