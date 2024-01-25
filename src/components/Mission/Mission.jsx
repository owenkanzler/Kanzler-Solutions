import React, { useRef, useLayoutEffect } from "react";
import "./Mission.css";
import Container from "../Container/Container";
import wave from "../../assets/wave.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const missionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const missionAnim = gsap.utils.toArray(".mission-anim");

      gsap.fromTo(
        missionAnim,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top center",
            end: "bottom center",
            // toggleActions: "play reverse play reverse",
          },
        }
      );

      const missionHeading = missionRef.current.querySelector("h4");

      // Split each word into separate characters
      const words = missionHeading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      missionHeading.innerHTML = chars.join(" ");

      gsap.fromTo(
        missionHeading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
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
    <section className="mission" ref={missionRef}>
      <Container>
        <div className="mission-content">
          <div className="mission-img mission-anim">
            <img
              src={wave}
              alt="Wave Image"
              loading="lazy"
              height="auto"
              width="400px"
            />
          </div>
          <div className="mission-text">
            <h4>Our Mission To Your Success</h4>
            <h5 className="mission-anim">
              Digital Excellence Empowering <br /> Business Growth
            </h5>
            <p className="mission-anim">
              At Kanzler Solutions, our unwavering commitment is to empower
              businesses through innovative digital solutions. We specialize in
              crafting bespoke websites that not only reflect brand identity but
              also drive sustained growth, foster engagement, and pave the way
              for unprecedented success in the dynamic online landscape.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
