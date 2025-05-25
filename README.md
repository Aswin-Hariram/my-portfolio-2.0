# 🚀 Aswin Hariram - Portfolio v2.0

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

<img width="100%" alt="Portfolio Screenshot" src="https://github.com/user-attachments/assets/a40c0ec8-fcc8-44d9-b9eb-4c39b29c3784" />

[![Visit Live Site](https://img.shields.io/badge/Visit%20Live%20Site-FF6B6B?style=for-the-badge&logo=netlify&logoColor=white&labelColor=242424&color=61DAFB)](https://your-portfolio-url.netlify.app/)

</div>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI/UX** | Smooth animations using Framer Motion |
| 🤖 **AI-Powered Chatbot** | LangChain + OpenAI integration |
| 📱 **Responsive Design** | Optimized for all screen sizes |
| 📂 **Project Showcase** | Visual case studies |
| 📧 **Contact Form** | Integrated with email services |
| 🌓 **Dark/Light Mode** | Theme toggle support |
| ⚡ **Performance Optimized** | Vite-powered builds |

## 🛠️ Tech Stack

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
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](h

## 🚦 Getting Started

### Prerequisites

- Node.js v16+
- Python 3.10+
- Git
- Docker (optional)

### Setup

#### 1. Clone Repository

```bash
git clone https://github.com/your-username/portfolio-v2.git
cd portfolio-v2
```

#### 2. Backend Setup

```bash
cd Backend
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

#### 3. Frontend Setup

```bash
cd ../Frontend
npm install
```

### ⚙️ Environment Variables

**Backend `.env`:**
```env
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your_secret_key_here
PDF_PATH=document.pdf

# For Twilio integration (optional)
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
NOTIFICATION_NUMBER=your_notification_phone_number
```

**Frontend `.env`:**
```env
VITE_Contact_URL=<Backend Hosted URL>/contact
VITE_RESUME_URL=h<GDrive pdf Location>
VITE_CHAT_API_URL=Backend Hosted URL/chat

```

### 🧪 Running Locally

**Backend:**
```bash
cd Backend
source venv/bin/activate
flask run
```

**Frontend:**
```bash
cd Frontend
npm run dev
```

### 🐳 Docker

```bash
docker-compose up --build
```

## 🧪 Testing

**Backend:**
```bash
cd Backend
pytest
```

**Frontend:**
```bash
cd Frontend
npm test
```

## 📁 Project Structure

```
portfolio-v2/
├── Backend/
│   ├── app.py
│   ├── bot.py
│   ├── chat_handler.py
│   ├── contact_handler.py
│   └── requirements.txt
├── Frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── styles/
│       └── App.jsx
├── docker-compose.yml
└── README.md
```

## 📦 Key Dependencies

**Python:**
```requirement.txt
- Flask
- Flask-Cors
- gunicorn
- python-dotenv
- langchain-core/community/openai/google_genai
- faiss-cpu
- PyPDF2, pdfminer.six
- chromadb
- requests, twilio, markdown
```
**Frontend:**
```json
{
  "@emailjs/browser": "^3.11.0",
  "@gsap/react": "^2.1.2",
  "@headlessui/react": "^2.2.2",
  "framer-motion": "^10.18.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-markdown": "^10.1.0",
  "react-router-dom": "^7.5.3",
  "sass": "^1.68.0"
}
```

## 🌐 Deployment

### Vercel / Netlify

- Build command: `npm run build`
- Publish directory: `Frontend/dist`
- Add environment variables in project settings

### Heroku (Backend)

- Set Python buildpack
- Add `.env` variables
- Deploy via GitHub or CLI

## 🤖 AI Chatbot Features

| Feature | Description |
|--------|-------------|
| 💬 Natural Conversation | Human-like responses |
| 📄 Document Processing | Read and summarize PDFs |
| 🧠 Contextual Memory | Understands chat history |
| 🔄 Multi-Provider Support | Works with OpenAI and Google |

---
<div align="center">
  <p>Made with ❤️ by Aswin Hariram</p>
  <p>© 2025 - Portfolio Backend API v2.0</p>
</div>
