import React, { useRef, useLayoutEffect } from "react";
import "./Contact.css";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import K from "../../assets/K-logo-noBG.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const contactHeading = contactRef.current.querySelector("h1");

      // Split each word into separate characters
      const words = contactHeading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      contactHeading.innerHTML = chars.join(" ");

      gsap.fromTo(
        contactHeading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top bottom",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".contact-btn-box",
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top bottom",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
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
