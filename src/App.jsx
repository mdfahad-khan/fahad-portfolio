import Test from "./Test";
import "./app.scss";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import SocialLink from "./components/socialLink/SocialLink";
import Video from "./components/video/Video";

const App = () => {
  return (
    <div >
      
      <Cursor />
      <section id="Homepage">
   
        <Navbar />
        <Hero />
        <SocialLink />
      </section>
   
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
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
    </div>
  );
};

export default App;
