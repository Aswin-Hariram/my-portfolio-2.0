import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17tizeb", // Updated service ID
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setError(true);
          setTimeout(() => setError(false), 3000);
        }
      );
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendEmail}
      className="contact-form"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <h2>Send a Message</h2>
      
      <div className="form-group">
        <input type="text" required placeholder="" name="name" id="name" />
        <label htmlFor="name">Your Name</label>
      </div>
      
      <div className="form-group">
        <input type="email" required placeholder="" name="email" id="email" />
        <label htmlFor="email">Your Email</label>
      </div>
      
      <div className="form-group">
        <textarea rows={5} placeholder="" name="message" id="message" required></textarea>
        <label htmlFor="message">Your Message</label>
      </div>
      
      <button type="submit">
        <span>Send Message</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {error && <div className="form-message error">Something went wrong. Please try again.</div>}
      {success && <div className="form-message success">Message sent successfully!</div>}
    </motion.form>
  );
};

export default ContactForm;