# Use an official Python runtime as a parent image
# Using explicit platform for build stage to ensure consistent builds
FROM --platform=$BUILDPLATFORM python:3.9-slim

# Set build arguments for architecture-specific builds
ARG TARGETARCH
ARG TARGETOS

# Install architecture-specific dependencies
RUN echo "Building for $TARGETOS/$TARGETARCH"

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
EXPOSE 5001

# Command to run the application
CMD ["gunicorn", "--bind", "0.0.0.0:5001", "app:app"]
