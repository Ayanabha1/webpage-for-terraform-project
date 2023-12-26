#!/bin/bash

# Install nodejs and npm
apt update -y
apt install -y nodejs npm

# Run the node app
node index
