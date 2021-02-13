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
    await queryInterface.bulkInsert(
      'Locations',
      [
        {
          name: 'Cafe Vienna',
          type: 'omni',
          category: 'restaurant',
          cLong: 8.4692652,
          cLat: 49.4899161,
          description:
            'Kult! Chronisch überfüllte Studikneipe, vegane Kennzeichnung (z.B. Tofu-Burger, Nudeln, Salat). Faire Preise.',
          permanentlyClosed: false,
          openingHours:
            'monday[12:00:00-17:00:00|18:00:00-22:00:00]||friday[12:00:00-17:00:00|18:00:00-23:00:00]',
          createdAt: new Date(),
          updatedAt: new Date(),
          street: 'S1 15',
          city: 'Mannheim',
          zipcode: 68161,
          website: 'https://cafevienna.leaftoken.io/',
        },
        {
          name: 'Kombüse',
          type: 'veggie',
          category: 'restaurant',
          cLong: 8.4579926,
          cLat: 49.4937637,
          description:
            'Alles vegan möglich (Falafel, Burger, Sandwich, etc.). Veganes Tagesessen und -dessert, vernünftiges Preis-Leistungsverhältnis. Hippes Publikum.',
          permanentlyClosed: false,
          openingHours:
            'tuesday[11:00:00-23:00:00]||wednesday[12:00:00-17:00:00|18:00:00-23:00:00]||friday[12:00:00-17:00:00|18:00:00-23:00:00]',
          createdAt: new Date(),
          updatedAt: new Date(),
          street: 'Jungbuschstraße 23',
          city: 'Mannheim',
          zipcode: 68159,
          website: 'https://www.kombuese-ma.de',
        },
        {
          name: 'Bio Bäckerei-Bihn',
          type: 'omni',
          category: 'shop',
          cLong: 8.4657,
          cLat: 49.48665,
          description:
            'Bio-Bäckerei, vegane Kennzeichnung (z.B. Croissants), kundiges Personal.',
          permanentlyClosed: false,
          openingHours:
            'monday[08:00:00-19:00:00]||wednesday[08:00:00-19:00:00]||friday[12:00:00-23:00:00]',
          createdAt: new Date(),
          updatedAt: new Date(),
          street: 'Stadthaus N1',
          city: 'Mannheim',
          zipcode: 68161,
          website: 'https://www.baeckerei-bihn.de',
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
