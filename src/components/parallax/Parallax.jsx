import { useRef, useState, useEffect } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices to reduce animation complexity
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reduce movement for mobile devices
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "300%" : "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "50%" : "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : type === "skills"
            ? "linear-gradient(180deg, #0c0c1d, #111132)"
            : type === "Academics"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 
        style={{ 
          y: yText, 
          willChange: "transform",
          // Add transform properties for better performance
          transform: "translateZ(0)"
        }}
      >
        {type === "services" 
          ? "What I Do?" 
          : type === "skills" 
          ? "What I Know?" 
          : type === "Academics"
          ? "My Academics"
          : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" 
              ? "/planets.png" 
              : type === "skills" 
              ? "/stars.png" 
              : type === "Academics"
              ? "/stars.png"
              : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
