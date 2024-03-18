const pricingService = require("../services/pricingService");

exports.calculatePrice = async (req, res) => {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;

    const price = await pricingService.calculatePrice(
      zone,
      organization_id,
      total_distance,
      item_type
    );

    res.json({ total_price: price });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
