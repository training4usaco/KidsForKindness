import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Donate = () => {
  return (
    <div className="flex flex-col bg-white h-auto pb-40">
      <div className="flex flex-1 flex-row pl-[7vw]">
        <div className="flex flex-col w-[50vw]">
          <div className="flex h1 font-medium whitespace-nowrap pt-40">
            <p>Donate Now</p>
          </div>
          <div className="flex body-1 pt-8 text-left leading-8">
            <p>At Kids for Kindness, we believe in using the power of music to make a difference in the world. With your support, we can continue to make a positive impact on our communities. Your donation will directly contribute to our mission, and enable us to arrange future performances in hospitals, nursing homes, and community centers, provide free music classes and summer programs, as well as organize other opportunities for the benefit of our communities.</p>
          </div>
          <div className="flex body-1 pt-4 text-left leading-8">
            <p>Every donation, no matter how small, makes a difference. Your generosity helps us reach more children, families, and individuals through our music.</p>
          </div>
          <div className="flex h6 pt-8">
            <p>Ways to Donate: </p>
          </div>
          <div className="flex body-1 pt-8 text-left leading-8">
            <p>One-time Donation: Make a one-time donation to support our cause.</p>
          </div>
          <div className="flex body-1 pt-4 text-left leading-8">
            <p>Sponsorship: Partner with us to support our mission, and receive recognition for your business. </p>
          </div>
          <div className="flex body-1 pt-4 text-left leading-8">
            <p>Kids for Kindness is a 501(c)(3) nonprofit organization, where all donations are tax-deductible.  With your support, we can continue to spread kindness through the power of music. Together, we can make the world a better place, one note at a time.</p>
          </div>
        </div>
        <div className="pl-[5vw] pr-[7vw] pt-[17rem]">
          <div className="flex bg-contain bg-no-repeat bg-[url('./assets/art_studio_bg.png')]">
            <div className="w-[50rem] h-[35rem]"/>
          </div>
        </div>
      </div>
      <div className="flex pt-16 justify-center">
        <NavLink to="/donate"><motion.button className="body-1 px-64 py-6 bg-black font-text text-white" type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >Donate</motion.button></NavLink>
      </div>
    </div>
  );
}

export default Donate