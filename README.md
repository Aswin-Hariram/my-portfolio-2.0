# Aswin Hariram's Portfolio

A modern, responsive portfolio website with an AI-powered chatbot assistant that can answer questions about Aswin's skills, projects, and experience.

![Portfolio Screenshot](https://aswin-hariram.vercel.app/screenshot.png)

## 🌟 Live Demo

Visit the live portfolio at [https://aswin-hariram.vercel.app/](https://aswin-hariram.vercel.app/)

## 🚀 Features

- **Modern UI/UX**: Responsive design with smooth animations using Framer Motion
- **AI Chatbot Assistant**: Answers questions about skills, projects, and experience
- **Contact Form**: Direct messaging capability
- **Dockerized**: Easy deployment with Docker and Docker Compose
- **Full-stack Application**: React frontend with Flask backend

## 🏗️ Architecture

The application consists of two main components:

### Frontend
- Built with React and Vite
- Modern UI with Framer Motion animations
- Responsive design for all device sizes
- Communicates with the backend API for chatbot functionality

### Backend
- Flask-based API server
- AI-powered chatbot using LangChain and Google Generative AI
- PDF document parsing for portfolio information
- Contact form handling

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Framer Motion
- SCSS
- React Router
- React Markdown

### Backend
- Flask
- LangChain
- Google Generative AI
- FAISS for vector storage
- Twilio for notifications

## 🔧 Setup and Installation

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)
- Python 3.8+ (for local development)

### Using Docker Compose (Recommended)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-portfolio-2.0
   ```

2. Configure environment variables:
   - Create a `.env` file in the project root with the necessary variables (see `.env.example` if available)

3. Build and run with Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001

### Manual Setup (Development)

#### Frontend

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   VITE_API_URL=http://localhost:5001
   VITE_CHAT_API_URL=http://localhost:5001/chat
   VITE_CONTACT_URL=http://localhost:5001/contact
   VITE_RESUME_URL=<your-resume-url>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

#### Backend

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file with necessary API keys and configuration:
   ```
   GOOGLE_API_KEY=<your-google-api-key>
   FLASK_ENV=development
   SECRET_KEY=<your-secret-key>
   PDF_PATH=document.pdf
   ```

5. Run the Flask server:
   ```bash
   python app.py
   ```

## 📝 API Documentation

### Endpoints

- `GET /`: Health check endpoint
- `POST /chat`: Send a message to the AI chatbot
  - Request body: `{ "question": "Your question here" }`
  - Response: `{ "status": "success", "answer": "Bot response" }`
- `POST /reset`: Reset the chat history
- `POST /contact`: Submit a contact form
  - Request body: `{ "name": "Name", "email": "email@example.com", "message": "Your message" }`

## 🚢 Deployment

The application is configured for deployment on Vercel (Frontend) and can be deployed to any cloud platform that supports Docker containers for the Backend.

### Vercel Deployment (Frontend)

The frontend is currently hosted at [https://aswin-hariram.vercel.app/](https://aswin-hariram.vercel.app/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Aswin Hariram - [Contact through the portfolio website](https://aswin-hariram.vercel.app/)

---

Built with ❤️ by Aswin Hariram
