import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Get form data
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      message: formData.get('message')
    };
    
    try {
      // Get the contact API URL from environment variables
      const contactUrl = import.meta.env.VITE_Contact_URL;
      
      const response = await fetch(contactUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Error sending message:', err);
      setError(true);
      setTimeout(() => setError(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendMessage}
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
        <input type="tel" placeholder="" name="phone" id="phone" />
        <label htmlFor="phone">Your Phone (Optional)</label>
      </div>
      
      <div className="form-group">
        <textarea rows={5} placeholder="" name="message" id="message" required></textarea>
        <label htmlFor="message">Your Message</label>
      </div>
      
      <button type="submit" disabled={loading}>
        <span>{loading ? 'Sending...' : 'Send Message'}</span>
        {!loading && (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      
      {error && <div className="form-message error">Something went wrong. Please try again.</div>}
      {success && <div className="form-message success">Message sent successfully!</div>}
    </motion.form>
  );
};

export default ContactForm;