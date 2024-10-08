import express from 'express';
const app = express();
const port = 80; 

app.get('/', (req, res) => {
  const response = {
    message: "My name is Sai Priyanka Kakarla",
    timestamp: Date.now() 
  };
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response)); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});