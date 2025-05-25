import { motion } from "framer-motion";
import { useRef, useState, useCallback, useMemo } from "react";
import "./contactForm.scss";

// Animation constants
const formAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: 1.5, duration: 1 }
};

// Form field configuration
const formFields = [
  { id: "name", type: "text", label: "Your Name", required: true },
  { id: "email", type: "email", label: "Your Email", required: true },
  { id: "phone", type: "tel", label: "Your Phone (Optional)", required: false },
];

const ContactForm = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    error: false,
    success: false,
    loading: false
  });
  
  // Destructure for cleaner code
  const { error, success, loading } = formState;

  // Memoized message icon
  const MessageIcon = useMemo(() => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ), []);

  // Form field component
  const FormField = useCallback(({ id, type, label, required }) => (
    <div className="form-group">
      <input 
        type={type} 
        required={required} 
        placeholder="" 
        name={id} 
        id={id} 
      />
      <label htmlFor={id}>{label}</label>
    </div>
  ), []);

  // Handle form status updates
  const updateFormStatus = useCallback((status, value) => {
    setFormState(prev => ({ ...prev, [status]: value }));
    
    if (value && (status === 'success' || status === 'error')) {
      setTimeout(() => {
        setFormState(prev => ({ ...prev, [status]: false }));
      }, 3000);
    }
  }, []);

  const sendMessage = useCallback(async (e) => {
    e.preventDefault();
    updateFormStatus('loading', true);
    
    try {
      // Get form data
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        message: formData.get('message')
      };
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
      }
      
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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message');
      }
      
      updateFormStatus('success', true);
      formRef.current.reset();
    } catch (err) {
      console.error('Error sending message:', err);
      updateFormStatus('error', true);
    } finally {
      updateFormStatus('loading', false);
    }
  }, [updateFormStatus]);

  return (
    <motion.form
      ref={formRef}
      onSubmit={sendMessage}
      className="contact-form"
      {...formAnimation}
    >
      <h2>Send a Message</h2>
      
      {formFields.map(field => (
        <FormField key={field.id} {...field} />
      ))}
      
      <div className="form-group">
        <textarea 
          rows={5} 
          placeholder="" 
          name="message" 
          id="message" 
          required
        ></textarea>
        <label htmlFor="message">Your Message</label>
      </div>
      
      <button type="submit" disabled={loading} aria-label="Send message">
        <span>{loading ? 'Sending...' : 'Send Message'}</span>
        {!loading && MessageIcon}
      </button>
      
      {error && <div className="form-message error" role="alert">Something went wrong. Please try again.</div>}
      {success && <div className="form-message success" role="status">Message sent successfully!</div>}
    </motion.form>
  );
};

export default ContactForm;