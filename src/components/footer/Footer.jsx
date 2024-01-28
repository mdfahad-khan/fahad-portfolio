import React from 'react';
import fahadImage from '/stars.png'; // Replace with the path to your image

const Footer = () => {
  return (
    <div className="relative h-screen">
      {/* Full-screen Image */}
      <img
        src={fahadImage}
        alt="Fahad"
        className="w-full h-full object-cover"
      />

      {/* Overlay for Text and Navigation */}
      <div className="absolute inset-0 flex mt-36 flex-col items-center justify-center text-white">
        {/* Centered Text */}
        <p className="text-center mt-32 mb-6">
         <span className='lg:text-[110px] text-[40px] font-extrabold'>Let's work together!!</span>  <br></br><span className='lg:text-6xl  text-2xl font-extrabold'>Contact me for collaborations and projects.</span> 
        </p>

        {/* Navigation Bar */}
        <nav className="bg-gray-800 lg:mt-[180px] mt-[290px] text-white py-2 w-full">
          <div className="max-w-5xl mx-auto text-sm">
            {/* Add your navigation links here */}
            <div className="text-center">
              Made by Fahad
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
