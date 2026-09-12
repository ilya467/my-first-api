const express = require('express');
const router = express.Router();

// فرضی مصنوعات کا ڈیٹا (Etsy کی طرز پر ہینڈ میڈ اشیاء)
router.get('/', (req, res) => {
    const products = [
        { id: 1, title: "ہاتھ سے بنا ہوا خوبصورت ہار", price: "2500 PKR", category: "Handmade Jewelry" },
        { id: 2, title: "لکڑی کا نقش نگاری والا شو پیس", price: "4500 PKR", category: "Home Decor" },
        { id: 3, title: "روایتی کڑھائی والا جھوتہ", price: "1800 PKR", category: "Vintage Crafts" }
    ];

    res.json({
        status: "Success",
        shop_name: "Pakistani Art & Craft",
        total_products: products.length,
        items: products
    });
});

module.exports = router;