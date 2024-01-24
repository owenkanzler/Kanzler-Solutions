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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
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
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <Container>
        <div className="about-content">
          <div className="about-img about-anim">
            <img
              src={minneaplois}
              alt="Image of Minneapolis"
              loading="lazy"
              width="500px"
              height="auto"
            />
          </div>
          <div className="about-text">
            <h4>About Us</h4>
            <h5 className="about-anim">
              Transforming Visions into Digital Reality with Kanzler Solutions.
            </h5>
            <div className="copy">
              <p className="about-anim">
                Kanzler Solutions is a pioneering force in web design and
                development. With a passion for innovation, we seamlessly blend
                creativity and technology to deliver bespoke digital solutions.
                From custom web design to SEO optimization, we empower
                businesses to thrive in the ever-evolving online landscape.
              </p>
              <p className="about-anim">
                Digital artisans crafting success. Elevate with us. Innovate
                excellence in web design, development, and SEO. Your journey,
                our expertise.
              </p>
            </div>
            <a href="#contact" aria-label="Get in touch" className="about-anim">
              Get In Touch <FaAngleRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
