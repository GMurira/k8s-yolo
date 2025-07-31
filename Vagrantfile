Vagrant.configure("2") do |config|
  config.vm.box = "geerlingguy/ubuntu2004"
  config.vm.box_version = "1.0.4"

  config.vm.network "private_network", ip: "192.168.56.10"

  # Port forwarding for React frontend
  config.vm.network "forwarded_port", guest: 80, host: 3000

  # Port forwarding for Node.js backend
  config.vm.network "forwarded_port", guest: 5000, host: 5000

  # Port forwarding for MongoDB
  config.vm.network "forwarded_port", guest: 27017, host: 27017

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
  end
end
