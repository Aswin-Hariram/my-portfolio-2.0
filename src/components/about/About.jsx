import React, { useRef, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion, useInView, useAnimation } from 'framer-motion';
import './about.scss';

// New animation variants with 3D effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.8
    } 
  }
};

// Text elements with slide and fade effects
const textVariants = {
  hidden: { 
    x: -50, 
    opacity: 0,
    filter: "blur(8px)"
  },
  visible: { 
    x: 0, 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.7 
    } 
  }
};

// New image animation with 3D rotation
const imageVariants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0, 
    rotateY: 30,
    z: -100
  },
  visible: { 
    scale: 1, 
    opacity: 1, 
    rotateY: -5,
    z: 0,
    transition: { 
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 1.2,
      ease: "easeOut"
    } 
  }
};

// Quote with reveal effect
const quoteVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9,
    rotateX: 10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4
    }
  }
};

// Calendar with reveal effect
const calendarVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 10,
      delay: 0.6
    }
  }
};

const About = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);
  
  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="floating-particles"></div>
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="about-image"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.03, 
            rotateY: 5,
            transition: { 
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.4 
            } 
          }}
        >
          <div className="image-wrapper">
            <img src="/hero.png" alt="Aswin H" />
            <div className="image-overlay"></div>
            <div className="image-frame"></div>
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
        >
          <motion.h2 
            variants={textVariants}
            className="section-title"
            animate={{ 
              textShadow: ["0 0 0px rgba(100,200,255,0)", "0 0 15px rgba(100,200,255,0.5)", "0 0 0px rgba(100,200,255,0)"],
              transition: { duration: 3, repeat: Infinity, repeatDelay: 2 }
            }}
          >
            About Me
          </motion.h2>
          
          <motion.p variants={textVariants}>
            Hello! I'm Aswin H from Coimbatore, a passionate full-stack developer experienced in React, React Native, Spring Boot, and AI tools like Gemini and LangChain. I enjoy solving real-world problems through code, and building apps that make a difference—from biometric attendance to OCR tools and AI chatbots.
          </motion.p>

          <motion.div 
            className="quote-container"
            variants={quoteVariants}
            whileHover={{ 
              scale: 1.02, 
              rotateX: 5, 
              transition: { duration: 0.3 } 
            }}
          >
            <blockquote className="personal-quote">
              <p>"The best way to predict the future is to create it. Code by code, we build tomorrow's reality."</p>
              <cite>— Peter Drucker & Me</cite>
            </blockquote>
          </motion.div>

          <motion.h3 variants={textVariants}>My GitHub Contributions</motion.h3>
          <motion.div 
            className="github-calendar-wrapper"
            variants={calendarVariants}
            whileHover={{ 
              boxShadow: '0 15px 35px rgba(100, 200, 255, 0.2)', 
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 15 } 
            }}
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
    </section>
  );
};

export default About;
