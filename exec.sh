#!/bin/bash

# Install dependencies
npm i

# Give permission to get_public_ip.sh
chmod +x get_public_ip.sh

# Run the node app
node index
