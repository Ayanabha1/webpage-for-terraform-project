const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;
// Serve static files (including the HTML and JavaScript files)
app.use(express.static('public'));
// Endpoint to get the public IP address
app.get('/get_public_ip', (req, res) => {
  // Execute the Bash script
  exec('./get_public_ip.sh', (error, stdout, stderr) => {
    if (error) {
      console.error();
      res.status(500).send('Internal Server Error');
    } else {
      // Send the public IP address as the response
      res.send(stdout.trim());
    }
  });
});
// Start the server
app.listen(port, () => {
  console.log();
});
