// Dummy Data
const locations = [
  { id: 1, name: 'First Location' },
  { id: 2, name: 'Second Location' },
  { id: 3, name: 'Third Location' },
  { id: 4, name: 'Fourth Location' },
];

exports.getLocations = (req, res) => {
  if (locations.length == 0) {
    return res.status(204).send({ error: 'Not Found' });
  }
  res.send({ locations });
};

exports.addLocation = (req, res) => {
  // TODO: Validate!
  const location = {
    id: locations.length + 1,
    name: req.body.name,
  };

  locations.push(location);

  res.status(201).send(location);
};

exports.getLocation = (req, res) => {
  const locationId = parseInt(req.params.id);
  const location = locations.find(l => l.id === locationId);

  if (!location) {
    return res.status(204).send({ error: 'Not Found' });
  }

  res.send({ location });
};

exports.updateLocation = (req, res) => {
  const locationId = parseInt(req.params.id);
  const locationIndex = locations.findIndex(l => l.id === locationId);
  const location = locations[locationIndex];

  if (!location) {
    return res.status(204).send({ error: 'Not Found' });
  }

  // TODO: Validate!
  const updatedName = req.body.name;

  location.name = updatedName;

  locations[locationIndex] = location;

  res.status(200).send(location);
};

exports.deleteLocation = (req, res) => {
  const locationId = parseInt(req.params.id);
  const location = locations.find(l => l.id === locationId);
  if (!location) {
    return res.status(204).send({ error: 'Not Found' });
  }

  const index = locations.indexOf(location);
  locations.splice(index, 1);

  res.send(location);
};
