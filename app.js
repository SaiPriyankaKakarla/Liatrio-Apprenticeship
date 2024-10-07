const express = require('express');
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
  const response = {
    message: "My name is Sai Priyanka Kakarla",
    timestamp: Date.now() 
  };
  res.json(response); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
