import { useState, useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import land from "/land.png"
import health from "/healthcare.png"
import doctor from "/doctor.png"
import supershop from "/supershop.png"
import dreamshop from "/dreamshop.png"
import portfolio1 from "/portfolio1.png"
import bus from "/bus.png"

const items = [
  {
    id: 1,
    title: "NatureLease",
    language:"NestJs ,Nextjs, PostgreSQL, Typescript",
    img: land,
    desc: "Revolutionizing agriculture, our Land Rental initiative fosters a seamless connection between land seekers and farmers, simplifying transactions and providing access to equipment and fertilizers. all while introducing a marketplace for farm-related equipment. This comprehensive approach strives to revolutionize the agricultural landscape, making it accessible, efficient, and sustainable.",
    demoLink: "https://www.facebook.com/watch/?extid=CL-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=tUvUA8&v=414526164236688",
  },
  {
    id: 2,
    title: "BloodDonation&HealthCare",
    language:"Asp .Net ,Nextjs, MySQL",
    img:health,
    desc: "Empowering compassion, our platform serves as a bridge between those with a generous spirit and those in need. We facilitate the noble act of giving by seamlessly connecting donors who contribute both blood and funds with individuals facing urgent financial challenges. Together, we create a community where kindness and generosity converge to make a meaningful impact on lives, fostering a culture of support and solidarity.",
    demoLink: "https://www.facebook.com/watch/?extid=CL-UNK-UNK-UNK-IOS_GK0T-GK1C&mibextid=tUvUA8&v=2724379064384381",
  },
  {
    id: 3,
    title: "DreamShop360",
    language:"Reactjs, Nestjs",
    img: dreamshop,
    desc: "This is basically a ecommerce website. Where has multiple shop you can buy any product from this website. I'm trying to explore all the prodcut for different different outlets.This is my running project you can see the demo picture for this project.",
    demoLink: "https://github.com/mdfahad-khan/DreamShop-360/tree/main/ProjectDemo",
  },
  {
    id: 4,
    title: "SuperShop",
    language:"C#",
    img: supershop,
    desc: "This project is basically a super-shop where you can buy project. This project is build using C# and there has multiple features in this project we add seller then seller can sell the product and if admin want admin also do. You can see this projcet demo pic in the link below",
    demoLink: "https://github.com/mdfahad-khan/SuperShopManagementSystem-C-/tree/main/demo",
  },
  {
    id: 5,
    title: "DoctorAppointmentSystem",
    language:"C#, Oracle",
    img: doctor,
    desc: "This porject is all about doctor appointment system. This project is build using C# and oracle as a database. There has lot of functionality available in this project. We are trying express what a patient and doctor needs to do easily. and aslo you add dashborad please see the demo picture for this project .",
    demoLink: "https://github.com/mdfahad-khan/DoctorAppointmentSystem-c-plsql/tree/main/ProjectDemo",
  },
  {
    id:6,
    title: "Portfolio",
    language:"Html, Css, JavaScript",
    img: portfolio1,
    desc: "This is my first Portfolio. This portfolio is build using html css and javascript with the help of youtube and other resources under the link you see the live portfolio",
    demoLink: "https://evanahmedfahad.000webhostapp.com/portfolio.html?fbclid=IwAR1HtG6oka10J4iYUaGlFoky1aWNDc8Z5iNMI5na2T9Huu6qJfCwBISkVfo&mibextid=Zxz2cZ",
  },
  {
    id:7,
    title: "Bus-Tracker",
    language:"Nestjs, Nextjs, PostgreSQL, TailwindCSS",
    img: bus,
    desc: "This is my running project This project will help the unknow people who come into the dhaka city first time and find road and but also hotel.I'm trying to implement this project",
    demoLink: "https://github.com/mdfahad-khan/Bus-Traker",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [showDemo, setShowDemo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    setShowDemo(!showDemo);
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer " style={{ y }}>
            <h2 className="lg:text-[42px] text-[20px]">{item.title}</h2>
            <p className=" text-justify">{item.desc}</p>
            <button onClick={handleDemoClick}>
              {showDemo ? "Hide Details" : "See Deatails & Live"}
            </button>
            {showDemo && (
              <div className="demo">
                <h4 className="text-xl text-orange-500">Build this project using {item.language}.</h4>
                <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
                 <button class="border w-48 h-10 mt-3 bg-gray-400 text-white text-lg hover:bg-transparent hover:text-black shadow-red-and-blue hover:text-xl hover:font-bold">
                
                 Live Demo
                
              </button>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio bg-[#013550]" ref={ref}>
      <div className="progress">
        <h1 className="text-white text-4xl font-bold">Project Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
