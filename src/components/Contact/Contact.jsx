import React from "react";
import "./Contact.css";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import K from "../../assets/K-logo-noBG.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <h5>Interested?</h5>
        <h1>Hire Us</h1>
        <div className="contact-btn-box">
          <div className="button-bg"></div>
          <div className="button">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:kanzlersolutions@gmail.com"
            >
              <img
                src={K}
                alt="Kanzler logo"
                loading="lazy"
                height="80%"
                width="80%"
              />
            </motion.a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
