
import { useState, useEffect } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Academics from "./components/Academics/Academics";
import About from "./components/about/About";
import Loader from "./components/loader/Loader";
import Chatbot from "./components/chatbot/Chatbot";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio"; // Add this import

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation items
  const items = ["Home", "About", "Academics", "Services", "Skills", "Portfolio", "Contact"];

  return (
    <div>
      {isLoading && <Loader />}
      
      {!isLoading && (
        <>
          {/* Show Sidebar for mobile devices */}
          {isMobile && <Sidebar items={items} />}
          
          <section id="Home">
            {/* Show Navbar only for non-mobile devices */}
            {!isMobile && <Navbar />}
            <Hero />
          </section>
          
          <section id="About">
            <Parallax type="about" />
          </section>
          <section>
            <About />
          </section>
          
          <section id="Academics">
            <Parallax type="Academics" />
          </section>
          <section>
            <Academics />
          </section>
          
          <section id="Services">
            <Parallax type="services" />
          </section>
          <section>
            <Services />
          </section>
          
          <section id="Skills">
            <Parallax type="skills" />
          </section>
          <section>
            <Skills />
          </section>
          
          <section id="Portfolio">
            <Parallax type="portfolio" />
          </section>
          <section>
            <Portfolio /> {/* Add this line */}
          </section>
          
          <section id="Contact">
            <Contact />
          </section>
        </>
      )}
      
      {/* Chatbot component - moved outside the conditional rendering for sections */}
      {!isLoading && <Chatbot />}
    </div>
  );
};

export default App;
