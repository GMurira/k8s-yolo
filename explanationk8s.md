# Explanation for Yolo E-Commerce Kubernetes Deployment

## Overview

This project demonstrates deploying a full-stack e-commerce application on a managed Kubernetes cluster (GKE). It showcases container orchestration, persistent storage, and application scaling concepts.

---

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

## Components and Why

- **MongoDB StatefulSet:** Ensures stable network ID and persistent storage for database pods. StatefulSet is required over Deployment because MongoDB needs stable storage and identity.
- **Persistent Volume Claims (PVCs):** Used to request storage from the cluster’s underlying infrastructure (GCP Persistent Disks in this case). PVCs guarantee that data persists beyond pod lifecycle.
- **Deployments for Frontend and Backend:** Manage replica sets and rolling updates for stateless applications.
- **Namespaces:** Organize resources in the `yolo` namespace to isolate application components.
 
---