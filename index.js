const express = require('express');
const app = express();

app.use(express.json());

const testRoute = require('./routes/test');
app.use('/test', testRoute);

app.get('/', (req, res) => {
  res.json({ message: "ہیلو دنیا! ہماری ماڈیولر API کامیابی سے چل رہی ہے!" });
});

module.exports = app; 