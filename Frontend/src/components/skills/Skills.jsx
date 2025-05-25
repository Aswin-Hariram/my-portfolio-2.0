import { useRef, useState, useEffect } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

// New animation variants for the container
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// New animation variants for the category cards with 3D flip effect
const cardVariants = {
  initial: {
    opacity: 0,
    rotateY: 90,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

// New animation variants for skill tags with bounce effect
const tagVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

const skillsData = [
    {
        category: "Frontend Development",
        skills: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "SASS", "Tailwind CSS", "Material UI"]
    },
    {
        category: "Backend Development",
        skills: ["Node.js", "Express", "Spring Boot","Django", "MongoDB", "PostgreSQL", "Firebase", "REST API", "GraphQL"]
    },
    {
        category: "Mobile Development",
        skills: ["React Native", "Flutter", "Android", "iOS", "Expo", "Mobile UI/UX"]
    },
    {
        category: "AI & Machine Learning",
        skills: [
            "Python",
            "TensorFlow",
            "AI Automation",
            "LLMs",
            "PyTorch",
            "Scikit-Learn",
            "Deep Learning",
            
        ]
    },
  
  {
        category: "DevOps & Tools",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile", "Jira", "Figma"]
    },
];

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px", once: true });
    const [hasAnimated, setHasAnimated] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("down");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isInView && scrollDirection === "down" && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, scrollDirection, hasAnimated]);

    return (
        <motion.div
            className="skills"
            variants={containerVariants}
            initial="initial"
            ref={ref}
            animate={isInView && scrollDirection === "down" && !hasAnimated ? "animate" : hasAnimated ? "animate" : "initial"}
        >
            <motion.div className="skillsContainer" variants={containerVariants}>
                {skillsData.map((category, index) => (
                    <motion.div
                        className="categoryCard"
                        key={index}
                        variants={cardVariants}
                        custom={index}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0px 0px 20px rgba(255, 165, 0, 0.4)",
                            backgroundColor: "rgba(255, 165, 0, 0.08)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <h2>{category.category}</h2>
                        <div className="skillTags">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.span
                                    className="skillTag"
                                    key={skillIndex}
                                    variants={tagVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: [0, -2, 2, -2, 0],
                                        transition: {
                                            rotate: {
                                                repeat: 0,
                                                duration: 0.5
                                            }
                                        }
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;
