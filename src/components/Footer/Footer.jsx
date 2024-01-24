import React from "react";
import "./Footer.css";
import Container from "../Container/Container";
import Kanzler from "../../assets/Kanzler-noBG.png";
import { motion } from "framer-motion";

import { FaAngleUp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="logo">
            <a href="#" aria-label="Home">
              <img
                src={Kanzler}
                alt="Kanzler Logo"
                loading="lazy"
                width="100px"
                height="25px"
              />
            </a>
          </div>
          <div className="socials">
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="to-top"
          >
            <a href="#" aria-label="Scroll To Top">
              <FaAngleUp />
            </a>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
