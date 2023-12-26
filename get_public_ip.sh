#!/bin/bash
# get_public_ip.sh
# Obtain the public IP address
public_ip=$(ip addr show eth0 | awk '/inet / {print $2}' | cut -d'/' -f1)
# Print the public IP address
echo $public_ip
