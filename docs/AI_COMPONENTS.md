# AI Components Documentation

This document provides detailed technical documentation for the AI components used in the portfolio, including the chatbot and document processing capabilities.

## Table of Contents
- [Architecture Overview](#-architecture-overview)
- [Chatbot Implementation](#-chatbot-implementation)
- [Document Processing](#-document-processing)
- [Vector Database](#-vector-database)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)

## 🌐 Architecture Overview

The AI system is built using a modular architecture:

```
┌───────────────────────────────────────────────────┐
│                   Frontend (React)                │
│  - Chat Interface                                │
│  - File Upload                                   │
└───────────────┬───────────────────────────────────┘
                │
                ▼
┌───────────────────────────────────────────────────┐
│                   Backend (Flask)                 │
│  ┌─────────────┐        ┌─────────────────────┐  │
│  │ Chat Handler│        │ Document Processor  │  │
│  └──────┬──────┘        └──────────┬──────────┘  │
│         │                            │             │
│         ▼                            ▼             │
│  ┌──────────────┐         ┌──────────────────┐  │
│  │ AI Providers │         │ Vector Database  │  │
│  │ - OpenAI     │         │ (FAISS)           │  │
│  │ - Google AI  │         └──────────────────┘  │
│  └──────────────┘                               │
└───────────────────────────────────────────────────┘
```

## 🤖 Chatbot Implementation

The chatbot uses LangChain to provide intelligent responses with context awareness.

### Key Features
- **Conversation Memory**: Maintains context across messages
- **Multi-provider Support**: Can use OpenAI, Google AI, or other LLM providers
- **Document Context**: Can reference uploaded documents in responses
- **Rate Limiting**: Prevents abuse of the chat interface

### Components

#### `bot.py`
Main chatbot implementation with the following key methods:

```python
class ChatBot:
    def __init__(self, model_name: str = "gpt-3.5-turbo"):
        """Initialize the chatbot with specified model."""
        self.llm = self._initialize_llm(model_name)
        self.memory = ConversationBufferWindowMemory(k=5)
        self.chain = self._create_conversation_chain()

    def _initialize_llm(self, model_name: str):
        # Initialize the language model based on configuration
        pass

    def _create_conversation_chain(self):
        # Set up the conversation chain with memory
        pass

    async def process_message(self, message: str, user_id: str) -> str:
        # Process incoming message and generate response
        pass
```

## 📄 Document Processing

### Supported Formats
- PDF
- Text
- Markdown

### Processing Pipeline
1. File upload and validation
2. Text extraction
3. Chunking
4. Embedding generation
5. Storage in vector database

### Key Functions

```python
def process_document(file_path: str) -> List[Document]:
    """Process uploaded document and return chunks."""
    # Implementation details
    pass

def generate_embeddings(texts: List[str]) -> List[List[float]]:
    """Generate embeddings for text chunks."""
    # Implementation details
    pass
```

## 🗃️ Vector Database

We use FAISS for efficient similarity search of document embeddings.

### Schema
```python
{
    "id": str,           # Unique document ID
    "content": str,      # Text content
    "embedding": List[float],  # Vector embedding
    "metadata": {
        "source": str,    # Original file name
        "page": int,      # Page number (for PDFs)
        "timestamp": str   # Processing timestamp
    }
}
```

## 🌐 API Endpoints

### Chat
- `POST /api/chat` - Send a message to the chatbot
  ```json
  {
    "message": "Hello, how are you?",
    "session_id": "user-123"
  }
  ```

### Document Upload
- `POST /api/upload` - Upload a document for processing
  - Content-Type: multipart/form-data
  - Parameters: `file` (required), `process_type` (optional)

## 🔧 Environment Variables

```env
# Required
OPENAI_API_KEY=your_openai_key
GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json

# Optional
EMBEDDING_MODEL=text-embedding-ada-002
CHAT_MODEL=gpt-3.5-turbo
VECTOR_DB_PATH=./data/vector_store
MAX_FILE_SIZE_MB=10
```

## 🐛 Troubleshooting

### Common Issues

1. **Chatbot not responding**
   - Check if API keys are set correctly
   - Verify the model name is valid
   - Check server logs for errors

2. **Document processing fails**
   - Ensure the file format is supported
   - Check file size limits
   - Verify write permissions in the upload directory

3. **Performance issues**
   - Reduce chunk size for large documents
   - Consider using a more powerful server for production
   - Enable caching for embeddings

### Logging

Logs are written to `logs/ai_service.log` with the following levels:
- INFO: General operation
- WARNING: Non-critical issues
- ERROR: Critical failures
- DEBUG: Detailed debugging information

## 📚 Additional Resources

- [LangChain Documentation](https://python.langchain.com/)
- [FAISS GitHub](https://github.com/facebookresearch/faiss)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Google AI Documentation](https://ai.google.dev/)
