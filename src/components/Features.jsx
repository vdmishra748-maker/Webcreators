import React from "react";

function Features() {
  const features = [
    {
      icon: "✨",
      title: "AI Website Generation",
      description: "Generate professional websites using simple business details."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Websites that work smoothly on mobile, tablet and desktop."
    },
    {
      icon: "🎨",
      title: "Easy Customization",
      description: "Customize layouts, text, images and website templates."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Create your online presence without expensive development costs."
    },
    {
      icon: "🔍",
      title: "SEO Support",
      description: "Build a website with search-engine-friendly content."
    },
    {
      icon: "⚡",
      title: "Quick Updates",
      description: "Update your business information whenever you need."
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="section-heading">
        <span>OUR FEATURES</span>
        <h2>Everything Your Business Needs</h2>
        <p>Simple and powerful tools to grow your business online.</p>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;