<div align="center">

# 🚀 Aswin's Portfolio - Backend

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![LangChain](https://img.shields.io/badge/LangChain-FF6B00?style=for-the-badge&logo=langchain&logoColor=white)](https://python.langchain.com/)
[![FAISS](https://img.shields.io/badge/FAISS-FF6B00?style=for-the-badge&logo=facebook&logoColor=white)](https://faiss.ai/)

![Backend Banner](https://via.placeholder.com/1200x400/1a1a2e/00b4d8?text=Aswin's+Portfolio+Backend+API)

A robust backend service powering Aswin's portfolio, featuring an AI chatbot, document processing, and API endpoints. Built with Python, Flask, and modern AI technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🤖 **AI Chatbot** | Powered by LangChain with support for multiple LLM providers |
| 📄 **Document Processing** | Extract and process PDFs, text, and markdown files |
| 🔍 **Semantic Search** | FAISS-based vector similarity search |
| 🔄 **RESTful API** | Well-documented endpoints for frontend integration |
| 🔒 **Authentication** | Secure API key validation |
| 🚀 **WebSocket Support** | Real-time communication for chat functionality |
| 📊 **Rate Limiting** | Prevent abuse of API endpoints |
| 📝 **Logging** | Comprehensive logging for debugging and monitoring |

</div>

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|--------------|
| **Language** | Python 3.10+ |
| **Framework** | Flask, Flask-CORS |
| **AI/ML** | LangChain, OpenAI, Google AI |
| **Vector Database** | FAISS |
| **Document Processing** | PyPDF2, pdfminer.six |
| **API Documentation** | Swagger/OpenAPI |
| **Containerization** | Docker, Docker Compose |
| **Testing** | pytest |
| **Linting/Formatting** | Black, Flake8 |

</div>

### Key Dependencies

```python
# requirements.txt
Flask==2.3.3
Flask-CORS==4.0.0
gunicorn==21.2.0
python-dotenv==1.0.0
langchain-core==0.1.0
langchain-community==0.0.10
langchain-openai==0.0.1
faiss-cpu==1.7.4
PyPDF2==3.0.1
python-multipart==0.0.6
python-jose==3.3.0
```

## 🏗️ Project Structure

```
Backend/
├── app.py                # Main application entry point
├── bot.py                # Chatbot implementation
├── chat_handler.py       # Chat request handlers
├── contact_handler.py    # Contact form handlers
├── document_processor.py # Document processing logic
├── vector_store.py       # FAISS vector store wrapper
├── config.py             # Configuration settings
├── requirements.txt      # Python dependencies
└── tests/                # Test files
    ├── __init__.py
    ├── test_app.py
    └── test_chat.py
```

## 🚀 Getting Started

### Prerequisites

- Python 3.10 or higher
- pip (Python package manager)
- Docker (optional)
- OpenAI API key
- Google Cloud credentials (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-v2.git
   cd portfolio-v2/Backend
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   Create a `.env` file in the Backend directory:
   ```env
   FLASK_APP=app.py
   FLASK_ENV=development
   OPENAI_API_KEY=your_openai_api_key
   GOOGLE_APPLICATION_CREDENTIALS=path/to/your/service-account.json
   VECTOR_STORE_PATH=./data/vector_store
   ```

### Running the Server

#### Development Mode
```bash
flask run --port 5000
```

#### Production Mode (with Gunicorn)
```bash
gunicorn -w 4 -b :5000 app:app
```

#### Using Docker
```bash
docker build -t portfolio-backend .
docker run -p 5000:5000 portfolio-backend
```

## 🌐 API Endpoints

### Chat
- `POST /api/chat` - Send a message to the chatbot
  ```json
  {
    "message": "Tell me about Aswin's experience",
    "session_id": "unique-session-id"
  }
  ```

### Document Upload
- `POST /api/upload` - Upload a document for processing
  ```
  Content-Type: multipart/form-data
  
  file: [binary file]
  process_type: "text" | "vector"
  ```

### Health Check
- `GET /api/health` - Check if the API is running
  ```json
  {
    "status": "healthy",
    "timestamp": "2025-05-25T15:30:00Z"
  }
  ```

## 🧪 Testing

Run the test suite with pytest:

```bash
pytest tests/
```

## 🔧 Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `FLASK_ENV` | Environment (development/production) | `development` |
| `OPENAI_API_KEY` | OpenAI API key | - |
| `VECTOR_STORE_PATH` | Path to store FAISS index | `./data/vector_store` |
| `MAX_FILE_SIZE_MB` | Maximum file upload size (MB) | `10` |
| `RATE_LIMIT` | Requests per minute | `60` |

## 🚀 Deployment

### Docker

```bash
docker build -t portfolio-backend .
docker run -d -p 5000:5000 --env-file .env portfolio-backend
```

### Kubernetes

Example deployment YAML:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-backend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio-backend
  template:
    metadata:
      labels:
        app: portfolio-backend
    spec:
      containers:
      - name: portfolio-backend
        image: your-username/portfolio-backend:latest
        ports:
        - containerPort: 5000
        envFrom:
        - secretRef:
            name: backend-secrets
```

## 📚 Documentation

For detailed API documentation, visit `/docs` when the server is running locally.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Flask](https://flask.palletsprojects.com/) - The web framework used
- [LangChain](https://python.langchain.com/) - For AI capabilities
- [FAISS](https://faiss.ai/) - For efficient similarity search
- [Docker](https://www.docker.com/) - For containerization

---

<div align="center">
  Made with ❤️ by Aswin Hariram
</div>
