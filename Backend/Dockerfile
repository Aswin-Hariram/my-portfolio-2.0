# Use an official Python runtime as a parent image
# Using explicit platform for build stage to ensure consistent builds
ARG PYTHON_VERSION=3.9-slim
FROM --platform=$TARGETPLATFORM python:${PYTHON_VERSION}

# Set build arguments for architecture-specific builds
ARG TARGETARCH
ARG TARGETOS
ARG TARGETPLATFORM

# Install architecture-specific dependencies
RUN echo "Building for $TARGETPLATFORM"

# Set the working directory in the container
WORKDIR /app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV FLASK_APP=app.py
ENV FLASK_ENV=production

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements file and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 8001

# Command to run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8001", "app:app"]
