Vagrant.configure("2") do |config|
  # Use Ubuntu 20.04 base box
  config.vm.box = "geerlingguy/ubuntu2004"
  config.vm.box_version = "1.0.4"

  # Assign a private IP to the VM
  config.vm.network "private_network", ip: "192.168.56.10"

  # Correct forwarded ports
  config.vm.network "forwarded_port", guest: 3000, host: 3000   # React frontend
  config.vm.network "forwarded_port", guest: 5000, host: 5000   # Node backend
  config.vm.network "forwarded_port", guest: 27017, host: 27017 # MongoDB

  # VM resources
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
  end
end
