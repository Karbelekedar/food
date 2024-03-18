// models/pricing.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Pricing", {
    organization_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Organizations",
        key: "id",
      },
    },
    item_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_distance_in_km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    base_price_cents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    per_km_price_cents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
