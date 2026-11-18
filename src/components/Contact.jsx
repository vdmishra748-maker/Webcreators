import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Webcreators Demo Request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-content">
        <span>GET IN TOUCH</span>
        <h2>Ready To Take Your Business Online?</h2>
        <p>
          Contact Webcreators and start building your
          professional online presence today.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your business"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Request A Demo →</button>
      </form>
    </section>
  );
}

export default Contact;