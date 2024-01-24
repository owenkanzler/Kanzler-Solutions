import React, { useRef, useLayoutEffect } from "react";
import "./Services.css";
import Container from "../Container/Container";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { FaEye, FaLaptopCode, FaCode } from "react-icons/fa";
import { FaE } from "react-icons/fa6";

const services = [
  {
    icon: <FaLaptopCode />,
    name: "Custom Web Design",
    description:
      "Elevate your brand with our custom web design services. Tailored to your unique vision, we create visually stunning and user-friendly websites that leave a lasting impression on your audience.",
  },
  {
    icon: <FaCode />,
    name: "Front End Development",
    description:
      " Our web development expertise transforms ideas into functional, scalable websites. Using cutting-edge technologies, we ensure seamless performance and user experiences, delivering digital solutions that stand the test of time.",
  },
  {
    icon: <FaEye />,
    name: "Seo Optimization",
    description:
      "Boost your online visibility with our SEO optimization services. We employ strategic techniques to enhance your website's search engine rankings, driving organic traffic and maximizing your digital presence for sustained business success.",
  },
];

const Services = () => {
  const serviceRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const serviceAnim = gsap.utils.toArray(".service-anim");

      gsap.fromTo(
        serviceAnim,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.125,
          ease: "power1.out",
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      const serviceHeading = serviceRef.current.querySelector("h4");

      // Split each word into separate characters
      const words = serviceHeading.textContent.split(" ");
      const chars = words.map((word) => {
        return `<span class="char">${[...word].join(
          "</span><span class='char'>"
        )}</span>`;
      });
      // Replace the content of h1 with separated characters
      serviceHeading.innerHTML = chars.join(" ");

      gsap.fromTo(
        serviceHeading.querySelectorAll(".char"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceRef.current,
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
    <section className="services" id="services" ref={serviceRef}>
      <Container>
        <h4 className="heading">Heres How We Can Help You</h4>
        <div className="services-content">
          {services.map((service) => (
            <div className="service" key={service.name}>
              <div className="service-anim">{service.icon}</div>
              <h6 className="service-anim">{service.name}</h6>
              <p className="service-anim">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
