import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import html from "/html.png";
import css from "/tailwind.png";
import JavaScript from "/javascript.png";
import react from "/react.png";
import node from "/nodejs.png";
import Oracle from "/oracle3.png";
import mysql from "/mysql.png";
import dotnet from "/dotnet.jpg";
import c from "/c.jpg";
import next from "/Nextjs.png";
import postgresql from "/postgresql.png";
import bootstrap from "/bootstrap.jpeg";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-300",
    },
    {
      id: 2,
      src: css,
      title: "TailwindCSS",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-300",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-300",
    },
    {
      id: 6,
      src: mysql,
      title: "My SQL",
      style: "shadow-orange-300",
    },
    {
      id: 7,
      src: c,
      title: "C#",
      style: "shadow-purple-300",
    },
    {
      id: 8,
      src: dotnet,
      title: "ASP .Net",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: Oracle,
      title: "Oracle",
      style: "shadow-red-300",
    },
    {
      id: 10,
      src: next,
      title: "Next Js",
      style: "shadow-gray-100",
    },
    {
      id: 11,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-blue-300",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-400",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      name="experience"
      className="bg-[#013550] w-full h-full z-50"
    >
      <div className="max-w-screen-xl mx-auto lg:p-8  p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="lg:text-4xl text-3xl text-center  font-bold border-b-8 border-gray-50 mt-8 lg:mt-6">
            Experience
          </p>
          <p className="lg:py-2 py-2  lg:text-3xl text-xl text-center">
            Those are the technologies that I've worked on
          </p>
        </div>
        <motion.div
          className="w-full grid grid-cols-3 sm:grid-cols-4 lg:gap-4 gap-4 text-center lg:py-4 py-3 lg:px-12 px-6 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 lg:w-60 rounded-lg ${style}`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={src} alt="" className=" lg:w-16 w-16 mx-auto" />
              <p className="mt-4 lg:text-xl text-[12px]">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
