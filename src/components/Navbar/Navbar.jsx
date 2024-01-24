import React from "react";
import "./Navbar.css";
import Container from "../Container/Container";
import logo from "../../assets/K-logo-noBG.png";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
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
        <ul>
          <li>
            <a href="#services" aria-label="Services">
              Services
            </a>
          </li>
          <li>
            <a href="#work" aria-label="Work">
              Work
            </a>
          </li>
          <li>
            <a href="#about" aria-label="About">
              About
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="Contact">
              Contact
            </a>
          </li>
        </ul>
        <Hamburger />
      </Container>
    </nav>
  );
};

export default Navbar;
