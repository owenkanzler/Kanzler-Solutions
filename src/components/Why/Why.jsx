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

const reasonsTop = [
  {
    reason: "Allows you to expand your audience",
    icon: <FaPeopleGroup />,
  },
  {
    reason: "Available 24/7",
    icon: <FaCalendarDays />,
  },
  {
    reason: "Allows you to reach a global audience",
    icon: <FaEarthAmericas />,
  },
  {
    reason: "Quickly editable",
    icon: <FaPencil />,
  },
];

const reasonsBottom = [
  {
    reason: "An unlimited source of information",
    icon: <BsFileEarmarkRichtext />,
  },
  {
    reason: "Increases your credibility",
    icon: <FaArrowUpWideShort />,
  },
  {
    reason: "Sets you apart from your competitors",
    icon: <FaStar />,
  },
  {
    reason: "Saves you time",
    icon: <FaClock />,
  },
];

const Why = () => {
  const whyRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const whyTop = gsap.utils.toArray(".why-top-anim");
      const whyBottom = gsap.utils.toArray(".why-bottom-anim");

      gsap.fromTo(
        whyTop,
        {
          opacity: 0,
          x: -25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        whyBottom,
        {
          opacity: 0,
          x: 25,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: whyRef.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );

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
            toggleActions: "play reverse play reverse",
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
        <div className="why-content">
          <div className="why-content-top">
            {reasonsTop.map((reason) => (
              <div className="reason why-top-anim" key={reason.reason}>
                <span>{reason.icon}</span>
                <h6>{reason.reason}</h6>
              </div>
            ))}
          </div>
          <div className="why-content-bottom">
            {reasonsBottom.map((reason) => (
              <div className="reason why-bottom-anim" key={reason.reason}>
                <span>{reason.icon}</span>
                <h6>{reason.reason}</h6>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Why;
