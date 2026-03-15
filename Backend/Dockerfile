# Use latest stable Python
ARG PYTHON_VERSION=3.11-slim
FROM --platform=$TARGETPLATFORM python:${PYTHON_VERSION}

# Build arguments
ARG TARGETARCH
ARG TARGETOS
ARG TARGETPLATFORM

RUN echo "Building for $TARGETPLATFORM"

# Set working directory
WORKDIR /app

# Environment settings
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FLASK_APP=app.py \
    FLASK_ENV=production \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Install minimal system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN pip install --upgrade pip

# Install Python dependencies
COPY requirements.txt .
RUN pip install --root-user-action=ignore -r requirements.txt

# Copy project files
COPY . .

# Create non-root user
RUN useradd -m appuser
USER appuser

# Expose Flask port
EXPOSE 8001

# Start Gunicorn
CMD ["gunicorn", "-w", "4", "-k", "gthread", "--threads", "4", "--bind", "0.0.0.0:8001", "app:app"]