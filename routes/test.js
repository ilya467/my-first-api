const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: "Success",
    message: "میرا کلاؤڈ API بالکل زبردست کام کر رہا ہے!"
  });
});

module.exports = router;