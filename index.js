const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "ہیلو دنیا! مبارک ہو! Node.js API کامیابی سے چل رہی ہے!" });
});

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: "علی" },
    { id: 2, name: "احمد" }
  ];
  res.json(users);
});

app.get('/test', (req, res) => {
  res.json({
    status: "Success",
    message: "میرا کلاؤڈ API بالکل زبردست کام کر رہا ہے!"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});