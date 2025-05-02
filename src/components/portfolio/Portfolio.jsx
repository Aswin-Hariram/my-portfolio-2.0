import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

// Project card variants with enhanced 3D effects
const getCardVariants = (isMobile, isTablet) => ({
  initial: { 
    opacity: 0, 
    scale: 0.9,
    y: 50,
    rotateY: 15,
    filter: "blur(8px)"
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    rotateY: 0,
    filter: "blur(0px)",
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.5 
    } 
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0px 10px 30px rgba(255, 123, 0, 0.3)",
    transition: { duration: 0.3 },
    z: 50 // Add z-axis movement for more pronounced 3D effect
  }
});

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [filter, setFilter] = useState("All"); // Add filter state

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
  const cardVariants = getCardVariants(isMobile, isTablet);

  // Portfolio projects data
  const projects = [
    {
      title: "Writezy",
      description: "AI-powered writing assistant with advanced content generation capabilities.",
      image: "/Writezy.png",
      tags: ["React", "AI", "Node.js"],
      link: "https://github.com/Aswin-Hariram/Writezy_Web"
    },
    {
      title: "EzMark",
      description: "Biometric attendance system with facial recognition technology.",
      image: "/EzMark.jpeg",
      tags: ["Python", "OpenCV", "React"],
      link: "https://github.com/Aswin-Hariram/EzMark"
    },
    {
      title: "Nector",
      description: "Social media platform focused on connecting creative professionals.",
      image: "/Nector.png",
      tags: ["React Native", "Firebase", "Redux"],
      link: "https://github.com/Aswin-Hariram/nector"
    },
    {
      title: "OCR Tool",
      description: "Optical Character Recognition tool for extracting text from images.",
      image: "/Ocr.png",
      tags: ["Python", "TensorFlow", "Flask"],
      link: "https://github.com/Aswin-Hariram/OCRGenie"
    },
    {
      title: "Food Delivery App",
      description: "Mobile application for ordering food from local restaurants.",
      image: "/Food.png",
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "AI Chatbot",
      description: "Intelligent conversational agent for customer support.",
      image: "/Bot.png",
      tags: ["Python", "NLP", "React"],
      link: "https://github.com/Aswin-Hariram/my-first-Portfolio"
    }
  ];

  // Get all unique tags from projects
  // Replace the current filter generation code (around line 95-96)
  // From this:
  // const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  
  // To this more focused approach with reduced filter options:
  const allTags = ["All", "Web", "Mobile", "AI"]; // Reduced to main categories
  
  // Modify the filtering logic to work with the new categories
  const filteredProjects = filter === "All" 
    ? projects 
    : filter === "Web"
      ? projects.filter(project => project.tags.includes("React") || project.tags.includes("Node.js") || project.tags.includes("Flask"))
    : filter === "Mobile"
      ? projects.filter(project => project.tags.includes("React Native"))
    : filter === "AI"
      ? projects.filter(project => project.tags.includes("AI") || project.tags.includes("NLP") || project.tags.includes("TensorFlow") || project.tags.includes("OpenCV"))
    : projects;

  return (
    // Inside the return statement, after the existing background elements
    <motion.div
      className="portfolio"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      {/* Existing background elements */}
      <div className="grid-background"></div>
      <div className="floating-dots"></div>
      <div className="glow-spots"></div>
      
      {/* New background elements */}
      <div className="stars-background"></div>
      <div className="gradient-orbs">
        <div className="orb"></div>
      </div>
      <div className="line-effect"></div>
      <div className="enhanced-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Existing content */}
      <motion.div className="titleContainer" variants={variants}>
        <motion.h1 variants={variants}>
          My <motion.span className="highlight">Projects</motion.span>
        </motion.h1>
        <motion.p variants={variants}>
          Explore my recent work and creative solutions across web, mobile, and AI development.
        </motion.p>
        
        {/* Add filter buttons */}
        <motion.div 
          className="filterContainer"
          variants={variants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        >
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              className={`filterButton ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 123, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="projectsContainer" variants={variants}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="projectCard"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              whileTap={isMobile || isTablet ? "hover" : undefined}
              layout // Add layout animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            >
              <div className="imageContainer">
                <img src={project.image} alt={project.title} />
                // Inside the return statement, enhance the view button animation
                <div className="overlay">
                  <motion.a 
                    href={project.link}
                    className="viewButton"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(255, 123, 0, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
              <div className="contentContainer">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;