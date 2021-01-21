const express = require('express');

const locationController = require('../controllers/location');

const router = express.Router();

router.get('/locations', locationController.getLocations);

router.post('/location', locationController.addLocation);

router.get('/location/:id', locationController.getLocation);

router.put('/location/:id', locationController.updateLocation);

router.delete('/location/:id', locationController.deleteLocation);

module.exports = router;
