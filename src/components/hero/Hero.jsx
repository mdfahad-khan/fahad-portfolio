import "./hero.scss";
import { motion } from "framer-motion";
// import { Typed } from "react-typed";
import Particles from "react-tsparticles";
import React, { useCallback, useState, useEffect } from "react";
import { loadSlim } from "tsparticles-slim";
import main from "/main2.png"

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const phrases = ["Web Developer", "Freelancer", "Fullstack Developer"];
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the current word
      const currentWord = phrases[wordIndex];

      // Update the currentPhrase state
      setCurrentPhrase((prev) => {
        const nextChar = currentWord.charAt(prev.length);
        return prev + nextChar;
      });

      // If the current word is fully typed, move to the next word
      if (currentPhrase === currentWord) {
        setWordIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setCurrentPhrase("");
      }
    }, 150); // Adjust the typing speed by changing the interval duration

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPhrase, wordIndex, phrases]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const outlineStyle = {
    WebkitTextStroke: "0.7px white", // Adjust the width and color as needed
    color: "transparent", // Make the text color transparent
  };

  return (
    <div className="">
      <div className="hero ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="particle"
          options={{
            // background: {
            //     color: {
            //         value: "#111111",
            //     },
            // },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 20,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>OPEN TO WORK</motion.h2>
            <motion.span
              variants={textVariants}
              className="xl:text-6xl lg:text-5xl sm:text-4xl text-[23px] xl:font-extrabold lg:font-bold font-bold "
              style={outlineStyle}
            >
              EVAN AHMED FAHAD
            </motion.span>
            <motion.span
              variants={textVariants}
              className="duration-500 xl:font-bold lg:font-bold lg:text-4xl  xl:text-5xl xl:max-w-[600px] lg:max-w-[450px] xl:h-4 lg:h-3 lg:mb-24 xl:mb-32  w-[300px] h-[80px] sm:text-4xl text-[26px] font-extrabold ">
              I'm a <br></br> {currentPhrase}
            </motion.span>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>
                See Vlog Post
              </motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            {/* <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            /> */}
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContainer cursor-pointer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          SOFTWARE ENGINEER
        </motion.div>
        <div className="imageContainer xl:mr-36 xl:mt-16 ">
          <motion.div
            variants={imgVariants}
            className="relative xl:h-[70%] xl:w-[100%]  h-[100%] w-[80%] rounded-full overflow-hidden border-16 border-transparent"
            
            style={{
          
              boxShadow: "0 0 10px rgba(0, 0, 0.6, 0.9)",
              
            }}
            // style={{
            //   maxwidth: "85%", // Set the desired width
            //   height: "85%", // Set the desired height
            //   borderRadius: "50%",
            //   overflow: "hidden",
            //   border: "16px solid transparent",
            //   // borderImage: "linear-gradient(90deg, red, blue) 1",
            //   boxShadow: "0 0 10px rgba(0, 0, 0.6, 0.9)",
            //   position: "relative", // Necessary for absolute positioning of borders
            // }}
          >
            <motion.img
              src={main}
              alt=""
              variants={imgVariants}
              initial="initial"
              className="w-full h-full block rounded-full z-3"
              animate="animate"
              // style={{
              //   width: "100%",
              //   height: "100%",
              //   display: "block",
              //   borderRadius: "50%",
              //   zIndex: 3,
              // }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
