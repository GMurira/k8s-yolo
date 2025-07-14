# Docker Project Explanation – Week 5 IP2

## 1. Choice of Base Image

Each container uses a base image selected for size, performance, and community support:

- **Client (React App)**:  
  Used `node:18-alpine` in the build stage for its lightweight size and compatibility with modern JavaScript tooling. The production image uses `nginx:alpine` for efficiently serving static files.

- **Backend (Node.js API)**:  
  Also uses `node:18-alpine` to minimize the image footprint and align with best practices for Node.js applications in production.

- **MongoDB Database**:  
  Replaced the official `mongo` image with `bitnami/mongodb:7.0` to reduce size (723MB vs. 901MB) while keeping support for production-grade MongoDB with a Bitnami configuration.

---

## 2. Dockerfile Directives

### Client Dockerfile (multi-stage build)
- `FROM node:18-alpine AS builder`: Lightweight Node.js base for building the React app.
- `WORKDIR /usr/src/app`: Sets the working directory.
- `COPY package*.json ./ && RUN npm ci`: Ensures deterministic dependency installation.
- `COPY . .`: Brings the rest of the source files.
- `RUN npm run build`: Compiles the React app to static HTML/JS.
- `FROM nginx:alpine`: Final stage using NGINX to serve the static build.
- `COPY --from=builder ...`: Copies the compiled files into NGINX’s public directory.
- `COPY nginx.conf ...`: Applies custom NGINX settings for SPA routing.

### Backend Dockerfile
- `FROM node:18-alpine`: Lightweight image optimized for Node.js.
- `WORKDIR /usr/src/app`: Working directory setup.
- `COPY package*.json ./ && RUN npm ci`: Securely installs dependencies.
- `COPY . .`: Adds the app source code.
- `CMD ["node", "server.js"]`: Starts the server.

---

## 3. Docker Compose Networking

- **Network Setup**: A custom bridge network named `project-network` was created.
- **IPAM Configuration**: Explicit IP range and subnet (`172.21.0.0/16`) to avoid conflicts and allow potential expansion.
- **Port Mapping**:
  - Frontend: Exposes NGINX at `3000:80`
  - Backend: Exposes API at `5000:5000`
  - MongoDB: Default port `27017` mapped

---

## 4. Docker Compose Volumes

Volumes provide persistence and development convenience:
- `app-mongo-data`: Stores MongoDB data outside the container at `/bitnami/mongodb` to prevent data loss across container restarts.
- **Bind Mounts** (`./client`, `./backend`) allow live code reload during development without rebuilding.

---

## 5. Git Workflow

- **Cloning & Branching**: Started by cloning the starter repo and creating a dedicated `feature/docker-setup` branch.
- **Commits**: Logical commits were made for each milestone (e.g., Dockerfile creation, Compose setup, nginx config, MongoDB volume).
- **Merging**: After successful testing, the feature branch was merged into `main`.
- **Push**: Images were built and tagged as `geoffrey/geoffrey-yolo-client:v1.0.0` and `geoffrey/geoffrey-yolo-backend:v1.0.0`, then pushed to Docker Hub.

---

## 6. Application Running and Debugging

- **Successful Build**: `docker compose up --build` executed without errors.
- **MongoDB Optimization**: Changed from the default image to `bitnami/mongodb` to reduce size.
- **Custom nginx.conf**: Solved SPA refresh issues by using `try_files $uri $uri/ /index.html`.
- **Container Errors**: Resolved permission issues using `sudo`, and cleaned up old images with `docker image prune -f`.
- **Container Renaming**: Ensured clear container names by explicitly setting `container_name` in the Compose file.

---

## 7. Docker Best Practices

- **Tagging**: Images follow semantic versioning:
  - `geoffrey/geoffrey-yolo-client:v1.0.0`
  - `geoffrey/geoffrey-yolo-backend:v1.0.0`
- **Multi-Stage Builds**: Used for frontend to keep the final image lean and production-ready.
- **Lightweight Base Images**: Used `alpine` variants to save space.
- **Volume Isolation**: Ensured no data loss for MongoDB and reduced container rebuild time during development.

---

## Docker Hub Screenshot

![Docker Hub Images](./image.png)

> Screenshot of published Docker images showing client and backend versions uploaded to Docker Hub.

---
