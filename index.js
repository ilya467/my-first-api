const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. پہلی API Endpoint
app.get('/', (req, res) => {
    res.json({ message: "مبارک ہو! آپ کی پہلی Node.js API کامیابی سے چل رہی ہے۔" });
});

// 2. دوسری API Endpoint (صارفین کا ڈیٹا)
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: "علی" },
        { id: 2, name: "احمد" }
    ];
    res.json(users);
});

// سرور اسٹارٹ کریں
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});