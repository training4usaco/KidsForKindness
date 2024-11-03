import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";

const Team = () => {
  function Member(name, title, bio) {

    return (
      <div className="flex flex-col border-none">
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
      <div className="w-screen place-items-center grid grid-cols-3 border-0 m-0 divide-x py-20 px-20">
        {Member("Alexander Ma", "Founder", "")}
        {Member("Bryan Ma", "Co-Founder", "")}
        {Member("Alex Liu", "CTO", "")}
      </div>
      <div className="w-screen place-items-center grid grid-cols-2 border-0 divide-x py-20 px-20">
        {Member("Maggie Liu", "COO", "")}
        {Member("Helen Wu", "SVP", "")}
      </div>
    </div>
  );
}

export default Team
