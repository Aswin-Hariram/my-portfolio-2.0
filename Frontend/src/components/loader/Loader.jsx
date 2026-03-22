import { useEffect, useState } from "react";
import "./loader.scss";
import { motion } from "framer-motion";

const statusLines = [
  "Calibrating interface",
  "Loading visuals",
  "Preparing experience",
  "Finalizing portfolio",
];

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 9) + 4;
        return next > 100 ? 100 : next;
      });
    }, 180);

    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusLines.length);
    }, 620);

    const timer = setTimeout(() => {
      clearInterval(interval);
      clearInterval(statusInterval);
      setProgress(100);
      setStatusIndex(statusLines.length - 1);
      setTimeout(() => setLoading(false), 450);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="grid-overlay" />

      <div className="loader-particles">
        {[...Array(12)].map((_, index) => (
          <span key={index} className="particle" />
        ))}
      </div>

      <motion.div
        className="loader-panel"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="loader-stage">
          <motion.div
            className="core-ring ring-outer"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 11, ease: "linear" }}
          />
          <motion.div
            className="core-ring ring-middle"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <motion.div
            className="core-ring ring-inner"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          />

          <div className="beam beam-horizontal" />
          <div className="beam beam-vertical" />

          <div className="photo-shell">
            <motion.div
              className="identity-chip"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              ASWIN // LIVE
            </motion.div>

            <motion.div
              className="loader-mark"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img src="/hero.png" alt="Aswin Hariram" />
              <motion.span
                className="scan-line"
                animate={{ y: ["-10%", "115%"] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
              />
            </motion.div>

            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
          </div>

          <motion.div
            className="orbit orbit-one"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5.2, ease: "linear" }}
          >
            <span />
          </motion.div>

          <motion.div
            className="orbit orbit-two"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 7.4, ease: "linear" }}
          >
            <span />
          </motion.div>
        </div>

        <div className="loader-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Portfolio 2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Building a sharper digital presence.
          </motion.h1>

          <motion.p
            key={statusLines[statusIndex]}
            className="status-line"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
          >
            {statusLines[statusIndex]}
          </motion.p>
        </div>

        <div className="progress-block">
          <div className="progress-track">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="progress-meta">
            <span>Loading experience</span>
            <strong>{progress}%</strong>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
