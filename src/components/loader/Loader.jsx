import { useEffect, useState } from "react";
import "./loader.scss";
import { motion } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 10);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setLoading(false), 500);
    }, 2500); // 2.5 seconds loading time

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        when: "afterChildren",
      },
    },
  };

  const circleVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotate: -90,
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    initial: { scale: 0 },
    animate: (i) => ({
      scale: 1,
      y: [0, -15, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.2,
      },
    }),
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  const progressVariants = {
    initial: {
      width: 0,
    },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  if (!loading) return null;

  return (
    <motion.div
      className="loader"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <motion.div className="loader-circle" variants={circleVariants}>
        <motion.div className="loader-logo" variants={logoVariants}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            A
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            H
          </motion.span>
        </motion.div>
        <div className="circle-spinner"></div>
      </motion.div>
      
      <div className="loader-dots">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="loader-dot"
            custom={i}
            variants={dotVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>
      
      <motion.p className="loader-text" variants={textVariants}>
        Loading Portfolio
      </motion.p>
      
      <div className="progress-container">
        <motion.div 
          className="progress-bar" 
          variants={progressVariants}
          initial="initial"
          animate="animate"
        ></motion.div>
        <div className="progress-text">{progress}%</div>
      </div>
    </motion.div>
  );
};

export default Loader;