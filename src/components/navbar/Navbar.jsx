import React, { useState,useEffect} from 'react';
import Sidebar from "../sidebar/Sidebar";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from '/youtube.png';
import { Link } from 'react-scroll/modules';
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navslide = {
    initial: {
      y: -50,
    },
    animate: {
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div className="navbar bg-gradient-to-b from-[#05496b] to-[#07385e]"
    variants={navslide}
          initial="initial"
          animate="animate"
          >
    {/* Sidebar */}
    <div className=''>{isMobile && <Sidebar />}</div>
    

      <div className="wrapper flex xl:space-x-[600px] text-2xl xl-p-8 lg:p-5 sm:p-3 ml-4 lg:space-x-[550px] sm:space-x-[100px] p-2">
        {/* Logo */}
        <div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
           className="logo xl-text-3xl lg:text-2xl lg:ml-0 sm:ml-96 ml-60 text-xl
           sm:text-xl font-sangharia  font-extrabold"
          
        >
          FAHAD
        </motion.span>
        </div>
        <div>
          {/* Navigation Links */}
        <ul className="hidden md:flex pr-16 gap-8 text-2xl font-semibold cursor-pointer">
          <li className="hover:border-b-4 duration-200">
            <Link to="hero" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:border-b-4 duration-200">
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li className="hover:border-b-4 duration-200">
            <Link to="portfolio" smooth duration={500}>
              Portfolio
            </Link>
          </li>
          <li className="hover:border-b-4 duration-200">
            <Link to="contact" smooth duration={500}>
              Contact
            </Link>
          </li>
          <li className="hover:border-b-4 hover:duration-200">
            <Link to="contact" smooth duration={500}>
              Blog
            </Link>
          </li>
        </ul>
          
        </div>


        
      </div>
    </motion.div>
  );
};

export default Navbar;
