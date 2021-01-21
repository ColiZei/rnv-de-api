const express = require('express');

const locationRoutes = require('./routes/location');

const app = express();

app.use(express.json());

app.use('/', locationRoutes);

app.use((req, res, next) => {
  res.status(404).send({ error: '404 - Not found' });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listen to port ${PORT}...`);
});
