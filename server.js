'use strict';

const express = require('express');
const app = express();

// allows json to be attached.
app.use(express.json());

app.get('/person', (req, res) => {

  let { name } = req.query;

  // res.send(name);

  res.json({
    name,
  });
});

module.exports = {
  app,
};
