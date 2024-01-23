# filename: setup_backend.sh  
  
# Navigate to the project directory  
# cd path/to/your/project  
  
# Initialize a new Node.js project  
npm init -y  
  
# Install Express.js and other necessary packages  
npm install express passport passport-oauth2 dotenv  
  
# Create a basic server file  
echo "const express = require('express');  
const passport = require('passport');  
require('dotenv').config();  
  
const app = express();  
  
// Passport OAuth setup would go here  
  
app.get('/', (req, res) => {  
  res.send('Welcome to the GenAI ABT Portal MVP!');  
});  
  
const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
  console.log(\`Server is running on port \${PORT}\`);  
});" > server.js  
  
# Create a .env file for environment variables  
echo "PORT=3000" > .env  
  
# Add a start script to package.json  
sed -i '/"test":/a \ \ "start": "node server.js",' package.json  
  
# Reminder to the user to set up OAuth and database connection  
echo "Don't forget to set up OAuth authentication and the Pinecode database connection in your server.js file."  