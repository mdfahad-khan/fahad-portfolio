import Test from "./Test";
import "./app.scss";
import Nav from "./components/Nav/Nav";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

import Parallax from "./components/parallax/Parallax";
import Particle from "./components/particle";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import SocialLink from "./components/socialLink/SocialLink";
import Video from "./components/video/Video";

const App = () => {
  return (
    <div >
      
      <Cursor />
      <section id="Homepage">
        {/* <Particle /> */}
        <Navbar />
        <Hero />
        <SocialLink />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      {/* <section>
        <Services />
      </section> */}
      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      <Portfolio />
      <section>
        <Video />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
