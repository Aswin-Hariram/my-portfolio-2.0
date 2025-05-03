import { useState, useEffect, useRef } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const Sidebar = ({ items = ["Home", "About", "Academics", "Services", "Skills", "Portfolio", "Contact"] }) => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sidebarRef = useRef(null);
  const scrollTimerRef = useRef(null);

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Toggle button animation variants
  const toggleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      } 
    },
    hover: { 
      scale: 1.1, 
      boxShadow: "0 8px 25px rgba(255, 123, 0, 0.7)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.95, 
      boxShadow: "0 4px 10px rgba(255, 123, 0, 0.4)" 
    },
    hidden: { 
      opacity: 0.9,
      transition: { duration: 0.3 } 
    },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 } 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if user is actively scrolling
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setIsScrolling(true);
        if (scrollTimerRef.current) {
          clearTimeout(scrollTimerRef.current);
        }
      }
      
      setLastScrollY(currentScrollY);
      
      // Set a timer to hide the scrolling state after scrolling stops
      scrollTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [lastScrollY]);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Check if the click is not on the toggle button (which has its own handler)
        const toggleButton = document.querySelector('.toggle-btn');
        if (toggleButton && !toggleButton.contains(event.target)) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Sidebar content with AnimatePresence for exit animations */}
      <AnimatePresence>
        <motion.div 
          className={`sidebar-content ${isScrolling && !open ? 'hidden' : ''}`}
          ref={sidebarRef}
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={sidebarVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Links items={items} setOpen={setOpen} />
        </motion.div>
      </AnimatePresence>
      
      {/* Toggle button with motion animations */}
      <motion.div 
        className="toggle-container"
        initial="initial"
        animate={isScrolling ? "hidden" : "visible"}
        variants={toggleVariants}
      >
        <ToggleButton setOpen={setOpen} open={open} />
      </motion.div>
    </>
  );
};

export default Sidebar;
