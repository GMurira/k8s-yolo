# Explanation for Yolo E-Commerce Kubernetes Deployment

## Overview

This project demonstrates deploying a full-stack docerisez e-commerce application on a managed Kubernetes cluster (GKE). It showcases container orchestration, persistent storage, and application scaling concepts.

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

[See the project here](http://34.14.7.133/#products)


You should see the following
![Alt Text](readmeimages/frontendk8s.png)


# Architecture Components and Rationale
## MongoDB StatefulSet:
MongoDB requires stable network identities and persistent storage to ensure data durability. A StatefulSet guarantees that pods have consistent identities and persistent volumes, unlike Deployments which are ephemeral.

## Persistent Volume Claims (PVCs):
PVCs are used to dynamically provision storage from the underlying infrastructure (in this case, Google Cloud Persistent Disks). This ensures that MongoDB data is stored persistently even if the pod is rescheduled or restarted.

## Deployments for Frontend and Backend:
The frontend and backend are stateless applications. Using Deployments allows Kubernetes to manage replica sets, support rolling updates, and maintain availability.

## Namespaces:
All resources are organized under the yolo namespace to isolate the application components and manage resources more cleanly.

