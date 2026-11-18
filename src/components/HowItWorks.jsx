import React from "react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Enter Business Details",
      description: "Provide your business name, services and other details."
    },
    {
      number: "02",
      title: "Generate With AI",
      description: "Let AI create a professional website for your business."
    },
    {
      number: "03",
      title: "Customize & Publish",
      description: "Customize your website and prepare it for publishing."
    }
  ];

  return (
    <section className="how section" id="how">
      <div className="section-heading">
        <span>HOW IT WORKS</span>
        <h2>Get Started In 3 Simple Steps</h2>
        <p>No technical knowledge or coding experience required.</p>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;