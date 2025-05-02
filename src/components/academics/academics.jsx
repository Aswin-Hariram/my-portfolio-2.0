import { useRef } from "react";
import "./academics.scss"; // Updated import path to match the actual file name
import { motion, useInView, AnimatePresence } from "framer-motion";

const variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

// Sample academic Academics data - replace with your own
const AcademicsData = [
    {
        year: "2024 - Present",
        degree: "Bachelor of Engineering in Computer Science",
        institution: "Sri Krishna College of Technology, Coimbatore",
        description: "Focusing on advanced programming, data structures, and modern web development technologies."
    },
    {
        year: "2021 - 2023",
        degree: "HSC Computer Science",
        institution: "X'an Matric Hr. Sec. School",
        description: "Developed strong foundations in computer science principles and programming fundamentals."
    }
];

const academics = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="Academics"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView ? "animate" : "initial"}
        >
            <motion.div 
                className="titleContainer" 
                variants={variants}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }
                } : { opacity: 0, scale: 0.8 }}
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={isInView ? { 
                        y: 0, 
                        opacity: 1,
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            delay: 0.2
                        }
                    } : { y: -50, opacity: 0 }}
                >
                    Academic Journey
                </motion.h1>
            </motion.div>

            <AnimatePresence>
                <motion.div className="AcademicsContainer" variants={variants}>
                    {AcademicsData.map((item, index) => (
                        <motion.div
                            className="AcademicsItem"
                            key={index}
                            custom={index}
                            initial={{ 
                                x: index % 2 === 0 ? -100 : 100, 
                                opacity: 0,
                                rotateY: index % 2 === 0 ? -10 : 10
                            }}
                            animate={isInView ? { 
                                x: 0, 
                                opacity: 1, 
                                rotateY: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 20,
                                    delay: index * 0.2
                                }
                            } : { 
                                x: index % 2 === 0 ? -100 : 100, 
                                opacity: 0,
                                rotateY: index % 2 === 0 ? -10 : 10
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: "0px 0px 25px rgba(255, 123, 0, 0.5)",
                                backgroundColor: "rgba(255, 123, 0, 0.08)",
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10
                                }
                            }}
                        >
                            <motion.div 
                                className="AcademicsDot"
                                initial={{ scale: 0 }}
                                animate={isInView ? { 
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 500,
                                        delay: 0.3 + index * 0.2
                                    }
                                } : { scale: 0 }}
                                whileHover={{ 
                                    scale: 1.2,
                                    boxShadow: "0px 0px 20px rgba(255, 123, 0, 0.8)"
                                }}
                            >
                                <motion.div 
                                    className="innerDot"
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 2
                                    }}
                                ></motion.div>
                            </motion.div>
                            <div className="AcademicsContent">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { 
                                        opacity: 1, 
                                        y: 0,
                                        transition: {
                                            delay: 0.4 + index * 0.2,
                                            duration: 0.5
                                        }
                                    } : { opacity: 0, y: 20 }}
                                >{item.degree}</motion.h2>
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { 
                                        opacity: 1, 
                                        y: 0,
                                        transition: {
                                            delay: 0.5 + index * 0.2,
                                            duration: 0.5
                                        }
                                    } : { opacity: 0, y: 20 }}
                                >{item.institution}</motion.h3>
                                <motion.span 
                                    className="year"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { 
                                        opacity: 1, 
                                        x: 0,
                                        transition: {
                                            delay: 0.6 + index * 0.2,
                                            duration: 0.5
                                        }
                                    } : { opacity: 0, x: -20 }}
                                >{item.year}</motion.span>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { 
                                        opacity: 1,
                                        transition: {
                                            delay: 0.7 + index * 0.2,
                                            duration: 0.5
                                        }
                                    } : { opacity: 0 }}
                                >{item.description}</motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default academics;