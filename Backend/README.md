# Portfolio Backend

An AI-powered Flask backend for Aswin Hariram's portfolio website. This service provides a chatbot API that can answer questions about Aswin's skills, projects, and experience by referencing a PDF document with his portfolio information. It also handles contact form submissions.

## 🚀 Features

- **AI-powered Chatbot**: Uses LangChain and Google Generative AI to answer questions about Aswin's portfolio
- **Document Processing**: Parses PDF resume/portfolio document for accurate information retrieval
- **Vector Search**: Utilizes FAISS for efficient semantic search in the document
- **Contact Form Handling**: Processes and forwards contact form submissions with SMS notifications via Twilio
- **Dockerized**: Easy deployment with Docker
- **CORS Support**: Configured for cross-origin requests from the frontend

## 🛠️ Tech Stack

- **Flask**: Lightweight Python web framework
- **LangChain**: Framework for developing applications with LLMs
- **Google Generative AI**: AI model for natural language processing
- **FAISS**: Vector database for efficient similarity search
- **PyPDF2 & PDFMiner**: PDF parsing libraries
- **Twilio**: For notifications (optional)
- **ChromaDB**: Vector store for document embeddings

## 🔧 Project Structure

```
Backend/
├── app.py                # Main Flask application
├── bot.py                # Chatbot implementation
├── chat_handler.py       # Chat API endpoint handler
├── contact_handler.py    # Contact form handler
├── document.pdf          # Portfolio document for AI reference
├── requirements.txt      # Python dependencies
├── Dockerfile            # Docker configuration
└── .env                  # Environment variables
```

## 📋 Prerequisites

- Python 3.8+
- Google API Key for Generative AI

## 🚀 Getting Started

### Installation

1. Clone the repository and navigate to the Backend directory:
   ```bash
   git clone <repository-url>
   cd my-portfolio-2.0/Backend
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

4. Create a `.env` file with the following variables:
   ```
   GOOGLE_API_KEY=<your-google-api-key>
   FLASK_ENV=development
   SECRET_KEY=<your-secret-key>
   PDF_PATH=document.pdf
   
   # Twilio configuration for contact form SMS notifications (optional)
   TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
   TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
   TWILIO_PHONE_NUMBER=<your-twilio-phone-number>
   NOTIFICATION_NUMBER=<your-notification-number>
   ```

### Running the Server

```bash
python app.py
```

The server will start on http://localhost:5001 by default.

## 🐳 Docker

The backend can be built and run using Docker:

```bash
docker build -t portfolio-backend .
docker run -p 5001:5001 portfolio-backend
```

## 📚 API Documentation

### Endpoints

#### `GET /`

Health check endpoint.

**Response:**
```json
{
  "status": "success",
  "message": "Portfolio AI API is running",
  "version": "2.0"
}
```

#### `POST /chat`

Send a message to the AI chatbot.

**Request Body:**
```json
{
  "question": "What are Aswin's skills?"
}
```

**Response:**
```json
{
  "status": "success",
  "answer": "Aswin has expertise in..."
}
```

#### `POST /reset`

Reset the chat history.

**Response:**
```json
{
  "status": "success",
  "message": "Chat history reset successfully"
}
```

#### `POST /contact`

Submit a contact form. This endpoint processes contact form submissions and sends SMS notifications via Twilio when configured.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",  // Optional
  "message": "I'd like to discuss a project"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Contact submitted successfully",
  "sms_notification": "sent"  // or "not sent" if Twilio is not configured
}
```

**Error Response:**
```json
{
  "status": "error",
  "message": "Missing fields: name, email"
}
```

## 🧠 How the Chatbot Works

1. **Document Processing**: The PDF document containing Aswin's portfolio information is processed and split into chunks.

2. **Vector Embedding**: Text chunks are converted into vector embeddings using Google's embedding model.

3. **Query Processing**: When a user asks a question, the system:
   - Converts the question into a vector embedding
   - Searches for the most relevant document chunks using FAISS
   - Passes the relevant chunks and the question to the LLM
   - Returns the generated response

4. **Conversation Context**: The system maintains conversation history for context-aware responses.

## 📱 Contact Form System

### How It Works

1. **Form Submission**: The frontend sends a POST request to the `/contact` endpoint with user details.

2. **Data Validation**: The backend validates the required fields (name, email, message).

3. **SMS Notification**: When properly configured with Twilio:
   - The system sends an SMS notification to the specified number
   - The SMS includes the sender's name, email, phone (if provided), and a preview of their message

4. **Response**: The system returns a success or error response to the frontend.

### Twilio Integration

The contact form handler uses Twilio to send SMS notifications when new contact submissions are received. This is optional and will gracefully degrade if Twilio credentials are not provided.

**Required Environment Variables for Twilio:**
- `TWILIO_ACCOUNT_SID`: Your Twilio account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio authentication token
- `TWILIO_PHONE_NUMBER`: The Twilio phone number to send messages from
- `NOTIFICATION_NUMBER`: The phone number to receive notifications

**Note:** The `TWILIO_PHONE_NUMBER` and `NOTIFICATION_NUMBER` must be different numbers as per Twilio's requirements.

## 🚢 Deployment

The backend can be deployed to any cloud platform that supports Docker containers, such as:

- Google Cloud Run
- AWS Elastic Container Service
- Heroku
- Digital Ocean App Platform

## 📄 License

This project is licensed under the MIT License.
