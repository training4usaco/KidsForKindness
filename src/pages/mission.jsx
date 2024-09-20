import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <div className="flex flex-col bg-white h-auto">
      <div className="flex flex-1 flex-row pl-[10vw]">
        <div className="flex h1 whitespace-nowrap pt-40 pb-80 text-color-3">
          <p>Our Mission</p>
        </div>
        <div className="flex body-2 py-40 text-color-3 px-[15vw] leading-8">
          <p>
Our mission is to spread joy to our communities through music and talent.  Our team of volunteers organizes performances, fundraising concerts, and other welfare events, for the benefit of our communities. We strive to provide our volunteers valuable opportunities to interact with the community in a positive way, to develop character, self-confidence, and leadership skills. As a nonprofit, Kids for Kindness also raises money for charity through its various fundraising events and concerts.</p>
        </div>
      </div>
    </div>
  );
}

export default Mission
