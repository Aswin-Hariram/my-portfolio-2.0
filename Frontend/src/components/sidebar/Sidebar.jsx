import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = ({ items = ["Home", "About", "Academics", "Services", "Skills", "Portfolio", "Contact"] }) => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Check if the click is not on the toggle button (which has its own handler)
        const toggleButton = document.querySelector('.sidebar button');
        if (!toggleButton || !toggleButton.contains(event.target)) {
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
    <AnimatePresence>
      <motion.div 
        className="sidebar"
        animate={open ? "open" : "closed"}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="bg" variants={variants} ref={sidebarRef}>
          <Links items={items} setOpen={setOpen} />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;







