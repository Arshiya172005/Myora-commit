// routes/productRoutes.js
const express = require("express");
const router = express.Router();

let cart = [];

// 🟢 Fetch all products
router.get("/productList", (req, res) => {
    // example static data
    res.json([
        { id: 1, name: "Headphones", price: 1200 },
        { id: 2, name: "Smartwatch", price: 3000 },
        { id: 3, name: "Speaker", price: 1500 },
    ]);
});

// 🟢 Add to cart
router.post("/cart/add", (req, res) => {
    const { productId, name, price } = req.body;
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ productId, name, price, quantity: 1 });
    }
    res.json({ success: true, cart });
});

// 🟢 View cart
router.get("/cart", (req, res) => {
    res.json(cart);
});

module.exports = router;
