const express = require('express');

const locationController = require('../controllers/location');
const locationValidator = require('../util/validators/locationValidator');

const router = express.Router();

router.get('/locations', locationController.getLocations);

router.post(
  '/location',
  locationValidator.validate('create'),
  locationController.addLocation
);

router.get('/location/:locationId', locationController.getLocation);

router.put(
  '/location/:locationId',
  locationValidator.validate('update'),
  locationController.updateLocation
);

router.delete('/location/:locationId', locationController.deleteLocation);

module.exports = router;
