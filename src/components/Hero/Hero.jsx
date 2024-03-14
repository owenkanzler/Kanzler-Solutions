import React, { useRef, useLayoutEffect } from "react";
import "./hero.css";
import Container from "../Container/Container";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { FaAngleDown } from "react-icons/fa6";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const heading = heroRef.current.querySelector("h1");
      const contact = heroRef.current.querySelector("a");
      const heroAnim = gsap.utils.toArray(".hero-anim");

      // Split each word into separate characters
      const contactWords = contact.textContent.split(" ");
      const contactChars = contactWords.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      const words = heading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      heading.innerHTML = chars.join(" ");
      contact.innerHTML = contactChars.join(" ");

      gsap.fromTo(
        heading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top center",
            end: "bottom center",
            // toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        heroAnim,
        {
          opacity: 0,
        },
        {
          delay: 2,
          opacity: 1,
          duration: 0.3,
          stagger: 0.125,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top center",
            end: "bottom center",
            // toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <Container>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Compelling Web Design and Development</h1>
            <p className="hero-anim">
              Elevate your brand with Kanzler Solutions. Our dynamic websites
              bring your vision to life.
            </p>
          </div>
          <div className="btn-box hero-anim">
            <a href="#contact" aria-label="Contact Us">
              Contact Us
            </a>
            <FaAngleDown />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
