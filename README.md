<div align="center">

# 🚀 Aswin Hariram - Portfolio v2.0

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

<img width="1455" alt="Portfolio Screenshot" src="https://github.com/user-attachments/assets/a40c0ec8-fcc8-44d9-b9eb-4c39b29c3784" />

### A modern, responsive portfolio website showcasing my projects, skills, and experience.
### Built with React, Vite, and Flask, featuring an AI-powered chatbot and interactive UI components.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI/UX** | Smooth animations using Framer Motion |
| 🤖 **AI-Powered Chatbot** | Interactive engagement with LangChain and OpenAI |
| 📱 **Responsive Design** | Works flawlessly on all devices |
| 📂 **Project Showcase** | Detailed case studies with visual elements |
| 📧 **Contact Form** | Email integration with validation |
| 🌓 **Dark/Light Mode** | Theme switching capability |
| ⚡ **Performance Optimized** | Built with Vite for lightning-fast loading |

</div>

## 🛠️ Tech Stack

<div align="center">

### Frontend

[![React 18](https://img.shields.io/badge/React%2018-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)

### Backend

[![Python 3.10+](https://img.shields.io/badge/Python%203.10+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![LangChain](https://img.shields.io/badge/LangChain-FF6B00?style=flat-square&logo=chainlink&logoColor=white)](https://langchain.com/)
[![FAISS](https://img.shields.io/badge/FAISS-1877F2?style=flat-square&logo=facebook&logoColor=white)](https://faiss.ai/)
[![PyPDF2](https://img.shields.io/badge/PyPDF2-3776AB?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)](https://pypi.org/project/PyPDF2/)

### DevOps

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

</div>

## 🚀 Getting Started

<div align="center">

### Prerequisites

[![Node.js](https://img.shields.io/badge/Node.js%2016+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python%203.10+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)

</div>

### Local Development

<details>
<summary>📋 Step-by-Step Setup Guide</summary>

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio-v2.git
cd portfolio-v2
```

#### 2. Set up the Backend
```bash
cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

#### 3. Set up the Frontend
```bash
cd ../Frontend
npm install
```

#### 4. Environment Variables
Create a `.env` file in the Backend directory with the following variables:
```
FLASK_APP=app.py
FLASK_ENV=development
OPENAI_API_KEY=your_openai_api_key
GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account.json
```

#### 5. Run the Application
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
</details>

### Using Docker

<div align="center">

[![Docker](https://img.shields.io/badge/Run%20with-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

```bash
docker-compose up --build
```

<div align="center">

#### The application will be available at [`http://localhost:5173`](http://localhost:5173)

</div>

## 📦 Project Structure

<div align="center">

```
portfolio-v2/
├── 🔥 Backend/               # Flask backend
│   ├── app.py                # Main application
│   ├── bot.py                # Chatbot implementation
│   ├── chat_handler.py       # Chat request handlers
│   ├── contact_handler.py    # Contact form handlers
│   └── requirements.txt      # Python dependencies
├── ⚛️ Frontend/              # React frontend
│   ├── public/               # Static assets
│   └── src/                  # Source code
│       ├── components/       # Reusable components
│       ├── pages/            # Page components
│       ├── styles/           # Global styles
│       └── App.jsx           # Main App component
├── 🐳 docker-compose.yml     # Docker Compose config
├── 📚 docs/                  # Documentation
└── 📝 README.md              # This file
```

</div>

## 🤖 AI Chatbot Features

<div align="center">

![AI Chatbot](https://via.placeholder.com/800x400/1a1a2e/00b4d8?text=AI+Powered+Chatbot)

The portfolio includes an AI-powered chatbot with the following capabilities:

| Feature | Description |
|---------|-------------|
| 💬 **Natural Language** | Human-like conversations with visitors |
| 📄 **Document Processing** | Analyze PDFs and text documents |
| 🧠 **Context Awareness** | Remembers conversation history |
| 🔄 **Multi-Provider** | Works with OpenAI and Google AI |

</div>

## 🌐 Deployment

<div align="center">

### Vercel (Recommended)

[![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/git/external)

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set up environment variables in project settings
4. Deploy!

### Netlify

[![Deploy with Netlify](https://img.shields.io/badge/Deploy%20with-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com/start)

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `Frontend/dist`
4. Add environment variables
5. Deploy site

</div>

## 📝 License

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

</div>

## 🙏 Acknowledgments

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat-square&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![LangChain](https://img.shields.io/badge/LangChain-FF6B00?style=flat-square&logo=chainlink&logoColor=white)](https://www.langchain.com/)
[![React Icons](https://img.shields.io/badge/React%20Icons-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react-icons.github.io/react-icons/)

</div>

---

<div align="center">

<img src="https://via.placeholder.com/150x150/1a1a2e/e94560?text=AH" width="100" height="100" style="border-radius:50%">

### Made with ❤️ by Aswin Hariram

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/your-handle)

</div>
