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
            duration: 0.6, // Reduced from 1
            staggerChildren: 0.1,
        },
    },
};

// Simplified item variants
const itemVariants = {
    initial: (i) => ({
        x: i % 2 === 0 ? -50 : 50, // Reduced distance
        opacity: 0,
        // Remove rotateY for better performance
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50, // Reduced from 80
            damping: 12, // Reduced from 20
            // Remove delay to reduce overall animation time
        }
    }
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
    // Increase margin to reduce re-animations when scrolling
    const isInView = useInView(ref, { margin: "-50px", once: true }); // Added once:true to prevent re-animations

    return (
        <motion.div
            className="Academics"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView ? "animate" : "initial"}
        >
            {/* Simplified title animation */}
            <motion.div 
                className="titleContainer" 
                variants={variants}
            >
                <motion.h1 variants={variants}>
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
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02, // Reduced from 1.03
                                boxShadow: "0px 0px 15px rgba(255, 123, 0, 0.4)", // Reduced intensity
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                }
                            }}
                        >
                            <motion.div 
                                className="AcademicsDot"
                                // Simplified dot animation
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 0.2 + index * 0.1,
                                    type: "spring"
                                }}
                            >
                                <motion.div 
                                    className="innerDot"
                                    // Simplified pulse animation
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 3 // Slower animation
                                    }}
                                ></motion.div>
                            </motion.div>
                            <div className="AcademicsContent">
                                {/* Use variants instead of individual animations */}
                                <motion.h2 variants={variants}>{item.degree}</motion.h2>
                                <motion.h3 variants={variants}>{item.institution}</motion.h3>
                                <motion.span variants={variants} className="year">{item.year}</motion.span>
                                <motion.p variants={variants}>{item.description}</motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default academics;