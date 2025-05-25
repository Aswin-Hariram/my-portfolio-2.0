# Multi-Architecture Docker Deployment

This guide explains how to build and push multi-architecture Docker images for the portfolio application.

## Prerequisites

1. Docker installed with BuildKit enabled
2. Docker Hub account with repository access
3. `docker buildx` installed and configured

## Setup Buildx Builder

Create a new builder instance for multi-architecture builds:

```bash
docker buildx create --name mybuilder --use
docker buildx inspect --bootstrap
```

## Build and Push Images

1. Set your Docker Hub credentials as environment variables:

```bash
export DOCKER_USERNAME=your_dockerhub_username
export DOCKER_PASSWORD=your_dockerhub_token
```

2. Make the build script executable:

```bash
chmod +x build-and-push.sh
```

3. Run the build and push script:

```bash
./build-and-push.sh
```

This will:
- Build both backend and frontend images for linux/amd64 and linux/arm64
- Push them to your Docker Hub repository
- Tag them as `latest`

## Deploy with Docker Compose

1. Create a `.env` file in the project root with your configuration:

```env
# Docker Hub username
DOCKER_USERNAME=your_dockerhub_username

# Backend configuration
FLASK_ENV=production

# Frontend configuration
VITE_Contact_URL=http://your-domain.com/contact
VITE_CHAT_API_URL=http://your-domain.com/chat
```

2. Deploy the stack:

```bash
docker-compose up -d
```

## Verify Multi-Architecture Support

To verify that the images support multiple architectures:

```bash
docker buildx imagetools inspect ${DOCKER_USERNAME}/portfolio-backend:latest
docker buildx imagetools inspect ${DOCKER_USERNAME}/portfolio-frontend:latest
```

## Updating the Deployment

To update the deployment after making changes:

1. Rebuild and push the updated images:

```bash
./build-and-push.sh
```

2. Pull the latest images and recreate the containers:

```bash
docker-compose pull
docker-compose up -d --force-recreate
```

## Troubleshooting

- If you encounter permission issues, make sure you're logged in to Docker Hub:
  ```bash
  docker login -u your_dockerhub_username
  ```

- To clean up old images and containers:
  ```bash
  docker-compose down --rmi all -v
  docker system prune -f
  ```

- To check container logs:
  ```bash
  docker-compose logs -f
  ```
