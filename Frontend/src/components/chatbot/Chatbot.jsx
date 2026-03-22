import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./chatbot.scss";

const quickResponses = [
  { text: "Projects", query: "Tell me about your projects" },
  { text: "Skills", query: "What are your skills?" },
  { text: "Contact", query: "How can I contact you?" },
  { text: "Experience", query: "What's your experience?" },
];

const capabilityChips = ["Projects", "Tech Stack", "Availability"];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  const getBotResponse = async (inputText) => {
    try {
      const apiUrl = import.meta.env.VITE_CHAT_API_URL || "http://localhost:5001/chat";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ question: inputText }),
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();
      return data.status === "success"
        ? data.answer
        : "Sorry, I couldn't process your request at the moment.";
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };

  const sendMessage = async (text, inputElement) => {
    if (!text.trim()) return;

    const userMessage = { text, sender: "user", time: Date.now() };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const botResponse = await getBotResponse(text);
      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: "bot", time: Date.now() },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          sender: "bot",
          time: Date.now(),
        },
      ]);
    } finally {
      setIsTyping(false);
      setTimeout(() => {
        inputElement?.focus();
      }, 0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputElement = e.currentTarget.querySelector("input");
    await sendMessage(inputValue, inputElement);
  };

  const handleQuickResponse = async (query) => {
    const inputElement = document.querySelector(".chat-input input");
    await sendMessage(query, inputElement);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isInputFocused && chatWindowRef.current && window.innerWidth <= 768) {
      chatWindowRef.current.style.bottom = "112px";
      chatWindowRef.current.style.maxHeight = "calc(100vh - 164px)";

      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 120);

      return;
    }

    if (chatWindowRef.current) {
      chatWindowRef.current.style.bottom = "";
      chatWindowRef.current.style.maxHeight = "";
    }
  }, [isInputFocused]);

  return (
    <div className="chatbot-container">
      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
      >
        <span className="toggle-ripple" />
        {isOpen ? (
          <motion.span
            className="toggle-icon"
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="currentColor"
              />
            </svg>
          </motion.span>
        ) : (
          <>
            <motion.span
              className="toggle-icon"
              initial={{ rotate: -24, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 11.2C20 6.67 16.33 3 11.8 3S3.6 6.67 3.6 11.2c0 1.66.49 3.2 1.34 4.48L4 21l5.62-.88a8.12 8.12 0 0 0 2.18.28c4.53 0 8.2-3.67 8.2-8.2Z"
                  fill="currentColor"
                />
              </svg>
            </motion.span>
            {messages.length === 0 && <span className="notification-dot" />}
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            ref={chatWindowRef}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="chat-header">
              <div className="header-content">
                <div className="avatar">
                  <img src="/hero.png" alt="Aswin" />
                </div>
                <div className="header-text">
                  <div className="title-row">
                    <h3>Aswin AI</h3>
                    
                  </div>
                  <span className="status">Online now</span>
                </div>
              </div>

              <button className="minimize-btn" onClick={() => setIsOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <img src="/hero.png" alt="Aswin" />
                  </motion.div>

                  <motion.div
                    className="welcome-pill"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    Portfolio Copilot
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    Ask about projects, stack, or availability.
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    This assistant helps visitors understand Aswin&apos;s work faster with
                    guided answers and direct portfolio context.
                  </motion.p>

                  <div className="welcome-cards">
                    <div className="info-card">
                      <strong>Fast Answers</strong>
                      <span>Projects, skills, and experience in one place.</span>
                    </div>
                    <div className="info-card">
                      <strong>Quick Prompts</strong>
                      <span>Tap a chip below or type your own question.</span>
                    </div>
                  </div>

                  <div className="quick-responses">
                    {quickResponses.map((item, index) => (
                      <motion.button
                        key={item.text}
                        onClick={() => handleQuickResponse(item.query)}
                        className="quick-response-btn"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.08 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
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
                      key={`${msg.sender}-${msg.time}-${index}`}
                      className={`message ${msg.sender}`}
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.26 }}
                    >
                      {msg.sender === "bot" && (
                        <div className="bot-avatar">
                          <img src="/hero.png" alt="Aswin" />
                        </div>
                      )}

                      <div className="message-shell">
                        <div className="message-label">
                          {msg.sender === "bot" ? "Aswin AI" : "You"}
                        </div>
                        <div className="message-content">
                          {msg.sender === "bot" ? (
                            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                              {msg.text}
                            </ReactMarkdown>
                          ) : (
                            msg.text
                          )}
                        </div>
                        <div className="message-time">
                          {new Date(msg.time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
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
                      <div className="typing-shell">
                        <span className="typing-label">Aswin AI is thinking</span>
                        <div className="typing-dots">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="chat-input">
              <div className={`input-shell ${isInputFocused ? "focused" : ""}`}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, skills, or hiring..."
                  disabled={isTyping}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                />
                <span className="input-hint">Enter</span>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                disabled={isTyping || !inputValue.trim()}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
