import React, { useRef, useLayoutEffect } from "react";
import "./Why.css";
import Container from "../Container/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  FaPeopleGroup,
  FaEarthAmericas,
  FaPencil,
  FaArrowUpWideShort,
  FaStar,
  FaClock,
  FaCalendarDays,
} from "react-icons/fa6";
import { BsFileEarmarkRichtext } from "react-icons/bs";

const reasons = [
  {
    description: "Allows you to expand your audience",
    icon: <FaPeopleGroup />,
  },
  {
    description: "Available 24/7",
    icon: <FaCalendarDays />,
  },
  {
    description: "Allows you to reach a global audience",
    icon: <FaEarthAmericas />,
  },
  {
    description: "Quickly editable",
    icon: <FaPencil />,
  },
  {
    description: "An unlimited source of information",
    icon: <BsFileEarmarkRichtext />,
  },
  {
    description: "Increases your credibility",
    icon: <FaArrowUpWideShort />,
  },
  {
    description: "Sets you apart from your competitors",
    icon: <FaStar />,
  },
  {
    description: "Saves you time",
    icon: <FaClock />,
  },
];

const Why = () => {
  const whyRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const whyHeading = whyRef.current.querySelector("h4");

      // Split each word into separate characters
      const words = whyHeading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      whyHeading.innerHTML = chars.join(" ");

      gsap.fromTo(
        whyHeading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyRef.current,
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
    <section className="why" ref={whyRef}>
      <Container>
        <h4>Why A Website Is So Powerful</h4>
      </Container>
      <div className="inner">
        <div className="wrapper">
          <div className="reasons" style={{ "--speed": `${18000}ms` }}>
            {reasons.map((reason, index) => (
              <div key={index + 1} className="reason">
                <span>{reason.icon}</span>
                <h6>{reason.description}</h6>
              </div>
            ))}
          </div>
          <div className="reasons" style={{ "--speed": `${18000}ms` }}>
            {reasons.map((reason, index) => (
              <div key={index + 1} className="reason">
                <span>{reason.icon}</span>
                <h6>{reason.description}</h6>
              </div>
            ))}
          </div>
          <div className="reasons" style={{ "--speed": `${18000}ms` }}>
            {reasons.map((reason, index) => (
              <div key={index + 1} className="reason">
                <span>{reason.icon}</span>
                <h6>{reason.description}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
