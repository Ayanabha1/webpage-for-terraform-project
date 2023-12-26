document.addEventListener('DOMContentLoaded', function() {
  // Fetch the public IP address using the Bash script
  fetch('/get_public_ip')
    .then(response => response.text())
    .then(publicIp => {
      // Update the content of the public-ip paragraph
      document.getElementById('public-ip').innerText = publicIp;
    })
    .catch(error => {
      console.error('Error fetching public IP:', error);
      document.getElementById('public-ip').innerText = 'Error fetching public IP';
    });
});
