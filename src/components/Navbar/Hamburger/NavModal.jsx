import { motion } from "framer-motion";
import React from "react";
import logo from "../../../assets/K-logo-noBG.png";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const NavModal = ({ handleClose }) => {
  return (
    <div className="hamburger-container">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="nav-modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className="navbar-small-content">
          <a href="#" aria-label="K">
            <motion.img
              src={logo}
              alt="Kanzler Solutions"
              loading="lazy"
              width="50px"
              height="50px"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
          <div className="navbar-small-links">
            <a href="#services" aria-label="Services" onClick={handleClose}>
              Services
            </a>
            <a href="#work" aria-label="Work" onClick={handleClose}>
              Work
            </a>
            <a href="#about" aria-label="About" onClick={handleClose}>
              About
            </a>
            <a href="#contact" aria-label="Contact" onClick={handleClose}>
              Contact
            </a>
          </div>
          <div className="navbar-small-lower-links">
            <a
              href="https://www.facebook.com/profile.php?id=61552358878637"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/owen-kanzler-b332a2279/"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/owenkanzler" aria-label="Github">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NavModal;
