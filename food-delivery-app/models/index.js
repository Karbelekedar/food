// models/index.js
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://user:password@localhost:5432/food_delivery"
);

const Organization = require("./organization")(sequelize);
const Item = require("./item")(sequelize);
const Pricing = require("./pricing")(sequelize);

Organization.hasMany(Pricing);
Pricing.belongsTo(Organization);
Item.hasMany(Pricing);
Pricing.belongsTo(Item);

module.exports = {
  sequelize,
  Organization,
  Item,
  Pricing,
};
