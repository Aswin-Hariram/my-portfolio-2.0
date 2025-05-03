import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Create responsive variants based on screen size
const getVariants = (isMobile, isTablet) => ({
  initial: {
    x: isMobile ? -10 : isTablet ? -50 : -200,
    y: isMobile ? 10 : 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.7,
      staggerChildren: isMobile ? 0.03 : 0.1,
      ease: "easeOut",
      // Reduce work for the main thread on mobile
      type: isMobile ? "tween" : "spring",
      // Use lower stiffness on mobile for better performance
      stiffness: isMobile ? 100 : 200,
    },
  },
  exit: {
    opacity: 0,
    y: 10, // Reduced from 20 for mobile
    transition: {
      duration: isMobile ? 0.2 : 0.3
    }
  }
});

// Project card variants with touch-friendly alternatives
const getCardVariants = (isMobile, isTablet) => ({
  initial: { opacity: 0, scale: isMobile ? 0.98 : 0.95, y: isMobile ? 10 : 20 },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: isMobile ? 0.2 : 0.5,
      ease: "easeOut",
      // Use simpler animation type on mobile
      type: isMobile ? "tween" : "spring"
    } 
  },
  hover: isMobile || isTablet ? {
    scale: 1.01, // Reduced scale for mobile
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Lighter shadow for mobile
    borderColor: "rgba(255, 123, 0, 0.4)",
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    transition: { 
      duration: 0.15, // Faster transition
      ease: "easeInOut"
    }
  } : {
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
    borderColor: "rgba(255, 123, 0, 0.4)",
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    y: -5
  },
  exit: {
    opacity: 0,
    scale: isMobile ? 0.95 : 0.9,
    transition: {
      duration: isMobile ? 0.2 : 0.3
    }
  }
});

