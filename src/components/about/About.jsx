// eslint-disable-next-line no-unused-vars
import image from "/fahad.jpg";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
const imgVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const phrases = ["Web Developer", "Freelancer", "Fullstack Developer"];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current word
      const currentWord = phrases[wordIndex];

      // Update the currentPhrase state
      setCurrentPhrase((prev) => {
        const nextChar = currentWord.charAt(prev.length);
        return prev + nextChar;
      });

      //   const isInView = useInView(ref, { margin: "-100px" });
      // If the current word is fully typed, move to the next word
      if (currentPhrase === currentWord) {
        setWordIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setCurrentPhrase("");
      }
    }, 150); // Adjust the typing speed by changing the interval duration

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPhrase, wordIndex, phrases]);
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-200 to-gray-300 text-gray-900 mt-0"
    >
      <div className=" lg:p-4 p-0 mx-auto  flex flex-col justify-center lg:w-full h-full w-[400px]  ">
        <div className="lg:ml-40 ml-0 md:mt-10"></div>
        <div className="lg:w-[1100px] w-[370px]  md:my-10 mx-auto lg:ml-24 lg:mr-24 ml-2 mr-2 md:grid grid-cols-3">
          <motion.div
            variants={imgVariants}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" col-span-1 md:w-[90%] w-[200px] lg:ml-0 ml-20 text-center "
          >
            <img
              src={image}
              alt=""
              className="inline rounded-sm lg:mt-12 lg:mr-12 mt-0 md:mt-16 shadow-md"
            />
          </motion.div>
          <div className=" col-span-2 lg:m-2 flex flex-col justify-center ml-0">
            <p className="lg:text-4xl text-3xl font-boll inline border-b-4 border-gray-500 font-momo font-bold text-gray-800 ">
              About Me
            </p>
            <h2 className="text-[#A33047] font-bold my-2 lg:text-2xl text-2xl">
              I am a {currentPhrase}
            </h2>
            <p className="text-justify lg:text-xl text-[14px]">
              I've just completed a rigorous journey through the halls of
              American International University, emerging with a Bachelor's
              degree in Computer Science Engineering. My academic adventure
              exposed me to the core principles of algorithms, data structures,
              software engineering, and more, fueling my desire to apply these
              skills in a real-world setting. Proficient in Python, HTML, CSS,
              JavaScript, typescript, Nodejs,Next js React js, databases, and
              APIs. Innovation enthusiast with a knack for quick learning.
              Explored many projects showcasing adaptability. Effective
              collaborator with refined teamwork and communication skills from
              group projects, code force, and coding challenges. Web development
              aficionado.Seeking a dynamic role to channel my tech skills and
              drive innovation. Open to software development, system analysis,
              and more.
            </p>
            <div class="button-with-shadows">
              <button class="border lg:w-48 lg:h-12 w-34 h-8 mt-5 bg-gray-800 text-white lg:text-xl text-sm p-1 hover:bg-transparent hover:text-black shadow-red-and-blue hover:text-xl hover:font-extrabold">
                <a href="../../../public/fahad.pdf" download="fahad.pdf">
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
