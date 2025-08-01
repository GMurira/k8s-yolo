
# Yolo App Infrastructure Deployment

This project uses **Ansible** to automate deployment of a full-stack e-commerce application (code-named `yolo`) consisting of:

-Frontend: React (`neoooo2/geoffrey-yolo-client:v1.0.0`)
-Backend: Node.js (`neoooo2/geoffrey-yolo-backend:v1.0.0`)
-Database: MongoDB
- Docker for containerization

---
## ⚙️ Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v20+)
- [MongoDB](https://www.mongodb.com/) (v6.0+)
- [Docker](https://docs.docker.com/) (v20.10+)
- [Docker Compose](https://docs.docker.com/compose/) (v2.0+)
- [Vagrant](https://www.vagrantup.com/) (1.0.4+)
- [Ansible](https://www.ansible.com/) (installed on your **host** machine)

### 🧱 Base VM Box
- Vagrant Box: [`geerlingguy/ubuntu2004`](https://portal.cloud.hashicorp.com/vagrant/discover/geerlingguy/ubuntu2004)

### 🛠️ Vagrant Setup
```bash
sudo apt update
sudo apt install vagrant
vagrant --version

<pre> ```bash # Initialize the geerlingguy/ubuntu2004 Vagrant box vagrant init geerlingguy/ubuntu2004 # Start and provision the Vagrant environment vagrant up ``` </pre>
- vagrant, to install vagrantrant
!
<pre>sudo apt get update</pre>
<pre>sudo apt install vagrant</pre>

Ensure that it is installed
<pre>vagrant --version</pre>
##  Deployment Steps

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd yolo

Why Use Ansible in This Project?
In this project, Ansible is used to automate the deployment of the full-stack yolo e-commerce application inside a Vagrant-provisioned Ubuntu 20.04 virtual machine. It eliminates the need for manual setup by:

Installing required software (like Docker and Docker Compose)

Pulling Docker images from Docker Hub

Setting up and running containers for the backend, frontend, and MongoDB

Ensuring idempotent infrastructure setup — repeatable and consistent



Ansible Project Structure


yolo/
├── ansible/
│ ├── inventory.yml
│ ├── playbook.yml
│ └── roles/
│ ├── setup-mongodb/
│ │ └── tasks/main.yml
│ ├── backend-deployment/
│ │ └── tasks/main.yml
│ └── frontend-deployment/
│ └── tasks/main.yml
├── Vagrantfile
├── docker-compose.yml
├── backend/
├── client/
└── README.md

    Run the Ansible Playbook

<pre>ansible-playbook -i inventory.yml playbook.yml</pre>

![Alt Text](readmeimages/ansible.png)

# USe vagrant to manage your Virtual Machine
<pre> Vagrant Up</pre>

Gain acces to your Vagrant VM
<Pre> Vagrant ssh</pre>

Once you have access build you project locally in the terminal
<pre>docker-cpmpose build</pre>
<pre>docker-compose up -d</pre> 

The application is now up and running, inside your host machine thanks to port forwading in the
vagrant file
<pre> # Correct forwarded ports
  config.vm.network "forwarded_port", guest: 3000, host: 3000   # React frontend
  config.vm.network "forwarded_port", guest: 5000, host: 5000   # Node backend
  config.vm.network "forwarded_port", guest: 27017, host: 27017 # MongoDB
</pre>

Navigate to your local browser at
<pre>http://localhost:3000</pre>

![Alt Text](readmeimages/frontend.png)

Add products to the application, to ensure functionality is working.
![Alt Text](readmeimages/addaproduct.png)

USe curl to see if the backend received the new data succesfully

![Alt Text](readmeimages/readbackendwithcurl.png)

Congratulations your appilcation is you application is now up and running inside your Vagrant VM(Virtual Machine)

![Alt Text](readmeimages/persistdata.png)

To stop the apllication, run
<pre> docker-compose down</pre>

exit from your vagrant machine
<pre>exit</pre>
Stop the vagrant machine
<pre>vagrant halt</pre>