import React, { useRef, useLayoutEffect } from "react";
import "./About.css";
import Container from "../Container/Container";
import minneaplois from "../../assets/minne.png";

import { FaAngleRight } from "react-icons/fa6";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const aboutAnim = gsap.utils.toArray(".about-anim");

      gsap.fromTo(
        aboutAnim,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            end: "bottom center",
            // toggleActions: "play reverse play reverse",
          },
        }
      );

      const aboutHeading = aboutRef.current.querySelector("h4");

      // Split each word into separate characters
      const words = aboutHeading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      aboutHeading.innerHTML = chars.join(" ");

      gsap.fromTo(
        aboutHeading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.02,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
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
    <section className="about" id="about" ref={aboutRef}>
      <Container>
        <h4>
          Strategic design is the silent force shaping companies' success,
          enhancing brand resonance, and crafting experiences that captivate and
          endure.
        </h4>
        <div className="about-content">
          <div className="about-img about-anim">
            <div>
              <img
                src={minneaplois}
                alt="Minneapolis"
                loading="lazy"
                height="400px"
                width="400px"
              />
            </div>
          </div>
          <div className="about-text">
            <h6 className="about-anim">About Us</h6>
            <p className="about-anim">
              Kanzler Solutions is a pioneering force in web design and
              development. With a passion for innovation, we seamlessly blend
              creativity and technology to deliver bespoke digital solutions.
              From custom web design to SEO optimization, we empower businesses
              to thrive in the ever-evolving online landscape.
            </p>
            <a href="#contact" aria-label="Contact Us" className="about-anim">
              Contact Us <FaAngleRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
