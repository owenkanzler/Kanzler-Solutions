import React, { useRef, useLayoutEffect } from "react";
import "./Work.css";
import Container from "../Container/Container";
import PFE from "../../assets/PFE.png";
import NL from "../../assets/NL.png";

import { FaEye, FaLaptopCode, FaCode } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const workAnim = gsap.utils.toArray(".project");

      gsap.fromTo(
        workAnim,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          scrollTrigger: {
            trigger: workRef.current,
            start: "top center",
            end: "bottom center",
            // toggleActions: "play reverse play reverse",
          },
        }
      );

      const workheading = workRef.current.querySelector("h4");

      // Split each word into separate characters
      const words = workheading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      workheading.innerHTML = chars.join(" ");

      gsap.fromTo(
        workheading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: workRef.current,
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
    <section className="work" id="work" ref={workRef}>
      <Container>
        <h4>Heres What We've Done In The Past</h4>
        <div className="work-content">
          <div className="column column1">
            <div className="project project1">
              <div className="project-img project-img1">
                <img
                  src={PFE}
                  alt=""
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
              </div>
              <div className="project-content">
                <div className="icons">
                  <FaLaptopCode />
                  <FaCode />
                  <FaEye />
                </div>
                <h5>Planted Foods Express</h5>
                <p>
                  Teaming up with Kanzler Solutions, Planted Foods Express
                  embarked on a digital transformation. Our collaboration
                  yielded a vibrant website reflecting vegan delights, enhanced
                  by innovative development and strategic SEO. We cultivated an
                  online haven, inviting plant-based enthusiasts to savor an
                  eco-conscious feast.
                </p>
                <a
                  href="https://www.plantedfoodsexpress.com/"
                  aria-label="View"
                >
                  View <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
          <div className="column column2">
            <div className="project project2">
              <div className="project-img project-img2">
                <img
                  src={NL}
                  alt=""
                  loading="lazy"
                  height="500px"
                  width="500px"
                />
              </div>
              <div className="project-content">
                <div className="icons">
                  <FaLaptopCode />
                  <FaCode />
                  <FaEye />
                </div>
                <h5>Neighbors Landscaping</h5>
                <p>
                  Kanzler Solutions revitalized Neighbors Landscaping's digital
                  identity, orchestrating a captivating online experience.
                  Through bespoke web design, seamless development, and SEO
                  optimization, we cultivated a flourishing website, connecting
                  with clients and fostering business growth.
                </p>
                <a href="https://neighborsmn.com/" aria-label="View">
                  View <FaAngleRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
