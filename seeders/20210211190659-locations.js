'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    /*
        name: DataTypes.STRING,
    type: DataTypes.ENUM('vegan', 'veggie', 'omni'),
    category: DataTypes.STRING,
    cLong: DataTypes.DECIMAL(11, 8),
    cLat: DataTypes.DECIMAL(10, 8),
    description: DataTypes.TEXT,
    permanentlyClosed: DataTypes.BOOLEAN,
    openingHours: DataTypes.STRING

    */
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          name: 'Cafe Vienna',
          type: 'omni',
          category: 'restaurant',
          cLong: 8.4692652,
          cLat: 49.4899161,
          description: 'Hier wird man viel Text stehen ' + Math.random(1, 10),
          permanentlyClosed: false,
          openingHours:
            'monday[12:00:00-17:00:00|18:00:00-22:00:00]||friday[12:00:00-17:00:00|18:00:00-23:00:00]',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
