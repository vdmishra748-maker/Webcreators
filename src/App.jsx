import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />

      <footer>
        <h3>Webcreators</h3>
        <p>Build Your Digital Future With AI.</p>
        <p>© 2026 Webcreators. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;