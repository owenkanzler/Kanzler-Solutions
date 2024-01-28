import React from "react";
import "./Contact.css";
import Container from "../Container/Container";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <h5>Interested?</h5>
        <h1>
          <a href="mailto:kanzlersolutions@gmail.com" aria-label="HIRE US">
            HIRE US
          </a>
        </h1>
      </Container>
    </section>
  );
};

export default Contact;
