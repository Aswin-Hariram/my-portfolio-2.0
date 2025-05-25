<div align="center">

# 🔥 Aswin's Portfolio - Backend

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.com/)
[![LangChain](https://img.shields.io/badge/LangChain-FF6B00?style=for-the-badge&logo=chainlink&logoColor=white)](https://python.langchain.com/)
[![FAISS](https://img.shields.io/badge/FAISS-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://faiss.ai/)

<img width="1455" alt="Screenshot 2025-05-25 at 11 29 31 PM" src="https://github.com/user-attachments/assets/8656597d-36d1-4e84-be9f-b358673940db" />

### A robust backend service powering Aswin's portfolio, featuring an AI chatbot, 
### document processing, and API endpoints. Built with Python, Flask, and Google Gemini AI.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Python 3.9+](https://img.shields.io/badge/Python-3.9%2B-blue?style=for-the-badge)](https://www.python.org/)

</div>

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🤖 **AI Chatbot** | Powered by LangChain with Google Gemini AI |
| 📄 **Document Processing** | Extract and process PDF resume data |
| 🔍 **Semantic Search** | FAISS-based vector similarity search |
| 🔄 **RESTful API** | Simple endpoints for frontend integration |
| 📱 **Contact Form** | SMS notifications via Twilio integration |
| 💬 **Chat History** | Session-based chat history management |
| 🐳 **Docker Support** | Containerized deployment ready |
| 📝 **Logging** | Comprehensive logging for debugging and monitoring |

<img src="https://via.placeholder.com/800x250/1a1a2e/e94560?text=AI+Powered+Backend" alt="AI Backend" style="border-radius:8px; margin-top:20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />

</div>

## 🔧️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|--------------|  
| **Language** | [![Python 3.9+](https://img.shields.io/badge/Python%203.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/) |
| **Framework** | [![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/) [![Flask-CORS](https://img.shields.io/badge/Flask--CORS-000000?style=flat-square&logo=flask&logoColor=white)](https://flask-cors.readthedocs.io/) |
| **AI/ML** | [![LangChain](https://img.shields.io/badge/LangChain-FF6B00?style=flat-square&logo=chainlink&logoColor=white)](https://python.langchain.com/) [![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/) |
| **Vector Database** | [![FAISS](https://img.shields.io/badge/FAISS-1877F2?style=flat-square&logo=facebook&logoColor=white)](https://faiss.ai/) |
| **Document Processing** | [![PyPDF2](https://img.shields.io/badge/PyPDF2-3776AB?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)](https://pypi.org/project/PyPDF2/) [![pdfminer.six](https://img.shields.io/badge/pdfminer.six-3776AB?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)](https://pypi.org/project/pdfminer.six/) |
| **Messaging** | [![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=flat-square&logo=twilio&logoColor=white)](https://www.twilio.com/) |
| **Containerization** | [![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/) |
| **Deployment** | [![Gunicorn](https://img.shields.io/badge/Gunicorn-499848?style=flat-square&logo=gunicorn&logoColor=white)](https://gunicorn.org/) |
| **Utilities** | [![python-dotenv](https://img.shields.io/badge/python--dotenv-3776AB?style=flat-square&logo=python&logoColor=white)](https://pypi.org/project/python-dotenv/) |

</div>

### Key Dependencies

<div>

```python
# requirements.txt
Flask
Flask-Cors
gunicorn
python-dotenv
langchain-core
langchain-community
langchain_google_genai
faiss-cpu
PyPDF2
langchain-openai
pdfminer.six
chromadb
requests
google-cloud-aiplatform
twilio
markdown
```

[![Flask](https://img.shields.io/badge/Flask-Latest-black?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![LangChain](https://img.shields.io/badge/LangChain-Latest-FF6B00?style=flat-square&logo=chainlink&logoColor=white)](https://python.langchain.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-2.0-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

## 🏗️ Project Structure

<div>

```
Backend/
├─ 🚀 app.py                # Main application entry point
├─ 💬 chat_handler.py       # Chat request handlers
├─ 📫 contact_handler.py    # Contact form handlers
├─ 📄 document.pdf          # Resume document for AI processing
├─ 📢 Dockerfile           # Container configuration
├─ 🔐 .env                  # Environment variables (gitignored)
├─ 🚫 .gitignore            # Git ignore configuration
├─ 🚫 .dockerignore         # Docker ignore configuration
├─ 📚 data/                 # Directory for storing processed data
├─ 💶 requirements.txt      # Python dependencies
└─ 🐧 venv/                 # Python virtual environment (gitignored)
```

</div>

## 🚀 Getting Started

<div align="center">

### Prerequisites

[![Python 3.9+](https://img.shields.io/badge/Python-3.9%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![pip](https://img.shields.io/badge/pip-latest-3775A9?style=flat-square&logo=pypi&logoColor=white)](https://pip.pypa.io/)
[![Docker](https://img.shields.io/badge/Docker-optional-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Google AI API](https://img.shields.io/badge/Google%20AI%20API-required-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.com/)
[![Twilio](https://img.shields.io/badge/Twilio-optional-F22F46?style=flat-square&logo=twilio&logoColor=white)](https://www.twilio.com/)

</div>

### Installation

<details>
<summary>📋 Step-by-Step Setup Guide</summary>

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/my-portfolio-2.0.git
cd my-portfolio-2.0/Backend
```

#### 2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

#### 3. Install dependencies
```bash
pip install -r requirements.txt
```

#### 4. Set up environment variables
Create a `.env` file in the Backend directory:
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
</details>

### Running the Server

<div>

#### Development Mode

[![Flask](https://img.shields.io/badge/Run%20with-Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)

```bash
python app.py
# Or
flask run --port 8001
```

#### Production Mode (with Gunicorn)

[![Gunicorn](https://img.shields.io/badge/Run%20with-Gunicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white)](https://gunicorn.org/)

```bash
gunicorn --bind 0.0.0.0:8001 app:app
```

#### Using Docker

[![Docker](https://img.shields.io/badge/Run%20with-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

```bash
docker build -t portfolio-backend .
docker run -p 8001:8001 portfolio-backend
```

</div>

## 🌐 API Endpoints

<div align="center">

</div>

### Root Endpoint
- `GET /` - Check if the API is running
  ```json
  {
    "status": "success",
    "message": "Portfolio AI API is running",
    "version": "2.0"
  }
  ```

### Chat
- `POST /chat` - Send a message to the AI chatbot
  ```json
  {
    "question": "Tell me about Aswin's experience"
  }
  ```
  Response:
  ```json
  {
    "answer": "[Markdown formatted response about Aswin's experience]",
    "status": "success",
    "processing_time": 1.25
  }
  ```

### Reset Chat History
- `POST /reset` - Reset the chat history
  ```json
  {}
  ```
  Response:
  ```json
  {
    "status": "success",
    "message": "Chat history reset successfully"
  }
  ```

### Contact Form
- `POST /contact` - Submit contact form information
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890", // Optional
    "message": "I'd like to discuss a project opportunity."
  }
  ```
  Response:
  ```json
  {
    "status": "success",
    "message": "Contact submitted successfully",
    "sms_notification": "sent" // or "not sent"
  }
  ```

## 🧪 Testing

<div >

### Manual Testing

You can manually test the API endpoints using tools like Postman or curl:

```bash
# Test the root endpoint
curl http://localhost:8001/

# Test the chat endpoint
curl -X POST http://localhost:8001/chat \
  -H "Content-Type: application/json" \
  -d '{"question":"Tell me about Aswin"}'

# Test the contact endpoint
curl -X POST http://localhost:8001/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

</div>

## 🔧 Configuration

<div align="center">

| Variable | Description | Default |
|----------|-------------|----------|
| `FLASK_APP` | Flask application entry point | `app.py` |
| `FLASK_ENV` | Environment (development/production) | `development` |
| `SECRET_KEY` | Secret key for session management | Random value if not set |
| `PDF_PATH` | Path to the PDF document for AI processing | `document.pdf` |
| `PORT` | Port for the server to run on | `8001` |
| `TWILIO_ACCOUNT_SID` | Twilio account SID for SMS notifications | - |
| `TWILIO_AUTH_TOKEN` | Twilio authentication token | - |
| `TWILIO_PHONE_NUMBER` | Twilio phone number to send SMS from | - |
| `NOTIFICATION_NUMBER` | Phone number to receive notifications | - |

</div>

## 🚀 Deployment

<div>

### Docker

[![Docker](https://img.shields.io/badge/Deploy%20with-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

```bash
# Build the Docker image
docker build -t portfolio-backend .

# Run the container
docker run -d -p 8001:8001 --env-file .env portfolio-backend
```

The Dockerfile is configured to use the official Python 3.9 slim image and sets up the necessary environment for running the application with Gunicorn.

<img width="1470" alt="Screenshot 2025-05-25 at 11 59 28 PM" src="https://github.com/user-attachments/assets/224e83df-04b5-4491-b233-f247c29ae899" />

</div>

---

<div>


### Key Components

- **app.py**: Main application entry point that defines the API routes
- **chat_handler.py**: Handles the AI chat functionality using LangChain and Google Gemini
- **contact_handler.py**: Manages the contact form submissions and Twilio SMS notifications
- **document.pdf**: The resume/CV document that the AI uses to answer questions about Aswin

## 🤝 Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

   
##  Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - The web framework used
- [LangChain](https://python.langchain.com/) - For AI orchestration capabilities
- [Google Gemini](https://ai.google.dev/) - For AI language model capabilities
- [FAISS](https://faiss.ai/) - For efficient similarity search and vector storage
- [Twilio](https://www.twilio.com/) - For SMS notification capabilities
- [Docker](https://www.docker.com/) - For containerization

---

<div align="center">
  <p>Made with ❤️ by Aswin Hariram</p>
  <p>© 2025 - Portfolio Backend API v2.0</p>
</div>
