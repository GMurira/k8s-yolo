# Yolo E-Commerce Application Kubernetes Deployment

This project demonstrates the deployment of the **Yolo E-Commerce Application** on a Google Kubernetes Engine (GKE) cluster. It includes the following components:

- **Frontend:** React application serving the user interface.
- **Backend:** Node.js Express server providing API endpoints.
- **Database:** MongoDB StatefulSet for persistent data storage.

---

## Project Structure

- `frontend/` - React client source code (deployed as a Deployment)
- `backend/` - Node.js Express backend source code (deployed as a Deployment)
- `manifests/` - Kubernetes YAML manifests to deploy frontend, backend, and database
- `db-statefulset.yaml` - MongoDB StatefulSet with persistent volume claims (PVCs)

---

## Kubernetes Components

- **Deployments**: For frontend and backend apps with multiple replicas for availability.
- **StatefulSet**: For MongoDB to provide stable network ID and persistent storage.
- **PersistentVolumeClaims (PVCs)**: For MongoDB data storage using GCP Persistent Disks.
- **Services**: To expose backend and frontend internally or externally.

---

## Setup and Deployment

### Prerequisites

- Google Cloud SDK (`gcloud`) installed and configured.
- A GKE cluster with proper node pools.
- `kubectl` configured to access your cluster.

### Deployment Steps

1. Clone the repository.
2. Apply MongoDB StatefulSet and PVC manifests:

kubectl apply -f db-statefulset.yaml -n yolo

3. Apply backend Deployment:
kubectl apply -f backend-deployment.yaml -n yolo

4. Apply frontend Deployment:
kubectl apply -f frontend-deployment.yaml -n yolo

5. Verify all pods are running:
kubectl get pods -n yolo

6. Expose services if needed for external access.
 - front end expose here.
  [project_link](http://34.14.7.133/#products)

---

## Troubleshooting

- Check pod status and logs: