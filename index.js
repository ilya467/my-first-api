const express = require('express');
const app = express();

app.use(express.json());

// پرانا ٹیسٹ راؤٹ
const testRoute = require('./routes/test');
app.use('/test', testRoute);

// نیا پروڈکٹس راؤٹ
const productRoute = require('./routes/products');
app.use('/products', productRoute);

app.get('/', (req, res) => {
    res.json({ message: "API میرا کلاؤڈ پہ کام کر رہا ہے" });
});

module.exports = app;