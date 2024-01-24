import React, { useRef, useLayoutEffect } from "react";
import "./hero.css";
import Container from "../Container/Container";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const heading = heroRef.current.querySelector("h1");
      const heroAnim = gsap.utils.toArray(".hero-anim");

      // Split each word into separate characters
      const words = heading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      heading.innerHTML = chars.join(" ");

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
          <h5>We Are, Kanzler Solutions.</h5>
          <h1>Elevate Your Brand with Captivating, Purposeful Web Design.</h1>
          <p className="hero-anim">
            Empower your online presence with Kanzler Solutions – where
            innovative web design meets seamless development. Transforming
            visions into digital reality, we craft dynamic websites that elevate
            your brand to new heights.
          </p>
          <div className="btn-box hero-anim">
            <a href="#contact" aria-label="Contact Us">
              Contact Us
              <FaAngleRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
