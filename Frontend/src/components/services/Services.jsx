import { useRef, useState, useEffect } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

// Create responsive variants based on screen size 
const getVariants = (isMobile, isTablet) => ({ 
  initial: { 
    x: isMobile ? -100 : isTablet ? -300 : -500, 
    y: isMobile ? 50 : 100, 
    opacity: 0, 
  }, 
  animate: { 
    x: 0, 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: isMobile ? 0.7 : 1, 
      staggerChildren: isMobile ? 0.08 : 0.1, 
    }, 
  }, 
}); 

// Box hover variants with touch-friendly alternatives 
const getBoxVariants = (isMobile, isTablet) => ({ 
  initial: { opacity: 0, scale: 0.9 }, 
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.3 } 
  }, 
  hover: isMobile || isTablet ? { 
    scale: 1.03, 
    backgroundColor: "rgba(211, 211, 211, 0.9)", 
    color: "black", 
    transition: { duration: 0.3 } 
  } : { 
    backgroundColor: "lightgray", 
    color: "black" 
  } 
}); 

const Services = () => { 
  const ref = useRef(); 
  const isInView = useInView(ref, { margin: "-100px" }); 
  const [isMobile, setIsMobile] = useState(false); 
  const [isTablet, setIsTablet] = useState(false); 

  // Check screen size on mount and resize 
  useEffect(() => { 
    const checkScreenSize = () => { 
      setIsMobile(window.innerWidth <= 738); 
      setIsTablet(window.innerWidth > 738 && window.innerWidth <= 1024); 
    }; 
    
    checkScreenSize(); 
    window.addEventListener("resize", checkScreenSize); 
    
    return () => window.removeEventListener("resize", checkScreenSize); 
  }, []); 

  const variants = getVariants(isMobile, isTablet); 
  const boxVariants = getBoxVariants(isMobile, isTablet); 
  
  // Function to navigate to portfolio section with filter
  const navigateToPortfolio = (serviceType) => {
    // Map service types to portfolio filters
    const filterMap = {
      "Custom Web Development": "Web",
      "Mobile App Development": "Mobile",
      "AI Solutions": "AI",
      "Cloud & Backend Solutions": "Web"
    };
    
    // Get the filter value based on service type
    const filter =  "All";
    
    // Find the portfolio section
    const portfolioSection = document.getElementById("Portfolio");
    if (portfolioSection) {
      // Scroll to the portfolio section
      portfolioSection.scrollIntoView({ behavior: "smooth" });
      
      // Find and click the corresponding filter button
      setTimeout(() => {
        const filterButtons = document.querySelectorAll(".filterButton");
        filterButtons.forEach(button => {
          if (button.textContent === filter) {
            button.click();
          }
        });
      }, 500); // Small delay to ensure the section is scrolled to first
    }
  };

  return ( 
    <motion.div 
      className="services" 
      variants={variants} 
      initial="initial" 
      ref={ref} 
      animate={isInView ? "animate" : "initial"} 
    > 
      <motion.div className="textContainer" variants={variants}> 
        <p> 
          As a developer, my mission is to elevate your brand 
          <br /> through cutting-edge technologies and tailored solutions. 
        </p> 
        <hr /> 
      </motion.div> 

      <motion.div className="titleContainer" variants={variants}> 
        <div className="title"> 
          <img src="/people.webp" alt="People" /> 
          <h1> 
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b> Ideas 
          </h1> 
        </div> 
        <div className="title"> 
          <h1> 
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Success. 
          </h1> 
          <button onClick={() => navigateToPortfolio("All")}>Explore Our Services</button> 
        </div> 
      </motion.div> 

      <motion.div className="listContainer" variants={variants}> 
        {[ 
          { 
            title: "Custom Web Development", 
            description: "We specialize in building high-performance websites tailored to your business needs, ensuring seamless user experiences." 
          }, 
          { 
            title: "Mobile App Development", 
            description: "Create apps that make a real impact. Whether Android or iOS, we develop apps that enhance user engagement and drive business growth." 
          }, 
          { 
            title: "AI Solutions", 
            description: "Harness the power of AI for automation, predictive analysis, and personalized experiences that take your business to the next level." 
          }, 
          { 
            title: "Cloud & Backend Solutions", 
            description: "Build scalable and secure cloud infrastructure. We provide robust backend solutions that are both reliable and scalable." 
          } 
        ].map((service, index) => ( 
          <motion.div 
            key={index} 
            className="box" 
            variants={boxVariants} 
            whileHover="hover" 
            whileTap={isMobile || isTablet ? "hover" : undefined} 
          > 
            <h2>{service.title}</h2> 
            <p>{service.description}</p> 
            <button onClick={() => navigateToPortfolio(service.title)}>Learn More</button> 
          </motion.div> 
        ))} 
      </motion.div> 
    </motion.div> 
  ); 
}; 

export default Services;
