import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./chatbot.scss";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // API integration for bot responses
  const getBotResponse = async (inputText) => {
    try {
      const response = await fetch(import.meta.env.VITE_CHAT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: inputText })
      });

      const data = await response.json();
      return data.status === "success" ? data.answer : "Sorry, I couldn't process your request at the moment.";
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, sender: "user" };
    setMessages([...messages, userMessage]);
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    try {
      // Get response from API
      const botResponse = await getBotResponse(userMessage.text);
      
      // Add bot message
      setIsTyping(false);
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      // Handle error
      setIsTyping(false);
      const errorMessage = { 
        text: "Sorry, I'm having trouble connecting right now. Please try again later.", 
        sender: "bot" 
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Quick response buttons
  const quickResponses = [
    { text: "Projects", query: "Tell me about your projects" },
    { text: "Skills", query: "What are your skills?" },
    { text: "Contact", query: "How can I contact you?" },
    { text: "Experience", query: "What's your experience?" }
  ];

  const handleQuickResponse = async (query) => {
    // Add user message
    const userMessage = { text: query, sender: "user" };
    setMessages([...messages, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    try {
      // Get response from API
      const botResponse = await getBotResponse(query);
      
      // Add bot message
      setIsTyping(false);
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      // Handle error
      setIsTyping(false);
      const errorMessage = { 
        text: "Sorry, I'm having trouble connecting right now. Please try again later.", 
        sender: "bot" 
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat toggle button with notification dot */}
      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isOpen ? (
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor" />
            </svg>
          </motion.span>
        ) : (
          <>
            <motion.span
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor" />
              </svg>
            </motion.span>
            {messages.length === 0 && (
              <motion.div 
                className="notification-dot"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            )}
          </>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="chat-header">
              <div className="header-content">
                <div className="avatar">
                  <img src="/hero.png" alt="Aswin" />
                </div>
                <div className="header-text">
                  <h3>Aswin's Assistant</h3>
                  <span className="status">Online</span>
                </div>
              </div>
              <button 
                className="minimize-btn"
                onClick={() => setIsOpen(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13H5V11H19V13Z" fill="currentColor" />
                </svg>
              </button>
            </div>

            <div className="messages-container">
              {messages.length === 0 ? (
                <div className="welcome-message">
                  <motion.div 
                    className="welcome-avatar"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <img src="/hero.png" alt="Aswin" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    Hi there! 👋
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    I'm Aswin's portfolio assistant. Ask me anything about his projects, skills, or experience!
                  </motion.p>
                  
                  <div className="quick-responses">
                    {quickResponses.map((item, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickResponse(item.query)}
                        className="quick-response-btn"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + (index * 0.1) }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 123, 0, 0.9)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.text}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      className={`message ${msg.sender}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {msg.sender === "bot" && (
                        <div className="bot-avatar">
                          <img src="/hero.png" alt="Aswin" />
                        </div>
                      )}
                      <div className="message-content">{msg.text}</div>
                      <div className="message-time">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div 
                      className="typing-indicator"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="bot-avatar">
                        <img src="/hero.png" alt="Aswin" />
                      </div>
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="chat-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isTyping}
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.1, backgroundColor: "#ffb700" }}
                whileTap={{ scale: 0.9 }}
                disabled={isTyping || !inputValue.trim()}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12 2.01 3 2 10L17 12 2 14L2.01 21Z" fill="currentColor" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;