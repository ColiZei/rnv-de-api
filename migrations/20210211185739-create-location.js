'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM('vegan', 'veggie', 'omni'),
      },
      category: {
        type: Sequelize.STRING,
      },
      cLong: {
        type: Sequelize.DECIMAL(11, 8),
      },
      cLat: {
        type: Sequelize.DECIMAL(10, 8),
      },
      description: {
        type: Sequelize.TEXT,
      },
      permanentlyClosed: {
        type: Sequelize.BOOLEAN,
      },
      openingHours: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  },
};
