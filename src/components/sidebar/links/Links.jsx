import { motion } from "framer-motion"; // Import framer-motion

const Links = ({ items = ["Home", "About", "Academics", "Services", "Skills", "Contact"], setOpen }) => {
  // Animation variants for links
  const linkVariants = {
    closed: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    },
    open: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }),
    hover: { 
      scale: 1.1, 
      color: "#ff7b00",
      textShadow: "0 0 8px rgba(255, 123, 0, 0.5)",
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.95, 
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };

  return (
    <div className="links">
      {items.map((item, i) => (
        <motion.a
          href={`#${item}`}
          key={item}
          className="nav-link"
          onClick={() => setOpen(false)}
          variants={linkVariants}
          custom={i} // Pass index for staggered animations
          whileHover="hover"
          whileTap="tap"
        >
          {item}
        </motion.a>
      ))}
    </div>
  );
};

export default Links;
