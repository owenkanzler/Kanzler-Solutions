import React, { useRef, useLayoutEffect } from "react";
import "./Approach.css";
import Container from "../Container/Container";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { FaSearch, FaPencilAlt, FaCode } from "react-icons/fa";

const approachSteps = [
  {
    icon: <FaSearch />,
    name: "Discover",
    description:
      "Immerse in client goals, user needs, and market trends, conducting thorough research to lay the foundation for a strategic approach.",
  },
  {
    icon: <FaPencilAlt />,
    name: "Design",
    description:
      "Transform insights into visually captivating and intuitive interfaces, prioritizing user experience through wireframes, prototypes, and aesthetic elements.",
  },
  {
    icon: <FaCode />,
    name: "Develop",
    description:
      "Bring designs to life with meticulous coding, leveraging the latest technologies for robust functionality and seamless performance across diverse devices and platforms.",
  },
];

const Approach = () => {
  const approachRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const approachAnim = gsap.utils.toArray(".approach-anim");

      gsap.fromTo(
        approachAnim,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.125,
          scrollTrigger: {
            trigger: approachRef.current,
            start: "top center",
            end: "bottom center",
            // toggleActions: "play reverse play reverse",
          },
        }
      );

      const approachHeading = approachRef.current.querySelector("h4");

      // Split each word into separate characters
      const words = approachHeading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      approachHeading.innerHTML = chars.join(" ");

      gsap.fromTo(
        approachHeading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: approachRef.current,
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
    <section className="approach" ref={approachRef}>
      <Container>
        <h4>Here's How We Approach Your Project</h4>
        <div className="approach-content">
          {approachSteps.map((step, index) => (
            <div className={`step step-${index}`} key={index}>
              <div className="approach-anim">{step.icon}</div>
              <h6 className="approach-anim">{step.name}</h6>
              <p className="approach-anim">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Approach;
