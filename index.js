const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to DevOps CI/CD Pipeline Live Demo!",
    version: "1.0.0",
    status: "Healthy"
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
