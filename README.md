# Geoffrey Murira – IP2 (Yolo Ecommerce Application)

## 📦 Prerequisites

To run this project, ensure you have the following installed:

- **Node.js** (v20 or higher) – for local setup
- **MongoDB** (v6.0 or higher) – for local setup
- **Docker** (v20.10 or higher) – for containerized setup
- **Docker Compose** (v2.0 or higher) – for orchestration
- **Git** – to clone the repository

---

## 🛠️ Tech Stack

| Component     | Technology Used         |
|--------------|--------------------------|
| Frontend      | React (served via NGINX) |
| Backend       | Node.js (Express API)    |
| Database      | MongoDB                  |
| Containerization | Docker & Docker Compose |

---

## 🚀 Features

- React frontend served through NGINX
- Node.js backend API with Express
- MongoDB containerized and persisted with Docker volumes
- Custom Docker bridge network for container communication
- Versioned Docker images pushed to Docker Hub

---

## ⚙️ Setup & Running the Application

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/yolo.git
cd yolo


# Build and run all containers
docker-compose up --build

🔗 Docker Hub Repositories(https://hub.docker.com/repositories/neoooo2)
geoffrey-yolo-client

geoffrey-yolo-backend

![DockerHub Screenshot](dockerhub-screenshot.png)


🐳 How to Pull from Docker Hub
If you'd like to run the application using pre-built images from Docker Hub:

bash
Copy
Edit
# Pull the backend image
docker pull neoooo2/geoffrey-yolo-backend:v1.0.0

# Pull the frontend image
docker pull neoooo2/geoffrey-yolo-client:v1.0.0
Update your docker-compose.yaml file to remove the build: lines under each service and ensure image: is correctly set like this:

yaml
Copy
Edit
geoffrey-yolo-client:
  image: neoooo2/geoffrey-yolo-client:v1.0.0
  ...

geoffrey-yolo-backend:
  image: neoooo2/geoffrey-yolo-backend:v1.0.0
  ...
Then run:

bash
Copy
Edit
docker-compose up



👤 Author
Geoffrey Murira

DockerHub Profile(neoooo2)
GitHub Profile
Nairobi, Kenya 🇰🇪

