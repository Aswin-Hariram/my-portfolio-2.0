import "./navbar.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const items = [
    { label: "Home", id: "Home" },
    { label: "About", id: "About" },
    { label: "Academics", id: "Academics" },
    { label: "Services", id: "Services" },
    { label: "Skills", id: "Skills" },
    { label: "Portfolio", id: "Portfolio" }
  ];
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbarOffset = 120;
      const heroSectionHeight = window.innerHeight - 100;
      setIsHeroSection(window.scrollY < heroSectionHeight);
      setScrolled(window.scrollY > 0);

      const currentSection =
        items.findLast(({ id }) => {
          const section = document.getElementById(id);
          return section && window.scrollY + navbarOffset >= section.offsetTop;
        })?.id || "Home";

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: Math.max(section.offsetTop - 96, 0),
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div
      className={`navbar ${!isHeroSection || scrolled ? "docked" : ""} ${
        isMobileOrTablet ? "hidden" : ""
      }`}
    >
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="logo-container"
        >
          <div className="logo-mark">AH</div>
          <div className="logo-copy">
            <span className="eyebrow">Portfolio</span>
            <strong>Aswin Hariram</strong>
          </div>
        </motion.div>

        <div className="navigation">
          {items.map((item, index) => (
            <motion.a
              href={`#${item.id}`}
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {activeSection === item.id && (
                <motion.span
                  className="tab-indicator"
                  layoutId="liquid-tab-indicator"
                  transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.9 }}
                />
              )}
              <span className="tab-label">{item.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="actions">
          <div className="availability">
            <span className="status-dot" />
            Available for work
          </div>

          <div className="social">
            <motion.a
              href="https://github.com/Aswin-hariram"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="social-link"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aswin-hariram/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Q2kEKh00sY/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="social-link"
              aria-label="LeetCode"
            >
              <img
                src="https://cdn.simpleicons.org/leetcode/FFA116"
                alt="LeetCode"
                width="20"
                height="20"
              />
            </motion.a>
          </div>

          <motion.a
            href="#Contact"
            className="cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => scrollToSection(e, "Contact")}
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
