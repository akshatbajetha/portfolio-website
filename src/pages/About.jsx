import React from "react";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      exit={{ x: 100, opacity: 0 }}
      className="flex flex-col justify-center items-center dark:bg-background bg-white-background about-page"
    >
      <h1 className="heading font-bold blue-gradient mb-4">
        About Me
      </h1>
      <AboutSection />
    </motion.div>
  );
}

export default About;
