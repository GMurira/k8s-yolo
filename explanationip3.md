
# Yolo App Infrastructure Deployment

This project uses **Ansible** to automate deployment of a full-stack e-commerce application (code-named `yolo`) consisting of:

-Frontend: React (`neoooo2/geoffrey-yolo-client:v1.0.0`)
-Backend: Node.js (`neoooo2/geoffrey-yolo-backend:v1.0.0`)
-Database: MongoDB
- Docker for containerization

---

##  Project Structure

## ⚙️ Prerequisites

Make sure the target server or Vagrant box has:
- Docker installed
- Ansible installed locally (on your host machine)
- Your Ansible inventory is correctly configured
- geerlingguy/ubuntu2004 (virtualbox, 1.0.4)  **Base Vagrant Box**  
[geerlingguy/ubuntu2004 on HashiCorp Cloud]

<pre> ```bash # Initialize the geerlingguy/ubuntu2004 Vagrant box vagrant init geerlingguy/ubuntu2004 # Start and provision the Vagrant environment vagrant up ``` </pre>
- vagrant, to install vagrantrant
!
<pre>sudo apt get update<pre>
<pre>sudo apt install vagrant<pre>

Ensure that it is installed
<pre>vagrant --version<pre>
##  Deployment Steps

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd yolo

    Run the Ansible Playbook

<pre>ansible-playbook -i inventory.yml playbook.yml<pre>

![Alt Text](readmeimages/ansible.png)


Run you vagrant VM
<pre> Vagrant Up<pre>

Gain acces to your Vagrant VM
<Pre> Vagrant ssh<pre>

Once you have access build you project locally in the terminal
<pre>docker-cpmpose build<pre>
<pre>docker-compose up -d<pre> 

The application is now up and running, inside your host machine thanks to port forwading in the
vagrant file
<pre> # Correct forwarded ports
  config.vm.network "forwarded_port", guest: 3000, host: 3000   # React frontend
  config.vm.network "forwarded_port", guest: 5000, host: 5000   # Node backend
  config.vm.network "forwarded_port", guest: 27017, host: 27017 # MongoDB
<pre>

navigate to your local browser at
<pre>http://localhost:3000<pre>

![Alt Text](readmeimages/ansible.png)