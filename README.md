# Aswin Hariram - Portfolio v2.0


<img width="1455" alt="Screenshot 2025-05-25 at 10 03 04 PM" src="https://github.com/user-attachments/assets/a40c0ec8-fcc8-44d9-b9eb-4c39b29c3784" />

A modern, responsive portfolio website showcasing my projects, skills, and experience. Built with React, Vite, and Flask, featuring an AI-powered chatbot and interactive UI components.

## 🚀 Features

- **Modern UI/UX** with smooth animations using Framer Motion
- **AI-Powered Chatbot** for interactive engagement
- **Responsive Design** that works on all devices
- **Project Showcase** with detailed case studies
- **Contact Form** with email integration
- **Dark/Light Mode** support
- **Performance Optimized** with Vite

## 🛠️ Tech Stack

### Frontend
- ⚛️ React 18
- 🎨 SASS for styling
- 🚀 Vite for build tooling
- ✨ Framer Motion for animations
- 📱 Responsive Design
- 🔍 React Router for navigation

### Backend
- 🐍 Python 3.10+
- 🔥 Flask for API server
- 🤖 LangChain for AI capabilities
- 🧠 FAISS for vector storage
- 📄 PDF processing with PyPDF2 and pdfminer

### DevOps
- 🐳 Docker and Docker Compose
- 🔄 CI/CD with GitHub Actions
- ☁️ Deployment ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Python 3.10+
- Docker (optional)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Set up the Backend**
   ```bash
   cd Backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up the Frontend**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Environment Variables**
   Create a `.env` file in the Backend directory with the following variables:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   OPENAI_API_KEY=your_openai_api_key
   GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account.json
   ```

5. **Run the Application**
   - In one terminal (Backend):
     ```bash
     cd Backend
     flask run
     ```
   - In another terminal (Frontend):
     ```bash
     cd Frontend
     npm run dev
     ```

### Using Docker

```bash
docker-compose up --build
```

The application will be available at `http://localhost:5173`

## 📦 Project Structure

```
portfolio-v2/
├── Backend/               # Flask backend
│   ├── app.py             # Main application
│   ├── bot.py             # Chatbot implementation
│   ├── chat_handler.py    # Chat request handlers
│   ├── contact_handler.py # Contact form handlers
│   └── requirements.txt   # Python dependencies
├── Frontend/              # React frontend
│   ├── public/            # Static assets
│   └── src/               # Source code
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── styles/        # Global styles
│       └── App.jsx        # Main App component
├── docker-compose.yml     # Docker Compose config
└── README.md             # This file
```

## 🤖 AI Chatbot Features

The portfolio includes an AI-powered chatbot with the following capabilities:

- Natural language conversations
- Document processing (PDF, text)
- Context-aware responses
- Integration with multiple AI providers (OpenAI, Google AI)

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set up environment variables in project settings
4. Deploy!

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `Frontend/dist`
4. Add environment variables
5. Deploy site

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Framer Motion](https://www.framer.com/motion/) for animations
- [LangChain](https://www.langchain.com/) for AI capabilities
- [React Icons](https://react-icons.github.io/react-icons/) for icons

---

<div align="center">
  Made with ❤️ by Aswin Hariram
</div>
