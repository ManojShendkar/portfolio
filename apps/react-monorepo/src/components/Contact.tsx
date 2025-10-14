import React from "react";
import "./Contact.css";

const Contact: React.FC = () => (
    <section id="contact" className="section contact-section">
        <h2 className="title">Contact Me</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required />
            <button type="submit">Send</button>
        </form>
        <div className="contact-info">
            <p>📧 manoj@example.com</p>
            <p>📞 +91 9876543210</p>
            <p>📍 Pune, India</p>
        </div>
    </section>
);

export default Contact;
