# Docker IP2 Explanation

## 1. Base Image Choices

- **Frontend (Client)**: `node:18-alpine` was used as the build stage for its small size and speed. The production stage uses `nginx:alpine` to serve static files efficiently.
- **Backend (Server)**: Built from `node:18-alpine`, balancing compatibility with Node.js apps and low size.
- **Database**: Used `bitnami/mongodb:7.0` for better security defaults and smaller size than the official MongoDB image.

---

## 2. Dockerfile Directives

### Frontend:
- `COPY` and `RUN npm run build` in the build stage.
- Used multi-stage build to separate dependencies from final static files.
- `COPY nginx.conf` used to configure nginx to serve the React app.

### Backend:
- `WORKDIR` to set working dir.
- `COPY` app source.
- `RUN npm ci` ensures clean install of dependencies.
- `CMD ["npm", "start"]` to run the API.

---

## 3. Docker Compose Networking

- **Bridge Network** named `project-network` connects all containers.
- Services communicate by name (e.g., `app-mongo`, `geoffrey-yolo-backend`).
- Exposed:
  - Frontend on `localhost:3000`
  - Backend on `localhost:5000`
  - MongoDB on `localhost:27017` (for dev only)

---

## 4. Volumes

- **MongoDB** uses a named volume `app-mongo-data` to persist data in `/bitnami/mongodb`.
- **Frontend/Backend** bind-mounted during development:
  - Host `./client` and `./backend` → `/usr/src/app`
  - Helps with hot reload during development.

---

## 5. Git Workflow

- Used descriptive commits like:
  - `Initial backend setup`
  - `Add Dockerfile for backend`
  - `Configure Docker Compose`
  - `Push images to Docker Hub`
- Pushed to GitHub repository: [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)
- Ensured minimum 10+ meaningful commits.
- Used semantic versioning tags (`v1.0.0`) for image identification.

---

## 6. Application Status

- ✅ All microservices containerized and orchestrated with Docker Compose.
- ✅ Networked via custom bridge.
- ✅ MongoDB data is persistent across container restarts.
- ✅ Images pushed to Docker Hub:
  - `neoooo2/geoffrey-yolo-client:v1.0.0`
  - `neoooo2/geoffrey-yolo-backend:v1.0.0`
- ✅ Screenshot of Docker Hub is included.

---

## 7. Best Practices Followed

- Used small base images (`alpine` variants).
- Multi-stage Dockerfile to reduce frontend size.
- Semantic image tags: `v1.0.0`
- Custom bridge network and volumes.
- Dockerfile and Compose are clean and production-ready.

