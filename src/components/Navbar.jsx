import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Web<span>creators</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#how">How It Works</a>
        <a href="#contact" className="nav-btn">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;