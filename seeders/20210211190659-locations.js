'use strict';

function randomName(numWhiteSpace) {
  let name = Math.random().toString(36).substring(2, 15);
  for (let i = 0; i < numWhiteSpace; i++) {
    name += ' ' + Math.random().toString(36).substring(2, 15);
  }
  return name;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

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

    const groups = ['vegan', 'veggie', 'omni'];
    const cities = ['Mannheim', 'Heidelberg', 'Karlsruhe', 'Worms'];
    const types = ['restaurant', 'cafe', 'snack', 'bar', 'icecream'];

    const locations = [];
    for (let i = 0; i < 50; i++) {
      const location = {
        name: randomName(getRandomInt(2)),
        group: groups[getRandomInt(groups.length)],
        type: types[getRandomInt(types.length)],
        cLong: getRandomInRange(8.1, 9.2, 6),
        cLat: getRandomInRange(49.0, 49.7, 5),
        description: randomName(getRandomInt(150)),
        permanentlyClosed: getRandomInt(3) == 1,
        openingHours:
          'monday[08:00:00-19:00:00]||wednesday[08:00:00-19:00:00]||friday[12:00:00-23:00:00]',
        createdAt: new Date(),
        updatedAt: new Date(),
        street: `${randomName(getRandomInt(2))} ${getRandomInRange(1, 155, 0)}`,
        city: cities[getRandomInt(cities.length)],
        zipcode: getRandomInRange(67000, 69000, 0),
        website: `https://www.${randomName(getRandomInt(1))}.de`,
      };
      locations.push(location);
    }

    await queryInterface.bulkInsert('Locations', locations, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Locations', null, { truncate: true });
  },
};
