import React from "react";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      exit={{ x: 100, opacity: 0 }}
      className="flex flex-col justify-center items-center dark:bg-background bg-white-background"
    >
      <h1 className="heading font-bold blue-gradient heading mb-4">
        Contact Me
      </h1>
      <ContactMe />
    </motion.div>
  );
}

export default Contact;
