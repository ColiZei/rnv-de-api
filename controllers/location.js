const { Location } = require('../models');
const { error } = require('../util/error');

exports.getLocations = async (req, res, next) => {
  try {
    const allLocations = await Location.findAll();
    if (!allLocations) {
      throw error(404, 'Could not find post.');
    }

    res.send({ allLocations });
  } catch (err) {
    next(err);
  }
};

exports.addLocation = async (req, res, next) => {
  const newLocation = {
    name: req.body.name,
    type: req.body.type,
    category: req.body.category,
    cLong: req.body.cLong,
    cLat: req.body.cLat,
    description: req.body.description,
    permanentlyClosed: req.body.permanentlyClosed,
    openingHours: req.body.openingHours,
  };

  try {
    const location = await Location.create(newLocation);
    res.status(201).send(location);
  } catch (err) {
    next(err);
  }
};

exports.getLocation = async (req, res, next) => {
  const { locationId } = req.params;

  try {
    const location = await Location.findByPk(locationId);
    if (!location) {
      throw error(204);
    }

    res.send({ location });
  } catch (err) {
    return next(err);
  }
};

exports.updateLocation = async (req, res, next) => {
  const { locationId } = req.params;

  try {
    const location = await Location.findByPk(locationId);
    if (!location) {
      throw error(204);
    }

    location.name = req.body.name;
    location.type = req.body.type;
    location.category = req.body.category;
    location.cLong = req.body.cLong;
    location.cLat = req.body.cLat;
    location.description = req.body.description;
    location.permanentlyClosed = req.body.permanentlyClosed;
    location.openingHours = req.body.openingHours;

    const result = await location.save();

    res.send({ message: 'Location updated!', location: result });
  } catch (err) {
    next(err);
  }
};

exports.deleteLocation = async (req, res, next) => {
  const { locationId } = req.params;

  try {
    const location = await Location.findByPk(locationId);
    if (!location) {
      throw error(204);
    }

    const deleted = await Location.destroy({ where: { id: locationId } });
    if (deleted) {
      res.send({ message: 'Location deleted!' });
    }
  } catch (err) {
    return next(err);
  }
};
