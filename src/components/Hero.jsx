import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="tag">AI WEBSITE BUILDER</span>

        <h1>
          Build Your Website <br />
          <span>With The Power Of AI</span>
        </h1>

        <p>
          Create professional, attractive and mobile-friendly
          websites in minutes. No coding skills required.
          Make your business visible online with Webcreators.
        </p>

        <a href="#contact" className="primary-btn">
          Create Your Website →
        </a>
      </div>

      <div className="hero-image">
        <div className="website-card">
          <div className="browser-dots">● ● ●</div>
          <div className="preview-content">
            <h2>Your Business</h2>
            <p>Grow your business with a professional website.</p>
            <button>Explore More</button>
            <div className="preview-boxes">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;