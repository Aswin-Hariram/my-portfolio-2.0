import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleNavigateToPortfolio = () => {
    // Get the portfolio section element
    const portfolioSection = document.getElementById("Portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Open Google Drive link in a new tab
    window.open('https://drive.google.com/file/d/15oiB_aswF5fdKCB2Db7Yu6pJE54bBHXM/view?usp=sharing', '_blank');
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ASWIN HARIRAM</motion.h2>
          <motion.h1 variants={textVariants}>
            Full&nbsp;Stack&nbsp;Developer<br />
            And UI&nbsp;Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button 
              variants={textVariants} 
              onClick={handleNavigateToPortfolio}
            >
              See the Latest Works
            </motion.button>
            <motion.button 
              variants={textVariants} 
              onClick={handleDownloadResume}
            >
              Download Resume
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
          />
        </motion.div>
      </div>

      <div className="slidingTextContainer">
        <motion.div
          className="slidingText"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Fullstack Developer AI Engineer Mobile App Developer Web Developer
          Cloud Architect Software Engineer UI/UX Designer
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/hero.png" alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
