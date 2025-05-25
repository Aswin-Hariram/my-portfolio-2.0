#!/bin/bash

# Exit on any error
set -e

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Create a new builder instance for multi-architecture builds
echo "Setting up Docker Buildx..."
docker buildx create --name mybuilder --use || true
docker buildx inspect --bootstrap

# Log in to Docker Hub if not already logged in
if ! docker info | grep -q "Username:"; then
    echo "Please log in to Docker Hub..."
    docker login
fi

# Build and push multi-architecture images
echo "Building and pushing multi-architecture images..."

# Build and push frontend
echo "Building frontend for multiple architectures..."
docker buildx build \
    --platform linux/amd64,linux/arm64,linux/arm/v7 \
    -t aswinhariram/portfolio-frontend:latest \
    --push \
    ./Frontend

# Build and push backend
echo "Building backend for multiple architectures..."
docker buildx build \
    --platform linux/amd64,linux/arm64,linux/arm/v7 \
    -t aswinhariram/portfolio-backend:latest \
    --push \
    ./Backend

echo "\nMulti-architecture build and push completed successfully!"
echo "Images are available at:"
echo "- Docker Hub: https://hub.docker.com/r/aswinhariram/portfolio-frontend"
echo "- Docker Hub: https://hub.docker.com/r/aswinhariram/portfolio-backend"
