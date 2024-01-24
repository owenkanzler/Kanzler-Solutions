import React from "react";
import "./App.css";
import About from "./components/About/About";
import Approach from "./components/Approach/Approach";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Why from "./components/Why/Why";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Work />
      <Why />
      <About />
      <Approach />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
