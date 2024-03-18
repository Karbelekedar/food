// models/organization.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Organization", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
