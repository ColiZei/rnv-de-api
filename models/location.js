'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      group: DataTypes.ENUM('vegan', 'veggie', 'omni'),
      type: DataTypes.STRING,
      cLong: DataTypes.DECIMAL,
      cLat: DataTypes.DECIMAL,
      description: DataTypes.TEXT,
      permanentlyClosed: DataTypes.BOOLEAN,
      openingHours: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      zipcode: DataTypes.INTEGER,
      website: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Location',
    }
  );
  return Location;
};
