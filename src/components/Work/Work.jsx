import React, { useState, useRef, useLayoutEffect } from "react";
import "./Work.css";
import Container from "../Container/Container";
import { AnimatePresence } from "framer-motion";

import { FaEye, FaLaptopCode, FaCode } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import Modal from "../Modal/Modal";
import Modal2 from "../Modal/Modal2";
import Modal3 from "../Modal/Modal3";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const workRef = useRef(null);

  // const handleModal = () => {
  //   setModalOpen(!modalOpen);
  // };

  const handleModal2 = () => {
    setModal2Open(!modal2Open);
  };

  const handleModal3 = () => {
    setModal3Open(!modal3Open);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
            toggleActions: "play reverse play reverse",
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
          {/* <div className="project project1">
            <div className="project-img">
              <h5>01</h5>
              <div className="project-text">
                <h6>OmniStudy</h6>
                <div className="project-link">
                  <div className="links">
                    <a href="#" aria-label="View">
                      View <FaAngleRight />
                    </a>
                    <a
                      className="case"
                      aria-label="See Case"
                      onClick={handleModal}
                    >
                      See Case <FaAngleRight />
                    </a>
                  </div>
                  <div className="icons">
                    <FaLaptopCode />
                    <FaCode />
                    <FaEye />
                  </div>
                </div>
              </div>
            </div>
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modalOpen && (
                <Modal isOpen={modalOpen} onClose={handleModal}>
                  <div className="modal-img"></div>
                  <div className="modal-text">
                    <h4>Omnistudy</h4>
                    <p>
                      Omnistudy revolutionized education with Kanzler Solutions.
                      Our collaboration birthed an intuitive AI study helper,
                      seamlessly guiding learners through personalized study
                      journeys. From cutting-edge design to meticulous
                      development and SEO optimization, we crafted an online
                      companion that empowers minds, making learning an
                      enriching and efficient experience.
                    </p>
                  </div>
                </Modal>
              )}
            </AnimatePresence>
          </div> */}
          <div className="project project2">
            <div className="project-img">
              <h5>02</h5>
              <div className="project-text">
                <h6>Planted Foods Express</h6>
                <div className="project-link">
                  <div className="links">
                    <a href="https://neighborsmn.com/" aria-label="View">
                      View <FaAngleRight />
                    </a>
                    <p className="case" onClick={handleModal2}>
                      See Case <FaAngleRight />
                    </p>
                  </div>
                  <div className="icons">
                    <FaLaptopCode />
                    <FaCode />
                    <FaEye />
                  </div>
                </div>
              </div>
            </div>
            <AnimatePresence
              initial={false}
              mode="wait"
              onExitComplete={() => null}
            >
              {modal2Open && (
                <Modal2 isOpen={modal2Open} onClose={handleModal2}>
                  <div className="modal-img"></div>
                  <div className="modal-text">
                    <h4>Planted Foods Express</h4>
                    <p>
                      Planted Foods Express partnered with Kanzler Solutions for
                      a digital evolution. Our team designed a vibrant website
                      that captured the essence of their vegan delights. Through
                      innovative development and strategic SEO optimization, we
                      cultivated an online haven, inviting plant-based
                      enthusiasts to savor a virtual feast of eco-conscious
                      culinary delights.
                    </p>
                  </div>
                </Modal2>
              )}
            </AnimatePresence>
          </div>
          <div className="project project3">
            <div className="project-img">
              <h5>03</h5>
              <div className="project-text">
                <h6>Neighbors Landscaping</h6>
                <div className="project-link">
                  <div className="links">
                    <a href="#" aria-label="View">
                      View <FaAngleRight />
                    </a>
                    <p className="case" onClick={handleModal3}>
                      See Case <FaAngleRight />
                    </p>
                  </div>
                  <div className="icons">
                    <FaLaptopCode />
                    <FaCode />
                    <FaEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modal3Open && (
              <Modal3 isOpen={modal3Open} onClose={handleModal3}>
                <div className="modal-img"></div>
                <div className="modal-text">
                  <h4>Neighbors Landscaping</h4>
                  <p>
                    Kanzler Solutions transformed Neighbors Landscaping's online
                    presence, weaving a digital tapestry that mirrored their
                    craftsmanship. From custom web design to seamless
                    development and SEO optimization, we cultivated an engaging
                    website, ensuring their green vision flourished online,
                    connecting with clients and nurturing business growth.
                  </p>
                </div>
              </Modal3>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default Work;
