# Explanation for Yolo E-Commerce Kubernetes Deployment

## Overview

This project demonstrates deploying a full-stack docerisez e-commerce application on a managed Kubernetes cluster (GKE). It showcases container orchestration, persistent storage, and application scaling concepts.


## Project structure folder
---
yolo/
│
├── backend/                   # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── app.js
│   └── Dockerfile
│
├── client/                    # React frontend
│   ├── src/
│   └── Dockerfile
│
├── manifests/                 # Kubernetes YAML files
│   ├── backend-deployment.yaml
│   ├── backend_service.yaml
│   ├── db-service.yaml
│   ├── db-statefulset.yaml
│   ├── frontend_deployment.yaml
│   ├── frontend_service.yaml
│   └── yolo-namespace.yaml
│
├── README.md
└── explanation.md

## Components and Why

- **MongoDB StatefulSet:** Ensures stable network ID and persistent storage for database pods. StatefulSet is required over Deployment because MongoDB needs stable storage and identity.
- **Persistent Volume Claims (PVCs):** Used to request storage from the cluster’s underlying infrastructure (GCP Persistent Disks in this case). PVCs guarantee that data persists beyond pod lifecycle.
- **Deployments for Frontend and Backend:** Manage replica sets and rolling updates for stateless applications.
- **Namespaces:** Organize resources in the `yolo` namespace to isolate application components.

---
# Explanation for Yolo E-Commerce Kubernetes Deployment

## Overview

This project demonstrates deploying a full-stack e-commerce application on a managed Kubernetes cluster (GKE). It showcases container orchestration, persistent storage, and application scaling concepts.

---

## Live Deployment

[See the project here](http://34.14.7.133/#products)

You should see the following on your frontend:  

![Frontend Kubernetes Deployment](readmeimages/frontendk8s.png)

---

## Architecture Components and Rationale

### MongoDB StatefulSet
MongoDB requires stable network identities and persistent storage to ensure data durability. A **StatefulSet** guarantees that pods have consistent identities and persistent volumes, unlike Deployments which are ephemeral.

### Persistent Volume Claims (PVCs)
PVCs are used to dynamically provision storage from the underlying infrastructure (Google Cloud Persistent Disks). This ensures that MongoDB data is stored persistently even if the pod is rescheduled or restarted.

### Deployments for Frontend and Backend
The frontend and backend are stateless applications. Using **Deployments** allows Kubernetes to manage replica sets, support rolling updates, and maintain availability.

### Namespaces
All resources are organized under the `yolo` namespace to isolate the application components and manage resources more cleanly.

---

## Kubernetes Objects Used

- **StatefulSet:** For MongoDB, to maintain persistent storage and stable pod identities.
- **Deployments:** For backend (Node.js API) and frontend (React app) to manage replicas and rolling updates.
- **Services:** Expose backend, frontend, and database pods internally and externally as required.
- **PVCs:** Ensure data persistence for MongoDB even when pods are deleted or rescheduled.
- **Namespace:** `yolo` for resource organization and isolation.
- **Labels & Annotations:** For tracking and managing pods easily.

---

## Best Practices Implemented

1. **Namespace Isolation:** Resources are deployed in a dedicated namespace to avoid conflicts and improve organization.
2. **StatefulSet for MongoDB:** Guarantees stable pod identities and persistent storage for database reliability.
3. **Persistent Volumes (PVCs):** Ensures MongoDB data persists even if pods are restarted or rescheduled.
4. **Deployments for Stateless Apps:** Frontend and backend are deployed with Deployments to support replicas, rolling updates, and high availability.
5. **Services for Networking:** ClusterIP and LoadBalancer/NodePort services decouple pods from network endpoints and provide stable access.
6. **Labels and Annotations:** Helps organize, track, and select pods efficiently.
7. **Environment Variables:** Configuration via environment variables ensures flexibility and portability.
8. **Containerization:** Both frontend and backend are containerized for consistent environments and easier scaling.
9. **Readiness & Liveness Checks:** (Optional if implemented) Ensures traffic only goes to healthy pods.
10. **Rolling Updates:** Deployments allow updates without downtime for continuous availability.

---

## Summary

This deployment demonstrates:

- Full-stack containerized application running on Kubernetes.
- Use of StatefulSet for persistent MongoDB storage.
- Use of Deployments for stateless frontend and backend applications.
- Exposure of services for communication and access.
- Organized namespace and clean architecture for scalability and maintainability.
- Application deployed according to Kubernetes and DevOps best practices.
