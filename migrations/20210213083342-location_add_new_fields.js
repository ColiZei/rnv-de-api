'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Locations', 'street', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Locations', 'city', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Locations', 'zipcode', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Locations', 'website', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Locations', 'street');
    await queryInterface.removeColumn('Locations', 'city');
    await queryInterface.removeColumn('Locations', 'zipcode');
    await queryInterface.removeColumn('Locations', 'website');
  },
};
