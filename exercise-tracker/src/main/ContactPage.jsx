import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page-container">
      <h1 className="contact-us-title">Have questions? Contact Us!</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
        />

        {/* Message Textarea */}
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-textarea"
          rows="5"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="contact-submit-button"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
