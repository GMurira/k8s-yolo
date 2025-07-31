
# Yolo App Infrastructure Deployment

This project uses **Ansible** to automate deployment of a full-stack e-commerce application (code-named `yolo`) consisting of:

-Frontend: React (`neoooo2/geoffrey-yolo-client:v1.0.0`)
-Backend: Node.js (`neoooo2/geoffrey-yolo-backend:v1.0.0`)
-Database: MongoDB
- Docker for containerization

---

## 📦 Project Structure

## ⚙️ Prerequisites

Make sure the target server or Vagrant box has:
- Docker installed
- Ansible installed locally (on your host machine)
- Your Ansible inventory is correctly configured
- geerlingguy/ubuntu2004 (virtualbox, 1.0.4) 📦 **Base Vagrant Box**  
[geerlingguy/ubuntu2004 on HashiCorp Cloud](https://portal.cloud.hashicorp.com/vagrant/discover/geerlingguy/ubuntu2004)
- vagrant
!

## 🚀 Deployment Steps

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd yolo

    Run the Ansible Playbook

ansible-playbook -i inventory.yml playbook.yml

![Ansible Execution Screenshot](./Screenshot-from-2025-07-29-10-41-19.png)
