#!/bin/bash

# Exit on error
set -e

# Check if DOCKER_USERNAME and DOCKER_PASSWORD are set
if [[ -z "$DOCKER_USERNAME" || -z "$DOCKER_PASSWORD" ]]; then
    echo "Error: DOCKER_USERNAME and DOCKER_PASSWORD environment variables must be set"
    exit 1
fi

# Login to Docker Hub
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Set the image names
BACKEND_IMAGE="${DOCKER_USERNAME}/portfolio-backend"
FRONTEND_IMAGE="${DOCKER_USERNAME}/portfolio-frontend"

# Build and push backend image
echo "Building and pushing backend image..."
docker buildx build \
    --platform linux/amd64,linux/arm64 \
    -t "${BACKEND_IMAGE}:latest" \
    -f Backend/Dockerfile \
    --push \
    ./Backend

# Build and push frontend image
echo "Building and pushing frontend image..."
docker buildx build \
    --platform linux/amd64,linux/arm64 \
    -t "${FRONTEND_IMAGE}:latest" \
    -f Frontend/Dockerfile \
    --push \
    --build-arg VITE_Contact_URL="${VITE_Contact_URL:-http://localhost:8001/contact}" \
    --build-arg VITE_RESUME_URL="${VITE_RESUME_URL:-/resume.pdf}" \
    --build-arg VITE_CHAT_API_URL="${VITE_CHAT_API_URL:-http://localhost:8001/chat}" \
    ./Frontend

echo "Images built and pushed successfully!"
echo "Backend: ${BACKEND_IMAGE}:latest"
echo "Frontend: ${FRONTEND_IMAGE}:latest"

# Logout from Docker Hub
docker logout
