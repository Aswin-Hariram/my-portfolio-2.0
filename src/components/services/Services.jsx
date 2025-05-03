import { useRef, useState, useEffect, useMemo } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

// Create responsive variants based on screen size - with further reduced values
const getVariants = (isMobile, isTablet) => ({
  initial: {
    opacity: 0, // Only animate opacity initially for better performance
  },
  animate: {
    opacity: 1,
    transition: {
      duration: isMobile ? 0.2 : 0.3, // Even shorter duration
      staggerChildren: isMobile ? 0.03 : 0.08, // Reduced stagger time
      ease: "easeOut"
    },
  },
});

// Simplified child variants - separate transforms from opacity
const getChildVariants = (isMobile, isTablet) => ({
  initial: { 
    y: isMobile ? 10 : 20, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "tween", // Using tween instead of spring for more predictable performance
      duration: 0.3,
      ease: "easeOut" 
    } 
  }
});

// Box hover variants with touch-friendly alternatives - simplified
const getBoxVariants = (isMobile, isTablet) => ({
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    } 
  },
  hover: {
    backgroundColor: "rgba(211, 211, 211, 0.9)",
    color: "black",
    transition: { 
      duration: 0.2
    }
  }
});

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", amount: 0.1 }); // Added amount for more precise triggering
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Debounced resize handler for better performance
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 738);
      setIsTablet(window.innerWidth > 738 && window.innerWidth <= 1024);
    };
    
    // Initial check
    checkScreenSize();
    
    // Debounced resize handler
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkScreenSize, 150); // 150ms debounce
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Use useMemo for variants to prevent recalculation
  const variants = useMemo(() => getVariants(isMobile, isTablet), [isMobile, isTablet]);
  const childVariants = useMemo(() => getChildVariants(isMobile, isTablet), [isMobile, isTablet]);
  const boxVariants = useMemo(() => getBoxVariants(isMobile, isTablet), [isMobile, isTablet]);
  
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
  
  // Pre-generate service items to avoid recreation on each render
  const serviceItems = useMemo(() => [
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
  ], []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
      style={{ willChange: "opacity" }} // More specific willChange
      layout="position"
    >
      <motion.div 
        className="textContainer" 
        variants={childVariants}
        style={{ willChange: "transform, opacity" }}
      >
        <p>
          As a developer, my mission is to elevate your brand
          <br /> through cutting-edge technologies and tailored solutions.
        </p>
        <hr />
      </motion.div>

      <motion.div 
        className="titleContainer" 
        variants={childVariants}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="title">
          <img 
            src="/people.webp" 
            alt="People" 
            loading="eager" // Prioritize image loading
          />
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

      <motion.div 
        className="listContainer" 
        variants={childVariants}
        style={{ willChange: "transform, opacity" }}
      >
        {serviceItems.map((service, index) => (
          <motion.div
            key={index}
            className="box"
            variants={boxVariants}
            whileHover="hover"
            whileTap={isMobile || isTablet ? "hover" : undefined}
            style={{ willChange: "background-color, color" }}
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
