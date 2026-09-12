const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// یہاں ہم نے نئے ٹیسٹ راؤٹ کے ماڈیول کو امپورٹ کر لیا ہے
const testRoute = require('./routes/test');

// اب ہم بتا رہے ہیں کہ جب بھی /test پر جائیں تو اس ماڈیول کو استعمال کرو
app.use('/test', testRoute);

// بنیادی ہوم پیج راؤٹ
app.get('/', (req, res) => {
  res.json({ message: "ہیلو دنیا! ہماری ماڈیولر API کامیابی سے چل رہی ہے!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});const express = require('express');
const app = express();

app.use(express.json());

// ماڈیولر راؤٹ امپورٹ کریں
const testRoute = require('./routes/test');
app.use('/test', testRoute);

app.get('/', (req, res) => {
  res.json({ message: "ہیلو دنیا! ہماری ماڈیولر API کامیابی سے چل رہی ہے!" });
});

// اہم: Vercel کے لیے app.listen کو ہٹا کر نیچے والا ایکسپورٹ لکھنا ضروری ہے
module.exports = app;