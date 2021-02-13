const express = require('express');

const locationController = require('../controllers/location');

const router = express.Router();

router.get('/locations', locationController.getLocations);

router.post('/location', locationController.addLocation);

router.get('/location/:locationId', locationController.getLocation);

router.put('/location/:locationId', locationController.updateLocation);

router.delete('/location/:locationId', locationController.deleteLocation);

module.exports = router;
