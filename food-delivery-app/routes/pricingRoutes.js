// routes/pricingRoutes.js
const express = require("express");
const router = express.Router();
const pricingController = require("../controllers/pricingController");

router.post("/pricing", pricingController.calculatePrice);

module.exports = router;
