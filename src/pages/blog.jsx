import { React, useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { motion } from "framer-motion";

const Blog = () => {
    function Blog(date, title) {
        return (
          <div className="flex flex-col w-1/4">
            <div className="h4 text-color-3 text-center">
              <p>{date}</p>
            </div>
            <div className="h5 text-color-3 pt-8 text-center leading-8">
              <p>{title}</p>
            </div>
          </div>
        );
    }

    return (
        <div className="flex flex-col bg-white h-auto items-center pb-40">
          <div className="flex flex-col py-20 items-center">
            <div className="flex h1 text-color-3 pt-20">
              <p>Blog</p>
            </div>
            <div className="grid grid-cols-3 gap-[calc(20px_+_20vw)] pt-20">
                {Blog("3/17/2024", "-")}
                {Blog("5/22/19", "-")}
                {Blog("3/11/19", "-")}
            </div>
          </div>
        </div>
      );
}

export default Blog