// ProjectCard component integrated directly into Portfolio
const ProjectCard = ({ project, index, isMobile, isTablet, cardVariants }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Add hover animation effect - optimized for mobile
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    // Skip all this processing on mobile devices
    if (isMobile || isTablet) {
      // Simplified observer for mobile
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(card);
      return () => observer.disconnect();
    }
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top;  
      
      // Calculate rotation based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      // Apply the transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add subtle shadow movement based on mouse position
      const shadowX = (centerX - x) / 25;
      const shadowY = (centerY - y) / 25;
      card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3)`;
    };
    
    const handleMouseLeave = () => {
      // Reset transform on mouse leave
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)';
    };
    
    // Add intersection observer for entrance animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(card);
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [isMobile, isTablet]);
  
  // Preload image before showing content
  useEffect(() => {
    const img = new Image();
    img.src = project.image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // Still show card even if image fails
  }, [project.image]);
  
  return (
    <motion.div 
  
      className={`projectCard ${isVisible ? 'visible' : ''} ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap={isMobile || isTablet ? "hover" : undefined}
      exit="exit"
      layout={!isMobile} // Disable layout animation on mobile
      layoutId={isMobile ? undefined : `project-${index}`} // Only use layoutId on desktop
      style={{ animationDelay: isMobile ? `${index * 0.05}s` : `${index * 0.1}s` }} // Faster delay on mobile
    >
      <div  className="imageContainer">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="eager" 
          width="400" 
          height="200"
          onLoad={() => setImageLoaded(true)}
          className="project-image"
        />
        <motion.div 
          className="overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={project.link}
            className="viewButton"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-text">View Project</span>
            <motion.span 
              className="button-icon"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
      <div className="contentContainer">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {project.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {project.description}
        </motion.p>
        <motion.div 
          className="tags"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {project.tags.map((tag, tagIndex) => (
            <motion.span 
              key={tagIndex} 
              className="tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3 + (tagIndex * 0.05), 
                duration: isMobile ? 0.4 : 0.3, // Increased from 0.3 to 0.4 for mobile
                type: isMobile ? "tween" : "spring",
                stiffness: isMobile ? 100 : 200,
                ease: "easeInOut" // Added ease property for smoother animation
              }}
              whileHover={{ 
                scale: 1.05,

                backgroundColor: "rgba(255, 123, 0, 0.2)",
                color: "#ff9d4d",
                transition: { duration: 0.3, ease: "easeInOut" } // Added transition for smoother hover effect
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", once: true });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [error, setError] = useState(false);
  
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
  const allTags = ["All", "Web", "Mobile", "AI"];
  
  // Improved filtering logic with a more maintainable approach
  const getFilteredProjects = (currentFilter) => {
    if (currentFilter === "All") return projects;
    
    const filterMap = {
      "Web": ["React", "Node.js", "Flask"],
      "Mobile": ["React Native"],
      "AI": ["AI", "NLP", "TensorFlow", "OpenCV"]
    };
    
    const tagsToFilter = filterMap[currentFilter] || [];
    return projects.filter(project => 
      project.tags.some(tag => tagsToFilter.includes(tag))
    );
  };

  // Initialize visible projects on component mount
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    
    // Preload images to ensure they're available when rendering
    const preloadImages = async () => {
      try {
        const projectsToShow = getFilteredProjects(filter);
        
        // On mobile, we can skip the preloading and just show content faster
        if (isMobile) {
          if (mounted) {
            setVisibleProjects(projectsToShow);
            setLoading(false);
          }
          return;
        }
        
        // Create an array of promises for image loading
        const imagePromises = projectsToShow.map(project => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = project.image;
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Failed to load image: ${project.image}`));
          });
        });
        
        // Wait for all images to load or fail
        await Promise.all(imagePromises);
        
        // Only update state if component is still mounted
        if (mounted) {
          setVisibleProjects(projectsToShow);
          // Add a small delay before removing loading state to ensure animations are ready
          setTimeout(() => {
            if (mounted) setLoading(false);
          }, isMobile ? 100 : 300); // Shorter delay on mobile
        }
      } catch (err) {
        console.error("Error loading project images:", err);
        if (mounted) {
          setError(true);
          setLoading(false);
        }
      }
    };
    
    preloadImages();
    
    return () => {
      mounted = false;
    };
  }, []);

  // Handle filter changes - also preload images for filtered results
  useEffect(() => {
    setLoading(true);
    let mounted = true;
    
    const preloadFilteredImages = async () => {
      try {
        const filteredProjects = getFilteredProjects(filter);
        
        // On mobile, skip preloading for faster response
        if (isMobile) {
          if (mounted) {
            setVisibleProjects(filteredProjects);
            setLoading(false);
          }
          return;
        }
        
        // Preload images for filtered projects
        const imagePromises = filteredProjects.map(project => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = project.image;
            img.onload = resolve;
            img.onerror = resolve; // Still resolve on error to continue
          });
        });
        
        await Promise.all(imagePromises);
        
        if (mounted) {
          setVisibleProjects(filteredProjects);
          // Remove animation delay when changing filters
          setLoading(false);
        }
      } catch (err) {
        console.error("Error loading filtered images:", err);
        if (mounted) {
          setVisibleProjects(getFilteredProjects(filter));
          setLoading(false);
        }
      }
    };
    
    preloadFilteredImages();
    
    return () => {
      mounted = false;
    };
  }, [filter]);

  // Get animation variants based on screen size
  const variants = getVariants(isMobile, isTablet);
  const cardVariants = getCardVariants(isMobile, isTablet);

  return (
    <motion.div 
 
      className="portfolio" 
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
    >
      {/* Content */}
      <motion.div className="titleContainer" variants={variants}>
        <motion.h1 
          className="title"
          variants={variants}
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
        >
          My <motion.span 
               className="highlight"
               whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
             >
               Projects
             </motion.span>
        </motion.h1>
        <motion.p 
          className="description"
          variants={variants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore my recent work and creative solutions across web, mobile, and AI development.
        </motion.p>
        
        {/* Filter buttons */}
        <motion.div 
          className="filterContainer" 
          variants={variants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              className={`filterButton ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
              variants={variants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 123, 0, 0.1)",
                borderColor: "rgba(255, 123, 0, 0.3)",
                color: "#ff9d4d"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.05), duration: 0.4 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className="projectsContainer"
        variants={variants}
        layout={!isMobile} // Disable layout animations on mobile
      >
        {/* Replace AnimatePresence with direct rendering */}
        {loading ? (
          <motion.div 
            key="loading"
            className="loading-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5 
              }}
            >
              Loading projects...
            </motion.div>
          </motion.div>
        ) : error ? (
          <motion.div 
            key="error"
            className="error-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            There was a problem loading projects. Please refresh the page.
          </motion.div>
        ) : visibleProjects && visibleProjects.length > 0 ? (
          // Replace motion.div with regular div and remove all animation props
          // In the projects grid section, update the image element to include the onLoad handler:
          
          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <div 
                key={`project-${project.title}-${index}`}
                className="projectCard"
              >
                <div className="imageContainer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="eager" 
                    width="400" 
                    height="200"
                    className="project-image"
                    onLoad={(e) => {
                      // Remove the opacity style instead of adding a class
                      e.target.style.opacity = 1;
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s ease' }} // Add transition for smooth appearance
                  />
                  <div className="overlay">
                    <a 
                      href={project.link}
                      className="viewButton"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="button-text">View Project</span>
                      <span className="button-icon">→</span>
                    </a>
                  </div>
                </div>
                <div className="contentContainer">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            key="no-projects"
            className="no-projects-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            No projects found for this filter.
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;