// services/pricingService.js
const { Pricing } = require("../models");

exports.calculatePrice = async (
  zone,
  organizationId,
  totalDistance,
  itemType
) => {
  const pricing = await Pricing.findOne({
    where: {
      organization_id: organizationId,
      item_type: itemType,
      zone: zone,
    },
  });

  if (!pricing) {
    throw new Error("Pricing not found");
  }

  const { base_distance_in_km, base_price_cents, per_km_price_cents } = pricing;

  let totalPrice = base_price_cents;

  if (totalDistance > base_distance_in_km) {
    const extraDistance = totalDistance - base_distance_in_km;
    totalPrice += extraDistance * per_km_price_cents;
  }

  return totalPrice / 100; // Convert cents to euros
};
