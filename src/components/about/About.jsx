import React, { useRef, useState, useEffect, useMemo } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './about.scss';

const About = () => {  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1, margin: "0px 0px -100px 0px" });
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax effect for image - with reduced effect for better performance
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  // Reduced parallax effect for better performance
  const imageY = useTransform(scrollYProgress, [0, 1], ['-2%', '2%']);
  
  // Pre-generate random positions for particles to avoid layout thrashing
  const particlePositions = useMemo(() => {
    return Array(6).fill().map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2
    }));
  }, []);
  
  // Animation variants - simplified for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15,
        delayChildren: 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 15, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70, // Reduced for smoother animation
        damping: 15,   // Increased for less oscillation
        duration: 0.5
      }
    }
  };
  
  // Simplified image variants with fewer properties
  const imageVariants = {
    hidden: { 
      x: isMobile ? 0 : -30, 
      opacity: 0, 
      scale: 0.95
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,  // Reduced for smoother animation
        damping: 17,    // Increased for less oscillation
        duration: 0.7
      }
    }
  };
  
  // Simplified particle animation
  const particleVariants = {
    animate: (i) => ({
      y: [0, -8, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 2 + (i % 2),
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.3
      }
    })
  };

  return (
    <section className="about-section" id="about" ref={ref}>
      <AnimatePresence>
        {isInView && (
          <>
            {/* Reduced number of particles for better performance */}
            <div className="floating-particles">
              {particlePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  variants={particleVariants}
                  animate="animate"
                  custom={i}
                  style={{
                    left: pos.left,
                    top: pos.top,
                    animationDelay: `${pos.delay}s`,
                    // Add will-change for better performance
                    willChange: "transform, opacity"
                  }}
                />
              ))}
            </div>
            
            <motion.div 
              className="about-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              // Add layout="position" to improve performance during layout changes
              layout="position"
            >
              <motion.div 
                className="about-image"
                ref={imageRef}
                variants={imageVariants}
                // Simplified hover effect
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                // Add will-change for better performance
                style={{ willChange: "transform" }}
              >
                <motion.div 
                  className="image-wrapper"
                  style={{ 
                    y: imageY,
                    willChange: "transform" // Add will-change for better performance
                  }}
                >
                  <img 
                    src="/hero.png" 
                    alt="Aswin H" 
                    // Add loading="eager" to prioritize image loading
                    loading="eager"
                  />
                  <motion.div className="image-overlay" />
                  <motion.div 
                    className="image-frame"
                    animate={{
                      opacity: [0.4, 0.6, 0.4],
                      // Removed scale animation for better performance
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                className="about-content" 
                variants={containerVariants}
                // Add will-change for better performance
                style={{ willChange: "transform, opacity" }}
              >
                <motion.h2 
                  className="section-title"
                  variants={itemVariants}
                >
                  About Me
                </motion.h2>
                
                <motion.p variants={itemVariants}>
                  Hello! I'm Aswin H from Coimbatore, a passionate full-stack developer experienced in React, React Native, Spring Boot, and AI tools like Gemini and LangChain. I enjoy solving real-world problems through code, and building apps that make a difference—from biometric attendance to OCR tools and AI chatbots.
                </motion.p>

                <motion.div 
                  className="quote-container"
                  variants={itemVariants}
                >
                  <motion.blockquote 
                    className="personal-quote"
                    // Simplified hover effect
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.p>
                      "The best way to predict the future is to create it. Code by code, we build tomorrow's reality."
                    </motion.p>
                    <motion.cite>
                      — Peter Drucker & Me
                    </motion.cite>
                  </motion.blockquote>
                </motion.div>

                <motion.h3 variants={itemVariants}>My GitHub Contributions</motion.h3>
                <motion.div 
                  className="github-calendar-wrapper"
                  variants={itemVariants}
                >
                  <GitHubCalendar 
                    username="aswin-hariram" 
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={12}
                    blockMargin={4}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
